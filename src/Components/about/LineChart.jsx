import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const labels = ["HTML", "CSS", "Tailwind", "JS", "React", "Node", "SvelteKit", "PHP", 'Mongo', "SQL", "Linux", "Docker"  ];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My Web Dev Skills",
      backgroundColor: ["#c96902", "#0d5667","#285221", "#fdad00", "#1ec3d4", "#168d18", "#da4646", "#5c4b6e", "green", "#c96902", "#222", "#2a8bba"],
      borderColor: "rgb(255, 99, 132)",
      data: [90, 85, 90, 78, 85, 80, 87, 30, 60, 30, 35, 20, 100],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default LineChart;