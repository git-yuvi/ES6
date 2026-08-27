//Js Iterators
<html>
<body>
<h1>JavaScript Iterators</h1>

<p id="demo"></p>

<script>

// Create a proper iterator using Iterator.from()
const newIterator = Iterator.from([1, 2, 3]);

// List all Elements
let text = ""
for (const x of newIterator) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
