**_2026/1/10_**

# ReactJS

front-end library maintained by Facebook.
It was released on May 29, 2013

React is a JavaScript library for building user interfaces.

React is used to build single-page applications.

React allows us to create reusable UI components.

Creating a React app using Vite is a great alternative to Create React App, offering a faster and more modern development experience. Vite is a build tool that focuses on speed and performance, making it an excellent choice for modern web development.

# Create new project (CRA)

npx create-react-app my-frontend-app
cd my-frontend-app
npm start

# Here’s a step-by-step guide to creating a React app using Vite:

Install Node.js: Ensure you have Node.js installed on your machine. You can download it from nodejs.org.

# Create a New Vite Project: Open your terminal and run:

npm create vite@latest my-app --template react
OR,

npm create vite@latest
project name:
Select React
Select Javascript / Typescript

While creating react project if you don't want to create new folder as a new project name, you can write

# Project name: ./

Replace my-app with your desired project name.

<!--
npm install

npm run dev
-->

**_jsx = javascript xml = allows developers to write HTML-like markup directly within JavaScript code, most notably in the React library_**

# Why Choose Vite?

Fast Development Server: Vite provides a lightning-fast development server.
Instant Hot Module Replacement (HMR): Changes reflect instantly without losing the application state.
Optimized Build: Vite uses Rollup for optimized production builds.
Modern Features: It leverages ES modules, which modern browsers support natively.
Steps to Create a React App Using Vite

# How does React Work?

React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

# The Virtual DOM

is React's lightweight version of the Real DOM. Real DOM manipulation is substantially slower than virtual DOM manipulation. When an object's state changes, Virtual DOM updates only that object in the real DOM rather than all of them.

Compilation = euta language bata arko ma laaney jastai water -> alcohol

Transpilation = euta version bata arko version ma lane jastai water -> ice

#Babel is the transpiler for javascript, i.e. it converts advanced js or react to simple js

# JSX className

In JSX, you can’t use the word class! You have to use className instead. This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

# Router

to install router:
npm i react-router-dom

# Components (fileName.jsx)

Components in React = Single independent unit of user interface(UI) that lets you split into reusable pieces, and they can be functional or class-based.

1. Functional Components (Simpler Approach) preferred because of React Hooks
2. Class Components (Legacy Approach)

# Hot Module Replacement (HMR)

Tool used to auto reload after making changes in the files.

# Props

A prop (short for property) is an input that you can pass to a component when rendering that component.
Eg.:
Home.jsx

---

function Home(){
return (
<>

<h1>Props Demo</h1>
<Card title = "card-design"/ >
<Button text="Register" />
<Button text="Login" />
<Button text="Logout" />
</>
)
}
where title is prop of Card and text is prop of Button Component.

# Hooks

In React, hooks are special functions that allow functional components to use state and other React features such as lifecycle methods and side effects, without writing a class. They provide a way to "hook into" React's core functionalities like state management, context, and rendering logic.

-**- Key Characteristics: -**-

Used in functional components: Hooks enable functional components to handle state and other features that were previously only available in class components.

Start with "use": All hooks have names that start with "use" (e.g., useState, useEffect).

Do not work in classes: Hooks only work in functional components, not in class-based components.

Cannot be called conditionally: Hooks should always be called at the top level of the component, not inside loops or conditional statements, ensuring that the order of hooks is preserved between renders.

-**- Main Purpose of Hooks: -**-

State Management: Use hooks like useState to manage local component state.

Side Effects: Use hooks like useEffect to perform side effects such as fetching data or subscribing to external services.

Optimization: Hooks like useMemo and useCallback help optimize performance by memoizing values or functions to prevent unnecessary recalculations or renders.

Hooks allow you to build complex, stateful, and dynamic components in React using a simpler and more functional approach.

# Types of Hooks

1. **useState**

In React, states are arbitrary data that you can declare and manage in your components.

Purpose: Manages state in functional components.

When calling the useState() function, you can pass an argument that will serve as the initial value of the state. The function then returns an array with two elements.

The first element holds the state value, and the second element is a function that allows you to change the state value. You need to use the destructuring array syntax to receive both elements like this :

const [value, setValue] = userState(initialValue)

To render the state value, you can embed it into JSX as follows:

import { useState } from 'react'

function ParentComponent() {
const [name, setName] = useState('John')

return (
<>

<h1>Hello {name}</h1>
</>
)
}

export default ParentComponent

2. **useEffect in React**

Purpose: Handles side effects like fetching data, manually changing DOM, setting up subscriptions, or updating state based on external data. (e.g., data fetching, subscriptions).

Syntax: useEffect(callback, [dependency_array]);

Usage: Runs after the component renders or updates, useful for API calls, DOM manipulation.

Example:

useEffect(() => {
// side effect logic here
return () => {
// Cleanup logic here (optional)
}
}, [dependencies]);

# 3 Types of useEffect (based on Trigger point)

# (a) useEffect with No Dependencies (Runs on Every Render):

Runs all the time (every render). Good for general updates.

useEffect(() => {
console.log("Component rendered or updated");
});

# (b) useEffect with an Empty Dependency Array:

Runs just once (on mount). Good for setup. setting up subscriptions that don’t need to change.

useEffect(() => {
console.log("Component mounted");
}, []);

# (c) useEffect with Specific Dependencies Array (Runs When Dependencies Change):

Runs only when certain values change. Good for reacting to specific changes.

useEffect(() => {
console.log("Count changed to", count);
}, [count]);

3. **useContext**

Purpose: Accesses values from a React context without prop drilling.

Syntax: const value = useContext(Context);

Usage: Shares state or data across components via context.

Example:
const theme = useContext(ThemeContext);

4. **useReducer**

Purpose: Manages more complex state logic (alternative to useState).

Syntax:
const [state, dispatch] = useReducer(reducer, initialState);

Usage: Useful for managing complex or multiple state transitions.

Example:

const [state, dispatch] = useReducer(reducer, { count: 0 });

5. **useRef**

Purpose: Accesses DOM elements or stores mutable values that persist across renders without causing re-renders.

Syntax: const ref = useRef(initialValue);

Usage: Useful for direct DOM manipulation or to hold values like timers.

Example:

const inputRef = useRef(null);
inputRef.current.focus(); // Accesses the DOM element

# to prevent page reload, we use e.preventDefault()

It stops page from reloading after pressing submit button.

Eg.:
function handleSubmit(e) {
e.preventDefault();
console.log({ name, address, email });
}

# Axios

Axios is a popular JS promise-based HTTP client library used in React, Nodejs.
Axios in React - The King of HTTP Clients

To install:
npm i axios

Why Axios over fetch?

- Automatic JSON parsing
- Better error handling
- Request/response interceptors
- Cleaner syntax

Example:
import axios from "axios";

async function getUserData() {
try {
const url = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(url);

    return response.data;

} catch (err) {
console.log({ err });
throw err;
}
}

export { getUserData };

# Axios Instance

An Axios instance allows you to create a custom configuration for your HTTP requests, such as setting a base URL, custom headers, or timeout. This is useful when you're working with the same API across different parts of your app.

Here's how to create and use an Axios instance:

EXAMPLE : -

// File : users.js
import axios from "axios";

//create an instance
const instance = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com',
headers: {
'Content-Type': 'application/json',
},
timeout: 3000,
})

// Use the instance to make requests
async function getUserData() {
const resource = '/posts'
try {
const response = await instance.get(resource);
return response.data;
} catch (err) {
console.log({ err });
throw err;
}
}

export { getUserData };

// File: App.jsx

const [user, setUser] = useState(" ")

<button onClick={() => apiCall()}> Fetch User from API </button>

// jsoplaceholder bata users fetch garni function
const apiCall = async () => {
try {
const users = await getUserData();
console.log({ users });

      setUser(users[3]);
    } catch (e) {
      console.log({ e });
    }

};

// mathi ko "API" wala Button click garda, api bata user ko number 4 html ma print huna paryo

Username from API = {user?.name} <br />

# 2 way binding

Two-Way Binding in React (Controlled Components)
Value comes from state → state updates on change.

Use case = managing user input in forms and ensuring UI elements stay synchronized with the underlying data

Two way binding = state bata remove or add vako kura UI ma ni reflect huna value = {} use garni, submit garera sakesi, form ko UI pani clear garna lai use hunxa

const [name, setName] = useState("");

<form>
<input
value={name}
onChange={(e) => setName(e.target.value)}
/>
</form>

<p>Hello {name}!</p>

# Props Drilling

Props Drilling is a common situation in React where you pass data or functions through multiple layers of components just to reach a deeply nested component that actually needs it. This can make the code harder to maintain and understand because intermediate components receive props they don’t directly use—they only pass them down.

For example, if you have a parent component passing data to a grandchild, the intermediate child component must accept and forward those props even if it doesn’t need them.

Solution = State Management, Context API

# Passing props to parent from children (Lifting State Up)

Passing props from a child component to a parent in React is done by having the parent provide a function (callback) as a prop to the child. The child calls this function and can pass data as arguments, effectively sending data "up" to the parent.

# Cleanup Function - prevents bugs and leaks

A cleanup function in React is a function you return inside the useEffect hook to clean up or undo side effects when a component unmounts or before the effect runs again. It helps prevent memory leaks, cancel timers, remove event listeners, or abort network requests.

Why is it important?

- Prevents unwanted behavior when a component unmounts.
- Frees resources like timers or subscriptions.
- Avoids updating state on unmounted components.

EXAMPLE =

useEffect(() => {
console.log("hello");

// cleanup function
return () => {
console.log("bye");
};
}, [parentCount]);

# Debouncing - to stop hammering API

Its technique used to control how often a function runs in response to rapid, continuous events like typing in a search bar or window resizing

User types "react" in search box → don’t call API 5 times.
Wait 1000ms of inactivity → then search.

- Use case = Handling user input (e.g., search bars) to avoid making API calls on every keystroke.

EXAMPLE =

useEffect(() => {
const timer = setTimeout(() => {
setDebounceValue(inputValue);
}, 1000);

    return () => {
      clearTimeout(timer); //debouncing
    };

}, [inputValue]);

# CUSTOM HOOK - ABSTRACT LOGIC THAT CAN BE USED WHEREVER REQUIRED

A Custom Hook in React is a reusable function that lets you extract and share stateful logic between components. It allows you to encapsulate common behaviors (like fetching data, handling forms, or managing timers) without duplicating code.

Custom Hooks always start with the prefix "use"Something and can call other hooks internally. They help keep components clean, improve code organization, and promote reusability.

Why use Custom Hooks?

- To abstract and reuse complex logic.
- To keep components focused on UI.

EXAMPLE =

// CUSTOM HOOK = RESUABLE FUNCTION WITHOUT DUPLICATING CODE
function useDebounce(inputValue, delay) {
const [debounceValue, setDebounceValue] = useState("");

useEffect(() => {
const timer = setTimeout(() => {
setDebounceValue(inputValue);
}, delay);

    return () => {
      clearTimeout(timer);
    };

}, [delay, inputValue]);

return debounceValue;
}

# Derived State

const [myName, setMyName] = useState("Ashish");
const greeting = "Good morning " + myName

// Derived state - derived from existing props or state, rather than stored separately
// don't use "useEffect" coz it can lead to unnecessary complexity and bugs.

# useMemo Hook = to cache expensive calculations

- to cache/memoize value
- useMemo also has dependency array
- dependency array 1 choti matrai change huda run hunxa , next time ma paila kai cache value use garxa
- This helps optimize performance by avoiding unnecessary recalculations on every render.
- Useful for derived data that depends on props or state.

- EXAMPLE =

const id2User = useMemo(() => {
const foundUser = users.find((item) => {
console.log("find chalyo");
if (item.id === 2) {
return item;
}
});

    return foundUser;

}, [users]);

# useCallback = to keep function cached

= It lets us cache/memoize a function definition between re-renders.

# Tailwind CSS

# Install Tailwind CSS with React Vite

npm install -D tailwind postcss autoprefiser
npx tailwindcss init -p

# React

JSX
Components (Functional and Class)
State and Props
Lifecycle Methods
Hooks (useState, useEffect, etc.)
React Router
State Management (Context API, Redux)

TypeScript
Type Annotations
Interfaces and Types
Classes and Inheritance
Generics
Modules
Advanced Types
TypeScript with React
