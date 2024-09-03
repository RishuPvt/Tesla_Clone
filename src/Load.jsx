import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./Routes/Model3.Routes"; // Assuming Layout is another component for /page1
import ModelY from "./Routes/ModelY.Route";
import ModelX from "./Routes/ModelX,Route";
import ModelS from "./Routes/ModelS,Route";
import CyberRoute from "./Routes/CyberTruck.Route";
import SolarRoof from "./Routes/SolarRoof.Route";
const Load = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Model3" element={<Layout />} />
      <Route path="/ModelY" element={<ModelY />} />
      <Route path="/ModelX" element={<ModelX />} />
      <Route path="/ModelS" element={<ModelS />} />
      <Route path="/CyberTruck" element={<CyberRoute />} />
      <Route path="/Solarroof" element={<SolarRoof />} />
      

    </Routes>
  </Router>
);

export default Load;
