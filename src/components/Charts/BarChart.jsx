import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import {barChartData} from "../../data/dummy"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  title: {
    display: true,
    text: "Bar Expense and Budget Data Chart",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "top",
  },
};

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "expense",
      data: [100, 50, 200, 150, 150, 150],
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    },
    {
      label: "budget",
      data: [50, 100, 300, 150, 100, 100],
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    },
  ],
};
function BarChart() {
  return (
    
      <Bar options={options} data={barChartData} />
  
  )
}

export default BarChart;
