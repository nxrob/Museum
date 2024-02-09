import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrendIdentifierPage = () => {
  const searches = JSON.parse(localStorage.getItem('searches')) || { location: [], theme: [], artist: [], guideRating: [] };
  const chartData = {
    labels: Object.keys(searches),
    datasets: [{
      label: 'Number of Searches',
      data: Object.values(searches).map(item => item.length),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1,
    }],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h2>Search Trends</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TrendIdentifierPage;
