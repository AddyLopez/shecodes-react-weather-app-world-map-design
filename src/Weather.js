import axios from "axios";
import React, { useState } from "react";
import MonthDateYear from "./MonthDateYear";
import WeekdayAndTime from "./WeekdayAndTime";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      // date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter the name of a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <MonthDateYear />
          </li>
          <li>
            <WeekdayAndTime />
          </li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="main-display">
          <div className=" main-temperature-display">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="main-temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="main-temperature-units">°C</span>
          </div>
          <div className="secondary-data">
            <ul>
              <li>Precipitation: 18%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let units = "metric";
    let city = props.defaultCity;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
