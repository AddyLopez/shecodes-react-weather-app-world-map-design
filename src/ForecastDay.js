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
  function evaluateMinTemp() {
    let minTemperature = "";
    let fahrenheitMinTemp = Math.round(props.data.temp.min);
    let celsiusMinTemp = Math.round(((props.data.temp.min - 32) * 5) / 9);
    if (props.units.tempUnits === "°F") {
      minTemperature = fahrenheitMinTemp;
    } else if (props.units.tempUnits === "°C") {
      minTemperature = celsiusMinTemp;
    }
    return `${minTemperature}°`;
  }
  function evaluateMaxTemp() {
    let maxTemperature = "";
    let fahrenheitMaxTemp = Math.round(props.data.temp.max);
    let celsiusMaxTemp = Math.round(((props.data.temp.max - 32) * 5) / 9);
    if (props.units.tempUnits === "°F") {
      maxTemperature = fahrenheitMaxTemp;
    } else if (props.units.tempUnits === "°C") {
      maxTemperature = celsiusMaxTemp;
    }
    return `${maxTemperature}°`;
  }
  return (
    <div className="ForecastDay">
      <div className="forecast-weekday">{formatDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={42} />
      <div>
        <span className="min-temp">{evaluateMinTemp()}</span>
        <span className="max-temp">{evaluateMaxTemp()}</span>
      </div>
    </div>
  );
}
