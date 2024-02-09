import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HackingAttempts = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem('failedLoginAttempts')) || [];
    setLoginAttempts(attempts);
  }, []);

  const data = {
    labels: loginAttempts.map(attempt => attempt.date),
    datasets: [
      {
        label: 'Failed Login Attempts',
        data: loginAttempts.map(attempt => attempt.count),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
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
    <div>
      <h2>Hacking Attempts</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HackingAttempts;
