import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Chart.js Sales Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Sales",
      data: [
        3900, 3700, 2850, 4005, 3750, 2950, 3200, 3620, 4200, 3210, 3380, 3900,
        4400,
      ],
      borderColor: "rgb(192, 192, 192)",
      backgroundColor: "rgba(202, 200, 200, 0.295)",
      tension: 0.3,
    },
  ],
};

export const MyArea = () => {
  return <Line options={options} data={data} />;
};
