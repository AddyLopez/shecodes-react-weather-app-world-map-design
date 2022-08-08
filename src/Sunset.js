import React from "react";

export default function Sunset(props) {
  let currentDate = new Date(props.code * 1000);
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
      <span className="Sunset">
        {hour}:{minutes} {anteMeridiem}
      </span>
    );
  } else {
    let postMeridiem = "p.m.";
    if (hour === 12) {
      return (
        <span className="Sunset">
          {hour}:{minutes} {postMeridiem}
        </span>
      );
    } else {
      if (hour > 12 && hour < 25) {
        let afternoon = hour - 12;
        return (
          <span className="Sunset">
            {afternoon}:{minutes} {postMeridiem}
          </span>
        );
      }
    }
  }
}
