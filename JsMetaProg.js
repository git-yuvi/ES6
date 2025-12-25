// Meta programming
<!DOCTYPE html>
<html>
<body>
<h1>Metaprogramming</h1>
<h2>Change Property Behavior</h2>

<p id="demo"></p>

<script>
// Create an Object
const person = {name: "John", age: 41};

// Define Property to return "secret"
Object.defineProperty(person, "name", {
  get() {return "secret";}
});

let name = person.name;
document.getElementById("demo").innerHTML = "Name is " + name; 
</script>

</body>
</html>


