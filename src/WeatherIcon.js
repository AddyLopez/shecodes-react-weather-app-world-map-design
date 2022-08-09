import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./styles/WeatherIcon.css";

export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "CLEAR_DAY",
    "11n": "CLEAR_NIGHT",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const iconColorMapping = {
    "01d": "#ffd300",
    "01n": "#5452a3",
    "02d": "#f77c7c",
    "02n": "#ac5fb5",
    "03d": "#f77c7c",
    "03n": "#ac5fb5",
    "04d": "#81c3f8",
    "04n": "#81c3f8",
    "09d": "#a7a7d6",
    "09n": "#a7a7d6",
    "10d": "#a7a7d6",
    "10n": "#a7a7d6",
    "11d": "#ffd300",
    "11n": "#5452a3",
    "13d": "#d8dce2",
    "13n": "#d8dce2",
    "50d": "#cfc5b3",
    "50n": "#cfc5b3",
  };

  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon={iconMapping[props.code]}
        color={iconColorMapping[props.code]}
        size={props.size}
        animate={true}
      />
    </div>
  );
}
