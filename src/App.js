import React from "react";
import Weather from "./Weather";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Albuquerque" />
        <footer>
          <a
            href="https://github.com/AddyLopez/shecodes-react-weather-app-google-dashboard-design"
            title="To this project's GitHub repository"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
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
        </footer>
      </div>
    </div>
  );
}
