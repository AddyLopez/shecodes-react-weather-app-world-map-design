import React from "react";
import WeatherApp from "./WeatherApp";
import { MapContainer, TileLayer, LayersControl } from "react-leaflet";

import "./styles/App.css";

const { BaseLayer } = LayersControl;

export default function App() {
  return (
    <div className="App">
      <MapContainer
        className="Map"
        center={[35.106766, -106.629181]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <LayersControl position="topright">
          <BaseLayer name="OpenStreetMap" checked>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="Stadia Stamen Toner">
            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.{ext}"
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              minNativeZoom={0}
              maxNativeZoom={20}
              ext="png"
            />
          </BaseLayer>
          <BaseLayer name="Esri National Geographic">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}.png"
              attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
              maxNativeZoom={16}
            />
          </BaseLayer>
          <BaseLayer name="Esri World Imagery">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            />
          </BaseLayer>
        </LayersControl>
        <WeatherApp />
      </MapContainer>
    </div>
  );
}
