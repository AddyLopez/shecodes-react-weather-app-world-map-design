import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherFooter from "./WeatherFooter";
import Forecast from "./Forecast";
import "./styles/Weather.css";

export default function Weather({ defaultCity = "Albuquerque" }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  const [displayUnits, setDisplayUnits] = useState({
    tempUnits: "°F",
    windSpeedUnits: "mph",
  });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      country: response.data.sys.country,
      description: response.data.weather[0].description.toUpperCase(),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      temperature: response.data.main.temp,
      timezoneOffset: response.data.timezone,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let apiUnits = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${apiUnits}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset(); // resets the form so that the search term won't persist across renderings
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function assignImperialUnits() {
    setDisplayUnits({
      tempUnits: "°F",
      windSpeedUnits: "mph",
    });
  }
  function assignMetricUnits() {
    setDisplayUnits({
      tempUnits: "°C",
      windSpeedUnits: "km/h",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter the name of a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="btn btn-primary" />
          <div className="conversion-buttons">
            <button
              type="button"
              className="btn btn-success"
              onClick={assignImperialUnits}
            >
              °F
            </button>
            <button
              type="button"
              className="btn btn-success ms-2"
              onClick={assignMetricUnits}
            >
              °C
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} units={displayUnits} />
        <Forecast coordinates={weatherData.coordinates} units={displayUnits} />
        <WeatherFooter />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
