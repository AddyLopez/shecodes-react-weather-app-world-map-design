import React from "react";
import "./styles/ConversionButtons.css";

export default function ConversionButtons() {
  function showFahrenheit() {
    alert("Return later for this feature!");
  }

  function showCelsius() {
    alert("Return later for this feature!");
  }

  return (
    <div className="ConversionButtons">
      <button
        type="button"
        className="btn btn-success"
        onClick={showFahrenheit}
      >
        °F
      </button>
      <button
        type="button"
        className="btn btn-success ms-2"
        onClick={showCelsius}
      >
        °C
      </button>
    </div>
  );
}
