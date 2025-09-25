// src/components/RouteMap.js
import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

function RouteMap({ start, end }) {
  const map = useMap();
  const routingControl = useRef(null);

  useEffect(() => {
    if (!start || !end) return;

    // 🔹 Remove old route safely
    if (routingControl.current) {
      try {
        map.removeControl(routingControl.current); // ✅ simplified fix
      } catch (err) {
        console.warn("No route to remove:", err);
      }
    }

    // 🔹 Create new routing control
    const control = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1]),
      ],
      lineOptions: { styles: [{ color: "blue", weight: 5 }] },
      addWaypoints: false,
      draggableWaypoints: false,
      showAlternatives: false,
      createMarker: () => null, // prevent auto markers
    })
      .on("routesfound", (e) => {
        const route = e.routes[0];
        const distanceKm = (route.summary.totalDistance / 1000).toFixed(2);
        const timeMin = (route.summary.totalTime / 60).toFixed(2);

        const infoBox = document.getElementById("route-info-box");
        if (infoBox) {
          infoBox.innerHTML = `
            ⏱ <b>${timeMin} min</b><br/>
            📏 <b>${distanceKm} km</b>
          `;
        }
      })
      .addTo(map);

    routingControl.current = control;

    // 🔹 Cleanup when component unmounts or route changes
    return () => {
      if (routingControl.current) {
        try {
          map.removeControl(routingControl.current); // ✅ simplified fix
        } catch (err) {
          console.warn("Error cleaning up route:", err);
        }
      }
    };
  }, [start, end, map]);

  return (
    <div
      id="route-info-box"
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        background: "#fff",
        padding: "10px 14px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        fontSize: "14px",
        minWidth: "120px",
      }}
    >
      Select start & end points...
    </div>
  );
}

export default RouteMap;
