//Multi Line Graph
<html>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.5.0"></script>
<body>
<canvas id="myChart" style="width:100%;max-width:600px"></canvas>

<script>
const xValues = [100,200,300,400,500,600,700,800,900,1000];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      pointRadius: 2,
      tension: 0.4,
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      pointRadius: 2,
      tension: 0.4,
    }, { 
