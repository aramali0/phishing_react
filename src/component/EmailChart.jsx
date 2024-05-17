import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const EmailChart = () => {
    // Données statiques pour le bar chart
    const [barChartData, setBarChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Phishing Emails',
                backgroundColor: 'red',
                data: [5, 9, 7, 10, 2, 6],
            },
            {
                label: 'Non-Phishing Emails',
                backgroundColor: 'green',
                data: [15, 10, 12, 8, 14, 11],
            },
        ],
    });

    // Données statiques pour le pie chart
    const [pieChartData, setPieChartData] = useState({
        labels: ['Phishing Emails', 'Non-Phishing Emails'],
        datasets: [
            {
                label: 'Email Distribution',
                data: [30, 70], // 30% phishing, 70% non-phishing
                backgroundColor: ['red', 'green'],
                hoverOffset: 4
            }
        ]
    });

    return (
        <div className="w-full transition-all ml-80 bg-white min-h-screen left-72 flex justify-start items-center h-[400px] mt-9" >
            <div style={{ width: '30%', height: '100%', marginRight:'140px' }}>
                <h2>Email Phishing Statistics by Month</h2>
                <div style={{ height: '400px' }}>
                    <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
            <div style={{ width: '30%', height: '100%' }}>
                <h2>Email Phishing vs Non-Phishing</h2>
                <div style={{ height: '400px' }}>
                    <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default EmailChart;
