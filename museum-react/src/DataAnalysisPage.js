
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './DataAnalysisPage.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const categories = ['Museum', 'Artist', 'Painting', 'Sculpture']; 
const dummySearchData = { 
  'Location': {'Louvre Museum': 5, 'Van Gogh Museum': 3},
  'Artist': {'El Greco': 7, 'Leonardo da Vinci': 4}
};

const DataAnalysisPage = () => {
  const [selectedCategoryX, setSelectedCategoryX] = useState(categories[0]);
  const [selectedCategoryY, setSelectedCategoryY] = useState(categories[1]);

  const chartData = {
    labels: Object.keys(dummySearchData[selectedCategoryX] ?? {}),
    datasets: [
      {
        label: `Searches for ${selectedCategoryY}`,
        data: Object.keys(dummySearchData[selectedCategoryX] ?? {}).map(key => dummySearchData[selectedCategoryY]?.[key] || 0),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }
    ],
  };
  
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <div className="data-analysis-container">
      <h2>Data Analysis</h2>
      <div className="category-selection">
        <label htmlFor="category-x-select">X-Axis Category: </label>
        <select
          id="category-x-select"
          value={selectedCategoryX}
          onChange={(e) => setSelectedCategoryX(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <label htmlFor="category-y-select">Y-Axis Category: </label>
        <select
          id="category-y-select"
          value={selectedCategoryY}
          onChange={(e) => setSelectedCategoryY(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <Line data={chartData} options={options} />
    </div>
  );
};

export default DataAnalysisPage;
