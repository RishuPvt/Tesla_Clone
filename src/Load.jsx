import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './Routes/Model3.Routes'; // Assuming Layout is another component for /page1
import ModelY from './Routes/ModelY.Route';
import ModelX from './Routes/ModelX.Route';
const Load = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Model3" element={<Layout />} />
      <Route path="/ModelY" element={<ModelY />} />
      <Route path="/ModelX" element={<ModelX />} />

    </Routes>
  </Router>
);

export default Load;