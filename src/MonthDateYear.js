import React from "react";
import "./MonthDateYear.css";

export default function MonthDateYear() {
  // Format date:
  let dateToday = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[dateToday.getMonth()];
  let date = dateToday.getDate();
  let year = dateToday.getFullYear();

  return (
    <div className="Date">
      {month} {date}, {year}
    </div>
  );
}
