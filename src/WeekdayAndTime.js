import React from "react";
import "./WeekdayAndTime.css";

export default function WeekdayAndTime() {
  // Format weekday and time:
  let currentDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
    minutes = "0" + currentDate.getMinutes();
  }

  if (hour >= 0 && hour < 12) {
    let anteMeridiem = "a.m.";
    if (hour === 0) {
      hour = "12";
    }
    return (
      <div className="WeekdayAndTime">
        {day} {hour}:{minutes} {anteMeridiem}
      </div>
    );
  } else {
    let postMeridiem = "p.m.";
    if (hour === 12) {
      return (
        <div className="WeekdayAndTime">
          {day} {hour}:{minutes} {postMeridiem}
        </div>
      );
    } else {
      if (hour > 12 && hour < 25) {
        let afternoon = hour - 12;
        return (
          <div className="WeekdayAndTime">
            {day} {afternoon}:{minutes} {postMeridiem}
          </div>
        );
      }
    }
  }
}
