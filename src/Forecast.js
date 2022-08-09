import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./styles/Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response);
    setReady(true);
    setForecastData(response.data.daily);
  }

  if (ready) {
    return (
      <div className="Forecast">
        {forecastData.map(function (dailyForecastData, index) {
          if (index <= 6) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecastData} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "59446b2366c35cbe45d81fb3e3545297";
    let units = "imperial";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
