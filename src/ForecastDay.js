import React from "react";
import "./styles/ForecastDay.css";

export default function ForecastDay(props) {
  let forecastDate = new Date(props.weekday * 1000);
  let forecastDay = forecastDate.getDay();
  let forecastDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return <div className="ForecastDay">{forecastDays[forecastDay]}</div>;
}
