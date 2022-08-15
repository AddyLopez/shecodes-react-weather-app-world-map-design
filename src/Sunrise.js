import React from "react";

export default function Sunrise(props) {
  /* To format the sunrise timestamp as a 12-hour clock, this component
  1) takes the UTC timestamp from the API,
  2) uses the function new Date to store the date.
    a) Unfortunately the minute and hour values are relative to the device's local timezone, not to the local timezone of the city searched for, which introduces a pesky UI/UX.
  3) Therefore, once the date is retrieved, its hours and minutes get converted back to UTC hours and minutes.
  4) To convert the hour to the local timezone of the city searched for, the UTC timezone offset in hours (a value between -12 and 12 inclusive) is added to the UTC hour.
  5) The conditional statements take care of the conversion from a 24-hour clock with a UTC offset of plus or minus 12 hours to a bug-free 12-hour clock.
    a) One block of conditional statements in particular accounts for funky time zones with non-integer UTC offsets. */
  let sunriseDate = new Date(props.sunrise * 1000);

  let timezoneOffsetInHours = props.timezoneOffset / 3600;
  let utcHour = sunriseDate.getUTCHours();
  let sunriseHour = utcHour + timezoneOffsetInHours;

  let sunriseMinutes = sunriseDate.getUTCMinutes();
  let anteMeridiem = "a.m.";

  // This code accounts for funky timezones with half-hour values (for example, a search for Kabul, which has a UTC offset of 4.5 hours).
  if (
    Number.isInteger(sunriseHour) === false &&
    sunriseMinutes >= 0 &&
    sunriseMinutes < 30
  ) {
    // Accounts for the half-hour by adding 30 minutes to the display without incrementing the hour, instead rounding the hour down. Example: a nonsensical display value of 4.5:10 a.m. would become 4:40 a.m.
    sunriseMinutes = sunriseMinutes + 30;
    sunriseHour = Math.floor(sunriseHour);
  } else if (
    Number.isInteger(sunriseHour) === false &&
    sunriseMinutes >= 30 &&
    sunriseMinutes < 60
  ) {
    // Accounts for the half-hour by subtracting 30 minutes from the display, rounding the hour down, then incrementing the hour. Example: a display value of 4:70 a.m. would be nonsensical; instead, 4.5:40 a.m. is reformatted to 5:10 a.m.
    sunriseMinutes = sunriseMinutes - 30;
    sunriseHour = Math.floor(sunriseHour) + 1;
  }

  // This code formats the time to a 12-hour clock:
  if (sunriseMinutes < 10) {
    sunriseMinutes = "0" + sunriseMinutes;
  }

  // The range represents a 24-hour clock with an offset of plus or minus 12 hours.
  if (sunriseHour <= 36 && sunriseHour > 24) {
    sunriseHour = sunriseHour - 24;
  } else if (sunriseHour <= 24 && sunriseHour > 12) {
    sunriseHour = sunriseHour - 12;
  } else if (sunriseHour <= 12 && sunriseHour > 0) {
  } else if (sunriseHour <= 0 && sunriseHour >= -12) {
    sunriseHour = sunriseHour + 12;
  }

  return (
    <span className="Sunrise">
      {sunriseHour}:{sunriseMinutes} {anteMeridiem}
    </span>
  );
}
