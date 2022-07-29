import React from 'react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const simpleBarData = {
  labels: ['Jan', 'Feb', 'Mar',
           'Apr', 'May'],
  datasets: [
    {
      label: 'Earning Data',
      backgroundColor: '#FFFFFF',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [2,6,8,5,10]
    }
  ]
}

function SimpleBarChart() {
  return (
    <div>
      <Bar data={simpleBarData}/>
    </div>
  )
}

export default SimpleBarChart