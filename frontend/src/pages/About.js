import React from "react";
import "./About.css";
import {
  FaRoute,
  FaExclamationTriangle,
  FaTrafficLight,
  FaClock,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <div>
      {/* ================== ABOUT SECTION ================== */}
      <section className="about-section">
      <div className="about-container">
        {/* Title */}
        <h2 className="about-title">About Smart Route Finder</h2>
        <p className="about-intro">
          <b>Smart Route Finder</b> is a modern web application that helps
          travelers find the <span className="safe-text">safest</span> and{" "}
          <span className="fast-text">fastest</span> routes. By combining{" "}
          <b>Machine Learning</b>, <b>GIS</b>, and <b>real-time data</b>, it
          provides smarter navigation with hazard awareness and travel
          efficiency.
        </p>

        {/* Features Section */}
        <h3 className="sub-heading">Key Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <FaRoute className="feature-icon" />
            <h4>Route Optimization</h4>
            <p>Finds the fastest and safest routes using live conditions.</p>
          </div>

          <div className="feature-card">
            <FaExclamationTriangle className="feature-icon hazard-icon" />
            <h4>Hazard Zone Overlays</h4>
            <p>Highlights floods, earthquakes, and blocked roads by risk level.</p>
          </div>

          <div className="feature-card">
            <FaTrafficLight className="feature-icon traffic-icon" />
            <h4>Traffic Awareness</h4>
            <p>Integrates real-time traffic to avoid congestion and delays.</p>
          </div>

          <div className="feature-card">
            <FaClock className="feature-icon time-icon" />
            <h4>Travel Time Prediction</h4>
            <p>Estimates arrival time with accuracy based on hazards & traffic.</p>
          </div>

          <div className="feature-card">
            <FaMapMarkedAlt className="feature-icon map-icon" />
            <h4>Interactive Map</h4>
            <p>Powered by React + Leaflet for smooth and engaging navigation.</p>
          </div>

          {/* New Feature 1 */}
          <div className="feature-card">
            <FaShieldAlt className="feature-icon security-icon" />
            <h4>Safety First</h4>
            <p>Prioritizes user safety by avoiding high-risk hazard zones.</p>
          </div>

          {/* New Feature 2 */}
          <div className="feature-card">
            <FaDatabase className="feature-icon data-icon" />
            <h4>Real-Time Data</h4>
            <p>Continuously updates hazard and traffic data for accuracy.</p>
          </div>
        </div>

        {/* How to Use */}
        <h3 className="sub-heading">How to Use</h3>
        <div className="usage-steps">
          <div className="step-box">1️⃣ Enter your starting point & destination.</div>
          <div className="step-box">
            2️⃣ Choose between <b>fastest</b> or <b>safest</b> route.
          </div>
          <div className="step-box">
            3️⃣ View hazard zones: <span className="high-risk">Red = High Risk</span>,{" "}
            <span className="medium-risk">Orange = Medium Risk</span>.
          </div>
          <div className="step-box">
            4️⃣ Click a hazard zone for details on type & severity.
          </div>
          <div className="step-box">
            5️⃣ Follow the suggested route for safe & efficient travel.
          </div>
        </div>
      </div>
    </section>

      {/* ================== TESTIMONIAL SECTION ================== */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <h3 className="testimonial-title">SuperValu</h3>
          <h4 className="testimonial-highlight">
            Improved Our Operational Efficiency
          </h4>
          <p className="testimonial-text">
            The SmartRoutes platform has provided us with an additional touchpoint 
            for our customers through real-time tracking information. We've received 
            very positive feedback from customers who appreciate being able to track 
            their orders, as well as from stores that have benefited from smoother 
            fulfillment processes.
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

export default About;
