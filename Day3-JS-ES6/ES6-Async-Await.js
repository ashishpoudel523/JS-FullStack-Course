// (1) Promises in JS
let promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("Operation was successful")
    } else {
        reject("Operation failed")
    }
})
promise.then(message => {
    console.log(message)
}).catch(error => {
    console.log(error)
})

// output: Operation was successful


// --------------------------------------------------
// (2)  FUNCTION-ENCAPSULATED PROMISE
const inventory = {
    apple: 45,
    banana: 21,
    orange: 12,
};
console.log(inventory);


const orderApples = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inventory.apple > 20) {
                resolve("Buy apples");
            } else {
                reject("No fruits.");
            }
        }, 3000);
    });
};

orderApples()
    .then((success) => {
        console.log(success);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(console.log("Compulsory output, resolve vayeni, reject vayeni"));

//output: "Buy apples"




/* ------------------------------------------------------
 (3)     Using Promises Only

Fetch user data.
Log user data
using Promises only:
*/

//ONLY PROMISE
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));


/*
Issues with Promises Only

Callback Hell: The .then() chaining can become nested and harder to read as more steps are added.

Error Handling: Errors in any step will be caught by the .catch() at the end, but it can be less clear where exactly the error occurred. 


-----------------------------------------------------
(4)    Using Async/Await
=  a way to handle asynchronous operations in a more synchronous manner 

same above example using async and await to make it cleaner:
*/

const runProcess = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const display = await response.json();
        console.log(display);
    } catch (error) {
        console.log(error);
    }
};
runProcess();


/*
Benefits of Using Async/Await

Readability: The code looks more synchronous and is easier to follow. Each await statement pauses execution until the Promise resolves, making the flow of logic clearer.

Error Handling: try...catch blocks can be used to handle errors, which is more intuitive and can catch errors from any step in the async function.

Maintains Structure: The code remains flat and avoids deep nesting, which is common with multiple .then() calls.

Summary

Promises Only: Can lead to deeply nested .then() calls and complex error handling when dealing with multiple asynchronous steps.

Async/Await: Provides a more readable and maintainable approach, especially for complex asynchronous operations with multiple steps and error handling.
*/
