import React from "react";
import { Pie } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["BS", "BE", "BCM", "CS"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div className="header">
      <h6 className="title">Pie Chart</h6>
    </div>
    <Pie data={data} />
  </>
);

export default PieChart;
