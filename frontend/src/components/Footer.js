// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo + Newsletter */}
        <div className="footer-logo">
          <h2>🚗 SmartRoutes</h2>
          <p>Optimize your routes, save time, and grow your business!</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email..." required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div>
            <h3>PLATFORM</h3>
            <ul>
              <li><a href="/">Route Planning</a></li>
              <li><a href="/">Route Optimization</a></li>
              <li><a href="/">Proof of Delivery</a></li>
              <li><a href="/">Fleet Tracking</a></li>
              <li><a href="/">Driver App</a></li>
              <li><a href="/">Delivery Management</a></li>
              <li><a href="/">Order Management</a></li>
            </ul>
          </div>
          <div>
            <h3>INDUSTRIES</h3>
            <ul>
              <li><a href="/">Logistics</a></li>
              <li><a href="/">Retail & eCommerce</a></li>
              <li><a href="/">Furniture & Garden</a></li>
              <li><a href="/">Pharmacy & Medical</a></li>
              <li><a href="/">Grocery & Supermarkets</a></li>
              <li><a href="/">Couriers</a></li>
            </ul>
          </div>
          <div>
            <h3>RESOURCES</h3>
            <ul>
              <li><a href="/">Support Centre</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Case Studies</a></li>
              <li><a href="/">Integrations</a></li>
              <li><a href="/">Partnerships</a></li>
              <li><a href="/">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3>COMPANY</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>CONTACT</h3>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>📧 support@smartroutes.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 Smart Routes Ltd – All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Privacy Section Below Footer */}
      <div className="footer-privacy">
        <button className="privacy-button">Notice at collection</button>
        <button className="privacy-button">Your Privacy Choices ✔</button>
      </div>
    </footer>
  );
}

export default Footer;
