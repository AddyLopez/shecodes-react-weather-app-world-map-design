import React from "react";
import "./styles/ConversionButtons.css";

export default function ConversionButtons(props) {
  return (
    <div className="ConversionButtons">
      <button type="button" className="btn btn-success">
        °F
      </button>

      <button type="button" className="btn btn-success ms-2">
        °C
      </button>
    </div>
  );
}
