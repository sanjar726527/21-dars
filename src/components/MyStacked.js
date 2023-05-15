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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Most popular search engines",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Google",
      data: [900, 810, 860, 730],
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Bing",
      data: [180, 170, 180, 190],
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Yahoo",
      data: [190, 190, 200, 230],
      backgroundColor: "rgb(235, 208, 53)",
      stack: "Stack 1",
    },
    {
      label: "Ask",
      data: [160, 160, 120, 150],
      backgroundColor: "rgb(107, 204, 28)",
      stack: "Stack 1",
    },
  ],
};

export const MyStacked = () => {
  return <Bar options={options} data={data} />;
};
