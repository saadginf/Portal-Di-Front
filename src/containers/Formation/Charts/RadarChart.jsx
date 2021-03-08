import React from "react";
import { Radar } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["Réseau Télécom", "Informatique", "SSI", "Big Data"],
  datasets: [
    {
      label: "Officiers Ingénieurs",
      data: [2, 9, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    ticks: { beginAtZero: true },
  },
};

const RadarChart = () => (
  <>
    <div className="header">
      <h6 className="title">Radar Chart</h6>
    </div>
    <Radar data={data} options={options} />
  </>
);

export default RadarChart;
