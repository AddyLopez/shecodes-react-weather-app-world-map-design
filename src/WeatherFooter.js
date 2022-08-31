import React from "react";
import "./styles/WeatherFooter.css";

export default function WeatherFooter() {
  return (
    <div className="WeatherFooter">
      <footer>
        <p>
          <a
            href="https://github.com/AddyLopez/shecodes-react-weather-app-world-map-design"
            title="To Addy's GitHub repository for this project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          and{" "}
          <a
            href="https://gilded-gelato-34cd40.netlify.app/"
            title="Go to Addy's Leaflet Tutorial to start coding interactive maps!"
            target="_blank"
            rel="noreferrer"
          >
            world-map design
          </a>{" "}
          by{" "}
          <a
            href="https://ubiquitous-froyo-69b6d7.netlify.app/index.html"
            title="To Addy's personal website"
            target="_blank"
            rel="noreferrer"
          >
            Addy López
          </a>
        </p>
        <p>
          Data from{" "}
          <a
            href="https://openweathermap.org/accuracy-and-quality"
            title="To Accuracy and Quality of Weather Data | OpenWeatherMap"
            target="_blank"
            rel="noreferrer"
          >
            OpenWeatherMap
          </a>
        </p>
      </footer>
    </div>
  );
}
