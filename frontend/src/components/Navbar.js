// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo + Text */}
      <div className="navbar-logo">
        <img src="/logo.png" alt="Smart Route Finder Logo" />
        <span className="logo-text">Smart Route Finder</span>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/route" className="nav-link">Route Finder</Link>
        <Link to="/hazards" className="nav-link">Hazards</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
