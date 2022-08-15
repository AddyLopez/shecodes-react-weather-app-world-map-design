import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import ChangeMapCoordinates from "./ChangeMapCoordinates";
import axios from "axios";
import "./styles/Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setReady(true);
    setForecastData(response.data.daily);
  }

  if (ready) {
    return (
      <div>
        <div className="Forecast">
          {forecastData.map(function (dailyForecastData, index) {
            if (index <= 6) {
              return (
                <div key={index}>
                  <ForecastDay data={dailyForecastData} units={props.units} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <ChangeMapCoordinates coords={props.coordinates} />
      </div>
    );
  } else {
    let apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let apiUnits = "imperial";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${apiUnits}`;

    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={75}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: "75%" }}
        >
          Loading...
        </div>
      </div>
    );
  }
}
