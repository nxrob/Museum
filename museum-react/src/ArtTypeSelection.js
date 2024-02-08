import React from 'react';
import { Link } from 'react-router-dom';
import './ArtTypeSelection.css'; // Import your CSS file

function ArtTypeSelection() {
  return (
    <div className="ArtTypeSelection">
      <h1 className="PageHeader">Select Art Type</h1>
      <div className="nav-links">
        <Link to="/Admin/Art/Create/Painting" className="nav-link">Add Painting</Link>
        <Link to="/Admin/Art/Create/Sculpture" className="nav-link">Add Sculpture</Link>
      </div>
    </div>
  );
}

export default ArtTypeSelection;
