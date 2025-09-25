import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>
          More than Maps, the First{" "}
          <span className="highlight">Smart Route Finder Platform</span>
        </h1>
        <p>
          The only navigation solution built for the modern road — seamlessly
          integrating <strong>real-time traffic</strong>,{" "}
          <strong>AI-powered optimization</strong>, and{" "}
          <strong>hazard detection</strong> to get you to your destination
          faster and safer.
        </p>

        <Link to="/route">
          <button className="cta-button">🚗 Start Finding Routes</button>
        </Link>

        <div className="welcome-mockups">
          <img
            src="/left-image.png"
            alt="Smart Route Finder Left"
            className="welcome-image bend-left"
          />

          <div className="welcome-logo">🚦</div>

          <img
            src="/right-image.png"
            alt="Smart Route Finder Right"
            className="welcome-image bend-right"
          />
        </div>
      </section>

      {/* Hero + Platform Section (Combined) */}
<section className="combined-section">

  {/* Main Heading */}
  <h1 className="combined-heading">
    Explore the <span className="highlight">Platform</span>
  </h1>

  {/* Hero Content */}
  <div className="platform-container">
    <div className="platform-text">
      <h2>
        <span className="highlight">Streamline</span> your entire delivery
        process
      </h2>
      <hr className="hero-divider" />
      <p>
        Route planning, capture PODs, automate notifications, track your
        fleet – all in one platform.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Try it for free</button>
        <Link to="/demo" className="btn-link">
          Book a demo
        </Link>
      </div>

      <div className="hero-features">
        <span>✔ No credit card required</span> &nbsp; | &nbsp;
        <span>✔ 7 day free trial</span> &nbsp; | &nbsp;
        <span>✔ Cancel anytime</span>
      </div>
    </div>
    <div className="platform-image-box">
      <img src="/hero.png" alt="Smart Routes Hero" />
    </div>
  </div>

  {/* Platform Content - Block 1 */}
  <div className="platform-container">
    <div className="platform-text">
      <h2>
        <span className="highlight">Plan your routes</span> easily and quickly
      </h2>
      <p>
        Plan your routes easily and dispatch to drivers’ phones. Get total
        visibility into ETA’s, time windows and expected cost of delivery
        operations. Save time, money and emissions.
      </p>
      <a href="#learn-more" className="learn-more">➤ Learn more</a>
    </div>
    <div className="platform-image-box">
      <img src="/route-map.png" alt="Route Planning" />
    </div>
  </div>

  {/* Platform Content - Block 2 */}
  <div className="platform-container reverse">
    <div className="platform-image-box">
      <img src="/piggy-bank.png" alt="Save Money" />
    </div>
    <div className="platform-text">
      <h2>
        <span className="highlight">Save money</span> with optimized routing algorithms
      </h2>
      <p>
        Let our algorithm optimize your route and set parameters for vehicles
        and drivers based on time windows, load balancing, and vehicle
        constraints. Automate the hard part of delivery operations completely
        to free up your time.
      </p>
      <a href="#learn-more" className="learn-more">➤ Learn more</a>
    </div>
  </div>

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

export default Home;
