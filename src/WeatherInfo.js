import React from "react";
import MonthDateYear from "./MonthDateYear";
import WeekdayAndTime from "./WeekdayAndTime";
import WeatherIcon from "./WeatherIcon";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import "./styles/WeatherInfo.css";

export default function WeatherInfo(props) {
  function evaluateTemperature() {
    let temperature = "";
    if (props.units.tempUnits === "°F") {
      temperature = Math.round(props.data.temperature);
    } else if (props.units.tempUnits === "°C") {
      temperature = Math.round(((props.data.temperature - 32) * 5) / 9);
    }
    return temperature;
  }
  function evaluateWindSpeed() {
    let windSpeed = "";
    if (props.units.windSpeedUnits === "mph") {
      windSpeed = Math.round(props.data.wind);
    } else if (props.units.windSpeedUnits === "km/h") {
      windSpeed = Math.round(props.data.wind * 1.609344);
    }
    return windSpeed;
  }
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul className="today">
        <li>
          <MonthDateYear />
        </li>
        <li>
          <WeekdayAndTime />
        </li>
      </ul>
      <div className="main-display">
        <div className=" main-temperature-display-container">
          <div className="main-temperature-display">
            <WeatherIcon code={props.data.icon} size={64} />
            <span className="main-temperature">{evaluateTemperature()}</span>
            <span className="main-temperature-units">
              {props.units.tempUnits}
            </span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="secondary-data">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>
              Wind Speed: {evaluateWindSpeed()} {props.units.windSpeedUnits}
            </li>
            <li>
              Sunrise:{" "}
              <Sunrise
                sunrise={props.data.sunrise}
                timezoneOffset={props.data.timezoneOffset}
              />
            </li>
            <li>
              Sunset:{" "}
              <Sunset
                sunset={props.data.sunset}
                timezoneOffset={props.data.timezoneOffset}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
