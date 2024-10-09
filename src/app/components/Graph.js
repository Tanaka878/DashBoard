// src/app/components/Graph.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

const Graph = () => {
    const [graphData, setGraphData] = useState([]);
    const [error, setError] = useState(null);

    // Fetch graph data
    useEffect(() => {
        async function fetchGraphData() {
            try {
                const response = await fetch('/api/users'); 
                const data = await response.json();
                setGraphData(data);
            } catch (error) {
                setError('Failed to load graph data');
            }
        }

        fetchGraphData();
    }, []);

    // Prepare chart data
    const chartData = {
        labels: graphData.map(item => new Date(item.date).toLocaleDateString()), // Format the date
        datasets: [
            {
                label: 'Values Over Time',
                data: graphData.map(item => item.value),
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    
    if (error) {
        return <div>{error}</div>;
    }

    if (graphData.length === 0) {
        return <p>Loading graph data...</p>;
    }

    return (
        <div>
            <h2>Values Over Time</h2>
            <Line data={chartData} />
        </div>
    );
};

export default Graph;
