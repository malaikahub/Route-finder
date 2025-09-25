import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import hazardZones from "../data/hazardZones";
import "leaflet/dist/leaflet.css";
import "./Hazards.css";

function Hazards() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {/* ===================== HEADER IMAGE ===================== */}
      <div className="hazards-header-image">
        <img
          src="/Hazard.webp" // <-- Make sure this image is inside public folder
          alt="Hazard Awareness"
          className="hazard-top-image"
        />
        
      </div>

      <h1>Here you will see hazard zones (floods, earthquakes, blocked roads).</h1>
      <p>🔴 Red zones → High Risk (Unsafe areas)</p>
      <p>🟠 Orange zones → Medium Risk (Caution advised)</p>

      {/* ===================== MAP ===================== */}
      <MapContainer center={[30.5, 72.5]} zoom={5} className="hazard-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {hazardZones.map((zone) => {
          let color = "green"; // default = Low Risk
          if (zone.severity === "High") color = "red";
          else if (zone.severity === "Medium") color = "orange";

          return (
            <Polygon
              key={zone.id}
              positions={zone.coordinates}
              pathOptions={{ color, weight: 3, fillOpacity: 0.4 }}
            >
              <Popup>
                <strong>{zone.name}</strong> <br />
                Type: {zone.type} <br />
                Severity: {zone.severity}
              </Popup>
            </Polygon>
          );
        })}
      </MapContainer>

      {/* ===================== TABLE ===================== */}
<section className="hazard-table-section">
  <h3>📋 Hazard Zones Data</h3>
  <table className="hazard-table animate-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>Severity</th>
      </tr>
    </thead>
    <tbody>
      {hazardZones.map((zone, index) => (
        <tr
          key={zone.id}
          className="table-row"
          style={{ animationDelay: `${index * 0.2}s` }} // delay each row
        >
          <td>{zone.id}</td>
          <td>{zone.name}</td>
          <td>{zone.type}</td>
          <td
            style={{
              color:
                zone.severity === "High"
                  ? "red"
                  : zone.severity === "Medium"
                  ? "orange"
                  : "green",
              fontWeight: "bold",
            }}
          >
            {zone.severity}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <h3 className="testimonial-title">SuperValu</h3>
          <h4 className="testimonial-highlight">
            IMPROVED OUR OPERATIONAL EFFICIENCY
          </h4>
          <p className="testimonial-text">
            The SmartRoutes platform has provided us with an additional touch
            point for our customers via the text message with tracking
            information. We've received really positive feedback on the system
            both from our customers around being able to track their orders as
            well as from stores on the positive impact it's had on our
            fulfilment processes.
          </p>
          <p className="testimonial-author">
            <strong>Caroline W.</strong> – SuperValu/Musgrave
          </p>
        </div>

        <div className="partner-logos">
          <img src="/ezliving.png" alt="EZ Living Interiors" />
          <img src="/homecare.png" alt="Homecare Medical" />
          <img src="/sofstyle.png" alt="Sofa Style" />
          <img src="/irishtimes.png" alt="The Irish Times" />
          <img src="/supervalu.png" alt="SuperValu" />
          <img src="/aramex.png" alt="Aramex" />
          <img src="/buseireann.png" alt="Bus Eireann" />
          <img src="/bullbag.png" alt="Bull Bag" />
          <img src="/empire.png" alt="Empire Office" />
          <img src="/sts.png" alt="STS Recycling" />
        </div>
      </section>
    </div>
  );
}

export default Hazards;
