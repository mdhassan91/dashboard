import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieChartData = {
  labels: ["2018", "2019", "2020", "2021"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4"],
      hoverBackgroundColor: ["#501800", "#4B5000", "#175000", "#003350"],
      data: [35, 15, 25, 25],
    },
  ],
};
const options = {
  title: {
    display: true,
    text: "Line Chart",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "top",
  },
};

function PieChart() {
  return (
    <div>
      <Doughnut data={pieChartData} options={options}/>
    </div>
  );
}

export default PieChart;
