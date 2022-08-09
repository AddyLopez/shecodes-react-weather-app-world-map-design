import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./styles/Forecast.css";

export default function Forecast(props) {
  const [forecastData, setForecastData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setForecastData({
      ready: true,
      icon: response.data.daily[0].weather[0].icon,
      "temp-max": response.data.daily[0].temp.max,
      "temp-min": response.data.daily[0].temp.min,
      weekday: response.data.daily[0].dt,
    });
  }

  if (forecastData.ready) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <ForecastDay weekday={forecastData.weekday} />
            <WeatherIcon code={forecastData.icon} size={42} />
            <div>
              <span className="min-temp">
                {Math.round(forecastData["temp-min"])}°{" "}
              </span>
              <span className="max-temp">
                {Math.round(forecastData["temp-max"])}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let units = "imperial";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
