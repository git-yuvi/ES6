//response.json() method parses the JSON text and returns a JavaScript value.
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript JSON</h1>
<h2>The response.json() Method</h2>
<p>The response.json() method parses the JSON text and returns a JavaScript value.</p>

<p id="demo"></p>

<script>
async function loadJSON() {
  const response = await fetch("customer.json");
  const customer = await response.json();
  myDisplayer(customer.name);
  myDisplayer(customer.city);
}

loadJSON();

// Function to display any text
function myDisplayer(text) {
  document.getElementById("demo").innerHTML += text + "<br>";
}
</script>

</body>
</html>
