//Multiple Line Plot
<html>
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<body>
<div id="myPlot" style="width:100%;max-width:700px"></div>

<script>
let exp1 = "x";
let exp2 = "1.5*x";
let exp3 = "1.5*x + 7";

// Generate values
const x1Values = [];
const x2Values = [];
const x3Values = [];
const y1Values = [];
const y2Values = [];
const y3Values = [];

for (let x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
