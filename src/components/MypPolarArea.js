import React, { useRef } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  PolarArea,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Area Chart",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: "# of Votes",
      data: [10, 16, 7, 3, 14],
      backgroundColor: [
        "rgba(255, 99, 133, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 207, 86, 1)",
        "rgba(197, 197, 197, 1)",
        "rgba(102, 194, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const MypPolarArea = () => {
  const chartRef = useRef(null);
  const printDatasetAtEvent = (dataset) => {
    if (!dataset.length) return;

    const datasetIndex = dataset[0].datasetIndex;

    console.log(data.datasets[datasetIndex].label);
  };

  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const printElementsAtEvent = (elements) => {
    if (!elements.length) return;

    console.log(elements.length);
  };

  const onClick = (event) => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    printDatasetAtEvent(getDatasetAtEvent(chart, event));
    printElementAtEvent(getElementAtEvent(chart, event));
    printElementsAtEvent(getElementsAtEvent(chart, event));
  };
  return (
    <PolarArea ref={chartRef} options={options} onClick={onClick} data={data} />
  );
};
