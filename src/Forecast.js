import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./styles/Forecast.css";

export default function Forecast() {
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
