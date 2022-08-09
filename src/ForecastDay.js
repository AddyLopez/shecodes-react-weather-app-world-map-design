import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles/ForecastDay.css";

export default function ForecastDay(props) {
  function formatDay() {
    let forecastDate = new Date(props.data.dt * 1000);
    let forecastDay = forecastDate.getDay();
    let forecastDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return forecastDays[forecastDay];
  }
  function minTemp() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }
  return (
    <div className="ForecastDay">
      <div className="forecast-weekday">{formatDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div>
        <span className="min-temp">{minTemp()} </span>
        <span className="max-temp">{maxTemp()}</span>
      </div>
    </div>
  );
}
