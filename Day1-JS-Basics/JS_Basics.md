<script>
JavaScript Basics 

1. Variables (Storing Information)

Meaning:
Variables store values (like a box holding something).

let name = "Ram";
let age = 20;

Think like:

name box contains "Ram"

age box contains 20



2. Data Types (Type of Data)

JavaScript has different kinds of data.

let name = "Sita"; // String (text)
let age = 18; // Number
let isStudent = true; // Boolean
let marks = null; // Empty value
let city; // Undefined

Type Example
String "Hello"
Number 10, 3.5
Boolean true, false
Null null
Undefined variable declared but no value 



3. OR (||) Operator

Meaning:
If first value is true, use it, otherwise use next.

let username = "";
let displayName = username || "Guest";

console.log(displayName); // Guest

Real life:

If you don’t enter your name → website shows “Guest”



4. AND (&&) Operator

Meaning:
Both conditions must be true.

let age = 20;

if (age > 18 && age < 60) {
console.log("Allowed");
}

Real life:

Age must be above 18 and below 60





5. Short Circuiting

JavaScript stops checking once result is known.

false && console.log("Won't run");
true || console.log("Won't run");

Why important?
Saves time and avoids errors.





6. Ternary Operator (Short if-else)
   let age = 17;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

Instead of:

if (age >= 18) {
result = "Adult";
} else {
result = "Minor";
}





7. Loops (Repeat Work)
   for loop
   for (let i = 1; i <= 5; i++) {
   console.log(i);
   }

Real life:

Attendance roll call from 1 to 5






8. Functions (Reusable Work)
   function greet(name) {
   console.log("Hello " + name);
   }

greet("Ram");
greet("Sita");

Think like a machine:

Input → Work → Output






9. Arrays (List of Items)
   let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple

Real life:

Shopping list






10. Objects (Details of One Thing)
    let student = {
    name: "Ram",
    age: 19,
    isPresent: true
    };

console.log(student.name);

Real life:

Student ID card





11. Destructuring Array (Taking Values Easily)
    let colors = ["Red", "Green", "Blue"];

let [first, second] = colors;

console.log(first); // Red
console.log(second); // Green






12. Destructuring Object
    let user = {
    name: "Sita",
    age: 20
    };

let { name, age } = user;

console.log(name);
console.log(age);

No need to write user.name again and again.





13. Nullish Coalescing (??)

Used when value is null or undefined only.

let marks = null;

let result = marks ?? "Not Available";
console.log(result);

Difference from ||:

|| checks false, 0, ""

?? checks only null or undefined





***🔑 Final One-Line Summary (Exam Ready)***

- Variables store data

- Data types define value type

- || OR → first true value

- && AND → both true

- Ternary → short if-else

- Loops repeat work

- Functions reuse code

- Arrays store lists

- Objects store details

- Destructuring simplifies access

- ?? handles null or undefined safely

</script>
