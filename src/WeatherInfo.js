import React from "react";
import MonthDateYear from "./MonthDateYear";
import WeekdayAndTime from "./WeekdayAndTime";
import WeatherIcon from "./WeatherIcon";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import "./styles/WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
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
            <WeatherIcon code={props.data.icon} alt={props.data.alt} />
            <span className="main-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="main-temperature-units">°F</span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="secondary-data">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {props.data.wind} mph</li>
            <li>
              Sunrise: <Sunrise code={props.data.sunrise} />
            </li>
            <li>
              Sunset: <Sunset code={props.data.sunset} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
