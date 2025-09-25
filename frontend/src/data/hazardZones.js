// src/data/hazardZones.js

const hazardZones = [
  {
    id: 1,
    name: "2022 Sindh Flood-Affected Area",
    type: "Flood",
    coordinates: [
      [25.0, 68.0],
      [25.2, 68.3],
      [25.4, 68.2],
      [25.3, 67.9],
      [25.1, 67.8],
    ],
    severity: "High",
  },
  {
    id: 2,
    name: "Monsoon Flood Susceptible KP",
    type: "Flood",
    coordinates: [
      [34.0, 72.5],
      [34.2, 72.8],
      [34.4, 72.7],
      [34.3, 72.4],
    ],
    severity: "Medium",
  },
  {
    id: 3,
    name: "Northern Pakistan Seismic Zone",
    type: "Earthquake",
    coordinates: [
      [36.5, 74.5],
      [36.7, 75.0],
      [37.0, 74.8],
      [36.8, 74.3],
    ],
    severity: "High",
  },
  {
    id: 4,
    name: "Makran Fault Region",
    type: "Earthquake",
    coordinates: [
      [24.5, 63.5],
      [24.7, 64.0],
      [25.0, 63.8],
      [24.8, 63.2],
    ],
    severity: "High",
  },
  {
    id: 5,
    name: "Chitral Landslide-Prone Zone",
    type: "Landslide",
    coordinates: [
      [36.0, 71.5],
      [36.2, 71.7],
      [36.3, 71.4],
      [36.1, 71.3],
    ],
    severity: "Medium",
  },
  {
    id: 6,
    name: "Balochistan Drought Region",
    type: "Drought",
    coordinates: [
      [28.5, 66.5],
      [28.7, 67.0],
      [29.0, 66.8],
      [28.8, 66.2],
    ],
    severity: "High",
  },
  {
    id: 7,
    name: "Karachi Coastal Flood Risk",
    type: "Flood",
    coordinates: [
      [24.8, 67.0],
      [24.9, 67.3],
      [25.0, 67.1],
      [24.85, 66.9],
    ],
    severity: "Medium",
  },
  {
    id: 8,
    name: "Hunza Glacier Lake Outburst Zone",
    type: "Glacial Flood",
    coordinates: [
      [36.3, 74.6],
      [36.5, 74.9],
      [36.7, 74.7],
      [36.4, 74.4],
    ],
    severity: "High",
  },
  // New additions:
  {
    id: 9,
    name: "KP 2025 Flash Floods (Buner, Swat, Bajaur etc.)",
    type: "Flood",
    coordinates: [
      [34.5, 72.5],
      [34.8, 72.8],
      [34.7, 73.0],
      [34.4, 72.9],
    ],
    severity: "High",
  },
  {
    id: 10,
    name: "Punjab Flood 2025 (Ravi-Chenab Floodplain)",
    type: "Flood",
    coordinates: [
      [30.5, 73.5],
      [31.0, 73.8],
      [31.2, 73.4],
      [30.8, 73.2],
    ],
    severity: "High",
  },
  {
    id: 11,
    name: "Lai Nullah / Islamabad-Rawalpindi Flood Basin",
    type: "Flood",
    coordinates: [
      [33.6, 73.0],
      [33.7, 73.1],
      [33.8, 73.0],
      [33.7, 72.9],
    ],
    severity: "Medium",
  }
];

export default hazardZones;
