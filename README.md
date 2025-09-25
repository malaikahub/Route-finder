# 🌍 Smart Route & Hazard Finder

An interactive web application designed to help users plan **safe and efficient journeys** in Pakistan and nearby regions.  
Unlike traditional route planners, this system integrates **hazard awareness, real-time traffic simulation, and travel time prediction**, making it especially useful in **disaster-prone and high-traffic areas**.

---

## 🚀 Features

### 🗺️ Interactive Map (Leaflet.js)
- Explore a dynamic map of Pakistan and nearby regions.  
- Powered by **OpenStreetMap** tiles for smooth zooming and panning.  
- Custom marker icons for **Start** and **End** points.  

### 🚦 Route Finder
- Click on the map to select **Start Point** and **End Point**.  
- A straight polyline route is automatically drawn.  
- **Traffic congestion colors**:   
  - 🟠 Orange → Medium traffic  
  - 🔴 Red → Heavy traffic  
- **Reset button** to clear the map and select new points.  

### ⏱️ Travel Time Prediction
- Backend API (`/predict-time`) built with **Flask**.  
- Uses:  
  - **Haversine formula** → distance between coordinates.  
  - **Traffic factor (1.0 – 2.0)** → simulates congestion.  
- Predicted travel time displayed in:  
  - Popup on the map  
  - Floating info box  

### ⚠️ Hazard Zones
- Hazard data stored in `hazardZones.js` (JSON).  
- Different disaster-prone areas are visualized:  
  - 🌊 Flood zones (blue polygons)  
  - 🌍 Earthquake zones (red polygons)  
  - ⛰️ Landslide-prone areas (orange polygons)  
  - 🌡️ Drought regions (yellow polygons)  
  - ❄️ Glacier Lake Outburst Flood (cyan polygons)  
- Each hazard polygon shows:  
  - Hazard name  
  - Type  
  - Severity (High / Medium)  

### 📌 Popups & Interactive Info
- Start/End markers show:  
  - Coordinates  
  - Travel time (if end selected)  
  - Traffic congestion factor  
- Hazard polygons show:  
  - ⚠️ Hazard name  
  - Disaster type  
  - Severity  

### 📝 Route Details Section
- Step-by-step usage instructions:  
  - ✅ Select start & end points  
  - ✅ Route auto-generated  
  - ✅ Hazards highlighted by color  
  - ✅ Travel time adjusted for traffic  
  - ✅ Reset option for new routes  

### 🎨 UI/UX
- Gradient-styled headings.  
- Floating info box with rounded corners + shadows.  
- Color-coded hazard zones.  
- Full-screen responsive map layout.  

---

## 🛠️ Technologies Used
- **Frontend**: React.js, React Leaflet, JavaScript (ES6+), CSS3  
- **Mapping**: Leaflet.js, OpenStreetMap tiles  
- **Backend**: Flask (Python) API for travel time prediction  
- **Data**: Custom hazard dataset (`hazardZones.js`)  
- **Styling**: Custom CSS + gradient text  

---

## ✅ Advantages
- 🚦 Combines route planning with **disaster awareness**.  
- ⚠️ Helps users avoid **floods, earthquakes, landslides, droughts**.  
- ⏱️ Provides **estimated travel time** adjusted for traffic.  
- 🌍 Works across **all regions of Pakistan**.  
- 🎨 Clean, interactive, and **user-friendly UI**.  

---

## 🔮 Future Enhancements
- 🔗 Integration with **real-time traffic APIs** (Google Maps / HERE).  
- 🌐 Fetch hazard data from **live government/disaster portals**.  
- 📡 Add **GPS live tracking** for mobile users.  
- 🛰️ Satellite imagery overlays for hazard visualization.  
- 📊 Dashboard with **hazard statistics & historical data**.  

---

## 📦 Installation & Setup

### Prerequisites
- Node.js & npm  
- Python 3 & Flask  

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/smart-route-hazard-finder.git
   cd smart-route-hazard-finder

Install frontend dependencies:

    cd frontend
    npm install
    npm start


Run Flask backend:

    cd backend
    pip install -r requirements.txt
    python app.py


Open browser at:

    http://localhost:3000

<img width="1581" height="769" alt="image" src="https://github.com/user-attachments/assets/72fbd62b-a897-4361-bb31-7837f0b2e42c" />



