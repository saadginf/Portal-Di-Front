import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";

const data = {
  labels: ["CIT", "BST", "2BT", "7Bt"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "# of Green Votes",
      data: [3, 10, 13, 15],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = () => (
  <>
    <div className="header">
      <h6 className="title">Grouped Bar Chart</h6>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default GroupedBar;
