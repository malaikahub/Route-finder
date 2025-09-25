// src/components/Map.js
import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import hazardZones from "../data/hazardZones";
import RouteMap from "./RouteMap";

// 🔹 Fix default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// 🔹 Handle map click events (choose start & end points)
function LocationSelector({ setStart, setEnd, step }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      if (step.current === 0) {
        setStart([lat, lng]); // first click → start
        step.current = 1;
      } else {
        setEnd([lat, lng]); // second click → end
        step.current = 0; // reset for next selection
      }
    },
  });
  return null;
}

function Map({ setTravelTime, setTrafficFactor, activeRouteIndex, resetTrigger }) {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const step = useRef(0); // 0 = waiting for start, 1 = waiting for end

  // 🔹 Reset start & end when resetTrigger changes
  React.useEffect(() => {
    if (resetTrigger > 0) {
      setStart(null);
      setEnd(null);
      step.current = 0;
    }
  }, [resetTrigger]);

  // 🔹 Dynamic hazard zone colors
  const getHazardColor = (type) => {
    const colors = {
      Flood: "blue",
      Earthquake: "red",
      Landslide: "brown",
      Drought: "orange",
      "Glacial Flood": "purple",
    };
    return colors[type] || "gray";
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <MapContainer
        center={[31.5497, 74.3436]} // Lahore as default center
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        {/* 🔹 Base Map Tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />

        {/* 🔹 Hazard Zones */}
        {hazardZones.map((zone) => (
          <Polygon
            key={zone.id}
            positions={zone.coordinates}
            pathOptions={{
              color: getHazardColor(zone.type),
              fillColor:
                zone.severity === "High"
                  ? "rgba(255,0,0,0.4)"
                  : zone.severity === "Medium"
                  ? "rgba(255,165,0,0.4)"
                  : "rgba(0,128,0,0.4)",
              fillOpacity: 0.4,
            }}
          >
            <Popup>
              ⚠️ <b>{zone.name}</b>
              <br /> Type: {zone.type}
              <br /> Severity: {zone.severity}
            </Popup>
          </Polygon>
        ))}

        {/* 🔹 Clicks to set Start & End */}
        <LocationSelector setStart={setStart} setEnd={setEnd} step={step} />

        {/* 🔹 Start Marker */}
        {start && (
          <Marker position={start}>
            <Popup>
              🚦 <b>Start Point</b>
              <br />
              📍 {start[0].toFixed(4)}, {start[1].toFixed(4)}
            </Popup>
          </Marker>
        )}

        {/* 🔹 End Marker */}
        {end && (
          <Marker position={end}>
            <Popup>
              🏁 <b>End Point</b>
              <br />
              📍 {end[0].toFixed(4)}, {end[1].toFixed(4)}
            </Popup>
          </Marker>
        )}

        {/* 🔹 Routing between Start & End */}
        {start && end && (
          <RouteMap
            start={start}
            end={end}
            setTravelTime={setTravelTime}
            setTrafficFactor={setTrafficFactor}
            activeRouteIndex={activeRouteIndex}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
