// src/pages/RouteFinder.js
import React, { useState } from "react";
import Map from "../components/Map";
import "./RouteFinder.css";

function RouteFinder() {
  const [travelTime, setTravelTime] = useState(null);
  const [trafficFactor, setTrafficFactor] = useState(null);
  const [activeRouteIndex, setActiveRouteIndex] = useState(null);

  // ✅ Reset button reloads full page
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="route-finder-page">
      <h2 className="page-title" style={{ color: "#0f172a", fontWeight: "700" }}>
        🚗 Smart Route & Hazard Finder
      </h2>

      <div className="route-box">
        {/* Left info panel */}
        <div className="route-info">
          <h3>Route Details</h3>
          <p>✅ Select Start & End by clicking on the map.</p>
          <p>✅ Route with estimated travel time is drawn automatically.</p>
          <p>✅ Traffic info shown with colored lines (yellow, orange, red).</p>
          <p>✅ Flood, earthquake, landslide & drought zones are highlighted.</p>
          <p>✅ Hazard zones display type and severity in popups.</p>
          <p>✅ Route avoids unsafe hazard polygons when possible.</p>
          <p>✅ Travel time is adjusted for real-time traffic factor.</p>
          <p>✅ Reset button reloads full Route Finder page.</p>

          {travelTime && (
            <div className="info-box">
              <p>
                ⏱ Estimated Time: <b>{travelTime.toFixed(2)} min</b>
              </p>
              <p>
                🚗 Traffic Factor: <b>{trafficFactor.toFixed(2)}</b>
              </p>
            </div>
          )}
        </div>

        {/* Map section with floating reset button */}
        <div className="route-map">
          <Map
            setTravelTime={setTravelTime}
            setTrafficFactor={setTrafficFactor}
            activeRouteIndex={activeRouteIndex}
          />

          {/* ✅ Floating Reset Button */}
          <button className="reset-btn-map" onClick={handleReset}>
            🔄
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <h3 className="testimonial-title">SuperValu</h3>
          <h4 className="testimonial-highlight">
            It’s made life easier for everyone
          </h4>
          <p className="testimonial-text">
            Our entire logistics team is now using SmartRoutes functionality,
            and the support we’ve received from their team has been exceptional.
            It’s made life easier for everyone and the route optimization has
            made us more efficient across the board.
          </p>
          <p className="testimonial-author">
            <strong>Barry Rabbit</strong> – CEO DeliverIt
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

export default RouteFinder;
