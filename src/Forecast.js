import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./styles/Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "59446b2366c35cbe45d81fb3e3545297";
  let units = "imperial";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="weekday">Thu</div>
          <WeatherIcon code="01d" size={42} />
          <div>
            <span className="min-temp">72° </span>
            <span className="max-temp">87°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
