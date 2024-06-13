// src/MaintenancePage.js
import React from 'react';
import './MaintenancePage.css';

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1>We're Under Maintenance</h1>
        <p>Our website is currently undergoing scheduled maintenance.</p>
        <p>Thank you for your patience. We'll be back shortly.</p>
        <div className="loader"></div>
      </div>
    </div>
  );
}

export default MaintenancePage;
