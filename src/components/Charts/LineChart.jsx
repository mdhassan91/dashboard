import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const linChartData = {
  labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011"],
  datasets: [
    {
      label: "Germany",
      data: [21, 24, 36, 37, 54, 57, 70],
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    },
    {
      label: "England",
      data: [28, 44, 48, 50, 66, 78, 84],
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    },
    {
      label: "India",
      data: [10, 20, 30, 39, 50, 70, 100],
      borderColor: "#ffa500",

      backgroundColor: "#ffc04d",

      fill: false,
    },
  ],
};

function LineChart() {
  return <Line options={options} data={linChartData} />;
}

export default LineChart;
