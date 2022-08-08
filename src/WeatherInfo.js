import React from "react";
import MonthDateYear from "./MonthDateYear";
import WeekdayAndTime from "./WeekdayAndTime";
import "./WeatherInfo.css";

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
            <img src={props.data.iconUrl} alt={props.data.description} />
            <span className="main-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="main-temperature-units">°C</span>
          </div>
          <div className="description">{props.data.description}</div>
        </div>
        <div className="secondary-data">
          <ul>
            <li>Precipitation: 18%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
