//Linear Graph
<html>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0"></script>
<body>

<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

<script>
const xValues = [];
const yValues = [];
generateData("x * 2 + 7", 0, 10, 0.5);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues
    }]
  },    
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
