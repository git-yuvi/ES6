//JSON.stringify()method converts a JavaScript value into JSON text
<html>
<body>
<h1>JavaScript JSON</h1>
<h2>The JSON.stringify() Method</h2>
<p>The JSON.stringify() method converts a JavaScript value into JSON text.</p>

<p id="demo"></p>

<script>
// JavaScript Object
const person = {name: "Yuvi", age: 23};

// Convert the object to JSON
const text = JSON.stringify(person);

document.getElementById("demo").textContent = text;
</script>

</body>
</html>
