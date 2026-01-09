<script>

Day 2: JavaScript

(1.) Functions Inside Objects (Object Methods)

Functions can live inside objects.

let person = {
name: "Ram",
greet: function () {
console.log("Hello");
}
};

person.greet();

Real life:

A person (object) can perform actions (functions)




(2). this KEYWORD

this means current object.

let student = {
name: "Sita",
showName: function () {
console.log(this.name);
}
};

student.showName(); // Sita

Rule:

this points to who is calling the function




(3) ARROW FUNCTION

Short way to write functions.

const add = (a, b) => a + b;

⚠ Important:
(A) Arrow functions do NOT have their own this.

let obj = {
name: "Car",
show: () => console.log(this.name)
};

obj.show(); // undefined


// CORRECT USAGE
const obj = {
  name: "Car",
  show () {
    const newFunction = () => {
      console.log(this.name)
    }
    newFunction()
  }
};

obj.show(); // Car



(B) no arguments objects in arrow functions
// Normal function
function normalFunction() {
    console.log(arguments)
}
normalFunction(1, 2, 3) // Output: [1, 2, 3]


// Arrow function
const arrowFunction = () => {
    console.log(arguments)
}
arrowFunction(1, 2, 3) // Output: Uncaught ReferenceError: arguments is not defined



(C) no hoisting in arrow functions
// Normal function
normalFunc()
function normalFunc() {
    console.log("This is a normal function")
}
// output: This is a normal function


// Arrow function
arrowFunc()
const arrowFunc = () => {
    console.log("This is an arrow function")
}
// output: Uncaught ReferenceError: Cannot access 'arrowFunc' before initialization



(D) implicit return in arrow functions
// Normal function
function add(a, b) {
    return a + b
}
console.log(add(2, 3)) // Output: 5 


// Arrow function
const addArrow = (a, b) => a + b
console.log(addArrow(2, 3)) // Output: 5



(4). TEMPLATE LITERAL String (Backticks)

Used to combine text + variables easily.

let name = "Ram";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old`);

Why better?

No +

Clean and readable




(5). Hoisting

JavaScript moves declarations to the top.

sayHi();

function sayHi() {
console.log("Hi");
}

Works ✔

But this fails ❌:

hello();

const hello = () => console.log("Hello");

Rule:

Function declarations → hoisted

Arrow functions → NOT hoisted




(6). Spread Operator (...) – Array

Expands values

let a = [1, 2];
let b = [3, 4];

let result = [...a, ...b];
console.log(result); // [1,2,3,4]

Think:

Opening a bag and spreading items




(7). Spread Operator in Object
   let user = { name: "Ram", age: 20 };

let updatedUser = { ...user, location: "Asia" };
console.log(updatedUser);
// output: {name: "Ram", age: 20, location: "Asia"}

Used a lot in React.




(8). Rest Operator (...)

Collects values into an array

function sum(...numbers) {
console.log(numbers);
}

sum(1, 2, 3, 4);

Output:

[1, 2, 3, 4]

Rule:

Rest must be last parameter


// rest operator in objects
const { objName, ...rest } = obj2
console.log(rest)
// Output: { price: 150, quantity: 20, brand: "Apsara" }


//rest operator in arrays
const numbers = [10, 20, 30, 40];

const [first, ...rests] = numbers
console.log(first) // Output: 10
console.log(others) // Output: [2, 3, 4, 5, 6]



(9). Date Object

Used for date and time.

// DATE AND TIME IN JS
new Date()
console.log(new Date())
// output: current date and time

let today = new Date();
console.log(today.getFullYear());
// output: current year
console.log(today.getMonth() + 1);
// output: current month (0-11, so we add 1)

Real life:

Calendar & clock




(10). Array Methods (Basics)

Arrays have built-in functions.

forEach, map, filter, find, findIndex
reduce, includes, sort, reverse
concat, slice, splice, push, pop, shift, unshift


let numbers = [1, 2, 3, 4];

numbers.push(5)
// output: [1, 2, 3, 4, 5]

numbers.pop()
// output: [1, 2, 3, 4]

numbers.shift()
// removes first element from array
// output: [2, 3, 4]

numbers.unshift(9)
// adds element to the beginning of the array
// output: [9, 2, 3, 4]



(11). map() – Change Each Item - immutable function = does not change original array, just modifies it to new array
    let nums = [1, 2, 3];

let doubled = nums.map(n => n \* 2);
console.log(doubled);
// output: [2, 4, 6]

Meaning:

Do something to every element




(12). filter() – Select Some Items 
- Searching, filtering lists, removing falsy values
let ages = [12, 18, 25, 15];

let adults = ages.filter(age => age >= 18);
console.log(adults);
// output: [18, 25]

Meaning:

Keep only matching values




(13). Negation Operator (!) in 

The negation operator ! means NOT.
It reverses a boolean value.

true → false
false → true

Real-Life Example
let isRaining = false;

if (!isRaining) {
  console.log("Go outside");
}

Meaning:

If it is NOT raining, go outside

Negation with Conditions
let age = 15;

if (!(age >= 18)) {
  console.log("Not allowed");
}




(14). find() – Find One Item
    let numbers = [5, 10, 15];

let result = numbers.find(n => n > 8);
console.log(result); // 10

Returns:
First match

undefined if not found




(15). push() and pop() = mutable functions = changes original array
push() → add at end
let fruits = ["Apple", "Mango"];
fruits.push("Banana");

console.log(fruits);
// output: ["Apple", "Mango", "Banana"]

pop() → remove from end
fruits.pop();
console.log(fruits);
// output: ["Apple", "Mango"]

Think:

Stack of plates




***🔑 Day 2 Quick Summary (Exam Ready)
***
Objects can have functions

this refers to current object

Arrow functions are short but no own this

Template literals use backticks

Hoisting works for normal functions

Spread expands, rest collects

Date handles time

map transforms, filter selects

find returns one item

push adds, pop removes
</script>
