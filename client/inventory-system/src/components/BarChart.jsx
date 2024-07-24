import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  return (
    <div className="bg-white border border-secondary">
      {chartData ? <Bar data={chartData} /> : <div>No data available</div>}
    </div>
  );
}

export default BarChart;
