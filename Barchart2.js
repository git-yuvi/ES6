//Bar chart uaing Javascript
<html>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0"></script>
<body>

<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

<script>
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display: false},
