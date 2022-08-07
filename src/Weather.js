import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Saturday 17:09</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="main-display">
        <div className=" main-temperature-display">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <span className="main-temperature">7</span>
          <span className="main-temperature-units">°C</span>
        </div>
        <div className="secondary-data">
          <ul>
            <li>Precipitation: 18%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
