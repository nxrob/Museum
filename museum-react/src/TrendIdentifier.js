import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrendIdentifierPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('location'); // Default to 'location'
  const searches = JSON.parse(localStorage.getItem('searches')) || { location: [], theme: [], artist: [], guideRating: [] };
  
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const getCategoryData = () => {
    const categorySearches = searches[selectedCategory] || [];
    const searchCounts = categorySearches.reduce((acc, term) => {
      acc[term] = (acc[term] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(searchCounts);
    const data = Object.values(searchCounts);

    return {
      labels,
      datasets: [{
        label: `Number of Searches for ${selectedCategory}`,
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
      }]
    };
  };

  return (
    <div>
      <h2>Search Trends</h2>
      <select onChange={handleCategoryChange} value={selectedCategory} style={{ marginBottom: '20px' }}>
        <option value="location">Location</option>
        <option value="theme">Theme</option>
        <option value="artist">Artist</option>
        <option value="guideRating">Guide Rating</option>
      </select>
      <Bar data={getCategoryData()} />
    </div>
  );
};

export default TrendIdentifierPage;
