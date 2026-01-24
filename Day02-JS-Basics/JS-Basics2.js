let value = 4

let result
console.log(result)

let value2 = null
console.log(value2)

let value3 = undefined
console.log(value3)

let result2 = (4 < 1) ? console.log("true") : console.log("false")


function hello() {
    console.log("hello Student")
}
hello()


function f(x) {
    return x + 3
}
console.log(f(5))



// ARRAYS 
const myData = ["learn", "read", "code", "sleep", "eat"]

// Normal use case :
// const fi = myData[0]
// const t = myData[2]
// const fif = myData[4]

// ARRAY DESTRUCTURING = a syntax that allows you to unpack values from an array into distinct variables
const [fi, , t, , fif] = myData
console.log(fi)
console.log(t)
console.log(fif)




// OBJECT DESTRUCTURING = a syntax that allows you to extract properties from an object and assign them to variables
const user = {
    name: "John",
    age: 30,
    city: "New York"
}

// Normal use case :    
// const name = user.name 
// const age = user.age

const { name, age } = user
console.log(name)
console.log(age)




// SPREAD OPERATOR = used to expand elements of an iterable (like an array or object) into individual elements
const newArray = [...myData, "exercise"]
console.log(newArray)



function vowels(str) {
    let count = 0
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    console.log(count)
}
vowels('ashish')





const countVow = (str) => {
    let count = 0
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++
        }
    }
    console.log(count)
}



const user2 = {
    name: "ram",
    age: 12,
    getLocation: function () {
        console.log("location is USA")
        console.log(`logging this=> ${this.age}`)
    }
}

user2.getLocation()






const obj = {
    name: 'Aemond',
    egMethod() {
        setTimeout(() => {
            console.log(this.name)
        }), 1000
    }
}

obj.egMethod()





const license = (20 > 18) ? console.log("Pass") : console.log("Fail")

if (20 > 18) {
    console.log("good")
} else {
    console.log("bad")
}


const user3 = {
    name: "rohit",
    age: 25,
    getLocation: function () {
        console.log("location USA")
        console.log(this.name)
    },
    getUrl: function () {
        return this.name + ".com"
    }
}


user3.getLocation()
console.log(user3.getUrl())


// ARROW FUNCTIONS = a shorter syntax for writing function expressions


// (1) no arguments objects in arrow functions
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



// (2) no binding of this keyword in arrow functions 
const user4 = {
    name: "rohit",
    age: 25,
    getLocation() {
        console.log("location USA")
        const fnc = () => {
            console.log(this.name)
        }
        fnc()
    }
}

user4.getLocation()



// (3) no hoisting of arrow functions
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



// (4) implicit return in arrow functions
// Normal function
function add(a, b) {
    return a + b
}
console.log(add(2, 3)) // Output: 5 



// Arrow function
const addArrow = (a, b) => a + b
console.log(addArrow(2, 3)) // Output: 5





//spread operator in arrays used to expand elements of an iterable (like an array) into individual elements
const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5, 6]
console.log(arr2) // Output: [1, 2, 3, 4, 5, 6]


// spread operator in objects used to copy properties from one object to another
const obj1 = {
    objName: "Pens",
    price: 150,
    quantity: 20
}

const obj2 = { ...obj1, brand: "Apsara" }
console.log(obj2)
// Output: { objName: "Pens", price: 150, quantity: 20, brand: "Apsara" }




// rest operator in objects
const { objName, ...rest } = obj2
console.log(rest)
// Output: { price: 150, quantity: 20, brand: "Apsara" }


//rest operator in arrays
const numbers = [10, 20, 30, 40];

const [first, ...rests] = numbers
console.log(first) // Output: 10
console.log(others) // Output: [2, 3, 4, 5, 6]



// DATE AND TIME IN JS
new Date()
console.log(new Date())
// output: current date and time


let today = new Date();
console.log(today.getFullYear());
// output: current year
console.log(today.getMonth() + 1);
// output: current month (0-11, so we add 1)


// ARRAY METHODS
const even = [2, 4, 6, 8, 10]

for (let i = 0; i < 5; i++) {
    console.log(even[i])
    // output: 2 4 6 8 10
}


// map = creates a new array by applying a function to each element of the original array
let nums = [2, 3, 15, 56]

let sq = nums.map(num => num * num)
console.log(sq)
// output: [4, 9, 225, 3136]


// filter = creates a new array with all elements that pass the test implemented by the provided function
let fil = nums.filter(num => num > 10)
console.log(fil)
// output: [15, 56] 


// reduce = executes a reducer function (that you provide) on each element of the array, resulting in a single output value
let sum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum)
// output: 76



