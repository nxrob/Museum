import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const categoriesData = {
  Museums: {
    labels: ['Spain', 'UK', 'USA', 'France', 'Russia', 'Netherlands', 'Italy'],
    data: [1, 2, 6, 2, 1, 1, 2],
    total: 15
  },
  Artists: {
    century: {
      labels: ['15th', '16th', '19th', '20th'],
      data: [1, 1, 4, 2],
      total: 8
    },
    country: {
      labels: ['Greece', 'Italy', 'Netherlands', 'Ireland', 'USA', 'Spain', 'France', 'Mexico'],
      data: [1, 1, 1, 1, 1, 1, 1, 1],
      total: 8
    }
  },
  Sculptors: {
    century: {
      labels: ['15th', '19th', '20th'],
      data: [1, 4, 3],
      total: 8
    },
    country: {
      labels: ['Lithuania', 'UK', 'USA', 'France', 'Romania', 'Italy'],
      data: [1, 2, 1, 2, 1, 1],
      total: 8
    }
  }
};

const DataAnalysisPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Museums');

  const getChartData = (data, isPieChart = true) => ({
    labels: data.labels.map(label => isPieChart ? label : `${label} century`),
    datasets: [{
      label: `${selectedCategory} Data`,
      data: data.data,
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCD56',
        '#4BC0C0',
        '#F77825',
        '#9966FF',
        '#00A86B'
      ],
      hoverOffset: 4
    }]
  });

  const pieOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            let value = context.parsed;
            if (value !== null) {
              label += `: ${value}%`;
            }
            return label;
          }
        }
      },
      title: {
        display: true,
        text: selectedCategory,
      },
    },
  };

  const barOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Year of birth of artists',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Century',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Artists',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="data-analysis-container">
      <h1>Data Analysis</h1>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        {Object.keys(categoriesData).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <div className="charts-container">
        {selectedCategory === 'Museums' && (
          <Pie data={getChartData(categoriesData.Museums)} options={pieOptions} />
        )}

        {selectedCategory === 'Artists' && (
          <>
            <Bar data={getChartData(categoriesData.Artists.century, false)} options={barOptions} />
            <Pie data={getChartData(categoriesData.Artists.country)} options={pieOptions} />
          </>
        )}

        {selectedCategory === 'Sculptors' && (
          <>
            <Bar data={getChartData(categoriesData.Sculptors.century, false)} options={barOptions} />
            <Pie data={getChartData(categoriesData.Sculptors.country)} options={pieOptions} />
          </>
        )}
      </div>
    </div>
  );
};

export default DataAnalysisPage;
