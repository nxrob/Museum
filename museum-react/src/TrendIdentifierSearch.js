
import React, { useEffect, useState } from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import getGraphData from './TrendIdentifierData';

const SearchGraph = () => {
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        const data = getGraphData();
        if (data) {
            setGraphData(data);
        }
    }, []);

    return (
        <div>
            {graphData && <Bar data={graphData} />}
        </div>
    );
};

export default SearchGraph;
