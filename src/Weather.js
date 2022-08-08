import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import ConversionButtons from "./ConversionButtons";
import "./styles/Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description.toUpperCase(),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    // make API call with city
    const apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
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
          <ConversionButtons data={weatherData} />
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
