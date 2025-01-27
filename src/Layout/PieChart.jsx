import { Pie } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
    const [stats, setStats] = useState({ returnable: 0, nonReturnable: 0 });

    useEffect(() => {
      const fetchStats = async () => {
        try {
          const response = await fetch('http://localhost:3000/pieChart');
          const data = await response.json();
          setStats(data);
        } catch (error) {
          console.error('Error fetching stats:', error);
        }
      };
  
      fetchStats();
    }, []);
  
    // Pie chart data
    const data = {
      labels: ['Returnable Items', 'Non-Returnable Items'],
      datasets: [
        {
          data: [stats.returnable, stats.nonReturnable],
          backgroundColor: ['#4CAF50', '#F44336'], // Green for returnable, Red for non-returnable
          hoverOffset: 4,
        },
      ],
    };
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Item Returnability Stats
        </h2>
        <div className="flex justify-center">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
