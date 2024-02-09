import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSearch } from './SearchContext'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const TrendIdentifierPage = () => {
    const { searchData } = useSearch(); 
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        
        const data = {
            labels: ['Museums', 'Art', 'Artists'],
            datasets: [{
                label: 'Number of Searches',
                data: [searchData.museums.length, searchData.art.length, searchData.artists.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        };

        setChartData(data);
    }, [searchData]); 

    return (
        <div>
            <h2>Trend Analysis</h2>
            <Bar data={chartData} />
        </div>
    );
};
