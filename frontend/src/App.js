// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Navbar and Footer
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import RouteFinder from "./pages/RouteFinder";
import Hazards from "./pages/Hazards";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        {/* Navbar at the top */}
        <Navbar />

        {/* Main Content (fills space between navbar & footer) */}
        <div style={{ flex: "1", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/route" element={<RouteFinder />} />
            <Route path="/hazards" element={<Hazards />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
