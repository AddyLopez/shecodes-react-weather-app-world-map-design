import React from "react";

export default function Sunset(props) {
  /* To format the sunset timestamp as a 12-hour clock, this component
  1) takes the UTC timestamp from the API,
  2) uses the function new Date to store the date.
    a) Unfortunately the minute and hour values are relative to the device's local timezone, not to the local timezone of the city searched for, which introduces a pesky UI/UX.
  3) Therefore, once the date is retrieved, its hours and minutes get converted back to UTC hours and minutes.
  4) To convert the hour to the local timezone of the city searched for, the UTC timezone offset in hours (a value between -12 and 12 inclusive) is added to the UTC hour.
  5) The conditional statements take care of the conversion from a 24-hour clock with a UTC offset of plus or minus 12 hours to a bug-free 12-hour clock.
    a) One block of conditional statements in particular accounts for funky time zones with non-integer UTC offsets. */

  let sunsetDate = new Date(props.sunset * 1000);

  let timezoneOffsetInHours = props.timezoneOffset / 3600;
  let utcHour = sunsetDate.getUTCHours();
  let sunsetHour = utcHour + timezoneOffsetInHours;
  let sunsetMinutes = sunsetDate.getUTCMinutes();
  let postMeridiem = "p.m.";

  // This code accounts for funky timezones with half-hour values (for example, a search for Kabul, which has a UTC offset of 4.5 hours).
  if (
    Number.isInteger(sunsetHour) === false &&
    sunsetMinutes >= 0 &&
    sunsetMinutes < 30
  ) {
    // Accounts for the half-hour by adding 30 minutes to the display without incrementing the hour, instead rounding the hour down. Example: a nonsensical display value of 4.5:10 a.m. would become 4:40 a.m.
    sunsetMinutes = sunsetMinutes + 30;
    sunsetHour = Math.floor(sunsetHour);
  } else if (
    Number.isInteger(sunsetHour) === false &&
    sunsetMinutes >= 30 &&
    sunsetMinutes < 60
  ) {
    // Accounts for the half-hour by subtracting 30 minutes from the display, rounding the hour down, then incrementing the hour. Example: a display value of 4:70 a.m. would be nonsensical; instead, 4.5:40 a.m. is reformatted to 5:10 a.m.
    sunsetMinutes = sunsetMinutes - 30;
    sunsetHour = Math.floor(sunsetHour) + 1;
  }

  // Formats the minutes to a 12-hour clock:
  if (sunsetMinutes < 10) {
    sunsetMinutes = "0" + sunsetMinutes;
  }

  // The range (-12 to 36 inclusive) represents a 24-hour clock with an offset of plus or minus 12 hours.
  if (sunsetHour <= 36 && sunsetHour > 24) {
    sunsetHour = sunsetHour - 24;
  } else if (sunsetHour <= 24 && sunsetHour > 12) {
    sunsetHour = sunsetHour - 12;
  } else if (sunsetHour <= 12 && sunsetHour > 0) {
  } else if (sunsetHour <= 0 && sunsetHour >= -12) {
    sunsetHour = sunsetHour + 12;
  }

  return (
    <span className="Sunset">
      {sunsetHour}:{sunsetMinutes} {postMeridiem}
    </span>
  );
}
