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
project name:./
Select React
Select Javascript / Typescript

While creating react project if you don't want to create new folder as a new project name, you can write

Project name: ./

Replace my-app with your desired project name.

npm install

npm run dev

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

```
Eg.:
Home.jsx

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
```

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

```
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
```

2. **useEffect in React**

Purpose: Handles side effects like fetching data, manually changing DOM, setting up subscriptions, or updating state based on external data. (e.g., data fetching, subscriptions).

Syntax: useEffect(callback, [dependency_array]);

Usage: Runs after the component renders or updates, useful for API calls, DOM manipulation.

```
Example:

useEffect(() => {
// side effect logic here
return () => {
// Cleanup logic here (optional)
}
}, [dependencies]);
```

# 3 Types of useEffect (based on Trigger point)

##### (a) useEffect with No Dependencies (Runs on Every Render):

Runs all the time (every render). Good for general updates.

useEffect(() => {
console.log("Component rendered or updated");
});

##### (b) useEffect with an Empty Dependency Array:

Runs just once (on mount). Good for setup. setting up subscriptions that don’t need to change.

useEffect(() => {
console.log("Component mounted");
}, []);

##### (c) useEffect with Specific Dependencies Array (Runs When Dependencies Change):

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

#### To prevent page reload, we use e.preventDefault()

It stops page from reloading after pressing submit button.

Eg.:
function handleSubmit(e) {
e.preventDefault();
console.log({ name, address, email });
}

# React API Call

```
import { useEffect, useState } from "react";
// install axios => npm i axios
import axios from "axios";

function App() {
  // State to store fetched data
  // State to control loading UI
  // State to store error message
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // ❌ useEffect callback itself CANNOT be async
    //  ✔ define async function inside it
    async function fetchTodos() {
      try {
        // Axios GET request
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
        );

        // Axios automatically parses JSON
        // response.data contains the actual payload
        setTodos(response.data.slice(0, 5));
      } catch (err) {
        // Axios throws error for non-2xx responses
        // Prefer server message if available
        setError(err.response?.statusText || err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []); // [] → runs only once when component mounts

  // Loading state UI
  if (loading) return <p>Loading...</p>;

  // Error state UI
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {/* key is REQUIRED when rendering lists */}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

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

```
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
```

# Axios Instance

An Axios instance allows you to create a custom configuration for your HTTP requests, such as setting a base URL, custom headers, or timeout. This is useful when you're working with the same API across different parts of your app.

Here's how to create and use an Axios instance:

```
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
```

# 2 way binding

Two-Way Binding in React (Controlled Components)
Value comes from state → state updates on change.

Use case = managing user input in forms and ensuring UI elements stay synchronized with the underlying data

Two way binding = state bata remove or add vako kura UI ma ni reflect huna value = {} use garni, submit garera sakesi, form ko UI pani clear garna lai use hunxa

```
const [name, setName] = useState("");
<form>
  <input
  value={name}
  onChange={(e) => setName(e.target.value)}
  />
</form>

<p>Hello {name}!</p>
```

# Props Drilling

Props Drilling is a common situation in React where you pass data or functions through multiple layers of components just to reach a deeply nested component that actually needs it. This can make the code harder to maintain and understand because intermediate components receive props they don’t directly use — they only pass them down.

For example, if you have a parent component passing data to a grandchild, the intermediate child component must accept and forward those props even if it doesn’t need them.

Solution of prop drilling => State Management, Context API

# Passing props to parent from children (Lifting State Up)

Passing props from a child component to a parent in React is done by having the parent provide a function (callback) as a prop to the child. The child calls this function and can pass data as arguments, effectively sending data "up" to the parent.

# Cleanup Function - prevents bugs and leaks

A cleanup function in React is a function you return inside the useEffect hook to clean up or undo side effects when a component unmounts or before the effect runs again. It helps prevent memory leaks, cancel timers, remove event listeners, or abort network requests.

Why is it important?

- Prevents unwanted behavior when a component unmounts.
- Frees resources like timers or subscriptions.
- Avoids updating state on unmounted components.

```
EXAMPLE =

useEffect(() => {
console.log("hello");

// cleanup function
return () => {
console.log("bye");
};
}, [parentCount]);
```

# Debouncing - to stop hammering API

Its technique used to control how often a function runs in response to rapid, continuous events like typing in a search bar or window resizing

User types "react" in search box → don’t call API 5 times.
Wait 1000ms of inactivity → then search.

- Use case = Handling user input (e.g., search bars) to avoid making API calls on every keystroke.

```
EXAMPLE =

useEffect(() => {
const timer = setTimeout(() => {
setDebounceValue(inputValue);
}, 1000);

return () => {
clearTimeout(timer); //debouncing
};

}, [inputValue]);
```

# CUSTOM HOOK - ABSTRACT LOGIC THAT CAN BE USED WHEREVER REQUIRED

A Custom Hook in React is a reusable function that lets you extract and share stateful logic between components. It allows you to encapsulate common behaviors (like fetching data, handling forms, or managing timers) without duplicating code.

Custom Hooks always start with the prefix "use"Something and can call other hooks internally. They help keep components clean, improve code organization, and promote reusability.

Why use Custom Hooks?

- To abstract and reuse complex logic.
- To keep components focused on UI.

```
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
```

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

```
EXAMPLE =

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

// WITHOUT useCallback
const sayHello = () => {
alert('Hello!');
};
// ☝️ This is created NEW every time component re-renders

// WITH useCallback
const sayHello = useCallback(() => {
alert('Hello!');
}, []);
// ☝️ This is created ONCE and reused
```

# ContextAPI

Context API is React's built-in solution for sharing data across component trees without prop drilling (passing props through every level). It consists of:

createContext() - Creates a context object
Provider - Component that supplies the context value to its children
useContext() - Hook that consumes the context value in any child component.

####################################################################################################################################################################################################################################################################################

# TYPESCRIPT

# TypeScript is a programming language that adds types to JavaScript.

It allows us to write JavaScript with a set of tools called a type system that can spot potential bugs in, clarify the structure of, and help refactor our code.

# TypeScript is a strongly typed superset of JavaScript which adds static typing.

Typescript founder = Anders Hejlsberg

# Why Typescript?

- static Type (check variable's data type) Checking
- Imporoved Developer Experience
- Better COde Manitainablility
- Early Bug Detection
- Enhanced COllaboraton
- Supports modern JS features

We write TypeScript code in files with the extension .tsx.
Next, we run our code through the TypeScript transpiler. The transpiler will check that the code adheres to TypeScript’s standards, and it will display errors when it does not.

If the TypeScript code can be converted into working JavaScript, the transpiler will output a JavaScript version of the file (.js).

TypeScript code is a superset of JavaScript code—it has all the features of traditional JavaScript but adds some new features.

The first things we’ll discover with TypeScript is that when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type.

# Types and Interface

In TypeScript, types and interfaces are two primary ways to define the shape of objects, function signatures, or more complex data structures. They help you enforce consistent data structures and enable type checking.

# Types

- Created using the "type" keyword.

- Can define aliases for primitive types, unions, intersections, tuples, and object shapes.

- Useful for defining complex or composite types.

Example of simple type:

type ID = number | string;
type User = {
id: ID;
name: string;
age?: number; // optional property
};

# Interfaces

- Created using the interface keyword.
- Used mainly to describe the shape of an object.
- Can be extended or implemented by classes.
- Supports declaration merging (interfaces with the same name merge).

```
Example of simple interface:

interface User {
id: number;
name: string;
age?: number; // optional property
}
```

# Differences

- Both can describe object shapes similarly.

- Interfaces can be extended or merged; types are more flexible (can represent unions, primitives).

- Use interfaces for defining object contracts; use types for more varied structures.

# How TypeScript Compilation Works:

You write .ts or .tsx files with TypeScript syntax.

The TypeScript compiler (tsc) converts them into JavaScript files (.js).

The output JavaScript is compatible with your target environment (browsers, Node.js).

# Type Inference

The compiler automatically figures out the type of a variable, function return, or expression when you don’t explicitly specify it. This makes your code cleaner while still benefiting from type safety.

```
Examples of Type Inference:
let count = 10; // inferred as number
const message = "Hello TypeScript"; // inferred as string

function add(a: number, b: number) {
return a + b; // return type inferred as number
}

const arr = [1, 2, 3]; // inferred as number[]
```

# Type-Safe Props

Define an interface or type for your component props to explicitly state what props the component expects, along with their types.

```
Example:

type ButtonProps = {
label: string;
onClick: () => void;
};
```

# Optional Props

You can mark props as optional by adding a ? after the prop name. The component can then be called with or without these props.

```
Example:

type UserCardProps = {
name: string;
age?: number; // optional prop
};
```

# Static typing vs Dynamic Typing

Static typing checks variable types during compilation, ensuring high performance and early error detection (e.g., Java, C++).

Dynamic typing checks types at runtime, offering faster prototyping and greater flexibility (e.g., Python, JavaScript), but risks unexpected errors during execution.

# Type-safe API Data

The practice of designing and implementing APIs in a way that ensures the data exchanged between the client and the server adheres to explicitly defined types or schemas, preventing type-related errors at both compile-time and runtime. This approach improves data integrity, enhances the developer experience (DX), and reduces the risk of bugs.

```
EXAMPLE:

type TMovies = {
id: string;
budget: string;
cast: string;
createdAt: string;
director: string;
movie: string;
};

async function getMovies() {
try {
const res = await axios.get(
"https://69733836b5f46f8b582687ec.mockapi.io/movies_app/movies",
);
return res.data as TMovies[];
} catch (error) {
throw new Error("Movies not found");
}
}
```

# Literal Types

It allows us to specify the exact value a variable can hold.

```
type Direction = "east" | "west" | "north" | "south"

let move: Direction

move = "south" // it's valid
```

# Context API Providers and useContext

Solves the problem of => Props Drilling

Context API is React's built-in solution for sharing data across component trees without prop drilling (passing props through every level). It consists of:

- createContext() - Creates a context object
- Provider - Component that supplies the context value to its children
- useContext() - Hook that consumes the context value in any child component

```
EXAMPLE:

import { useState, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <App/>
);



```

# React Ruoter with Typescript

React Router is a library that provides routing capabilities for React applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. It enables you to:

- Create multiple pages in your single-page application
- Handle URL parameters and query strings
- Manage browser history and navigation
- Create nested routes and layouts
- Implement protected routes for authentication

# Install React Router as dev dependency

1. npm install -D react-router-dom

2. npm i -D @types/react-router-dom

The @types/react-router-dom package provides type definitions for TypeScript, enabling type safety when using the react-router-dom library.

3. Wrap Your App with BrowserRouter and import BrowserRouter

```
function App() {
return (
<BrowserRouter>
{/_ Your app content _}
</BrowserRouter>
);
}
```

To wrap <BrowserRouter> in typescript file, we should import it.

# Router Types:

1. BrowserRouter - HTML5 history API routing (recommended)
2. HashRouter - Hash-based routing for compatibility
3. MemoryRouter - In-memory routing for testing
4. StaticRouter - Server-side rendering support
5. NativeRouter - React Native routing

# Link Component in Router

We must use Link instead of href to stop entire page from reloading.
Link loads particular component only.

# Link Component Benefits:

1. No Page Reloads - Client-side navigation only
2. State Preservation - Maintaining React component state
3. Performance - Faster navigation than traditional links
4. History Management - Proper browser history handling
5. Programmatic Control - JavaScript-driven navigation

# Advanced Link Features:

1. NavLink for active styling
2. Link state passing
3. Conditional navigation
4. External link handling
5. Accessibility considerations

# Browser History in ReactRouter

React Router automatically manages history.

# Layout Route

Importance:

1. Shared Components - Headers, footers, and sidebars
2. Route Nesting - Organizing routes hierarchically
3. Layout Composition - Building flexible layout systems
4. Content Areas - Defining where child routes render
5. Responsive Layouts - Adapting layouts for different screen sizes

Implementation Patterns:

1. Main application layout
2. Dashboard layouts with sidebars
3. Multi-column layouts
4. Modal and overlay patterns
5. Authenticated vs public layouts

```
EXAMPLE =
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Users } from "./Users";
import { Events } from "./Events";

function App() {
return (
<BrowserRouter>
<Routes>
{/_ THIS 1ST ROUTE IS CALLED LAYOUT ROUTE WHICH HAS CHILDREN ROUTES _/}
<Route path="/" element={<Home />}>
<Route path="/users" element={<Users />} />
<Route path="/events" element={<Events />} />
</Route>
</Routes>
</BrowserRouter>
);
}

export default App;

```

# The Outlet component

It is not a built-in feature of React itself, but rather a core component of the React Router library, specifically used for nested routing. It acts as a placeholder in a parent component where child route elements are rendered.

The primary use of <Outlet /> is to create persistent layouts (like a navigation bar, header, or footer) that remain visible while only the main content area changes dynamically based on the current URL.

# Advanced Patterns of Outlet Component:

1. Sidebar navigation with content areas
2. Tab-based interfaces
3. Master-detail views
4. Multi-panel dashboards
5. Conditional outlet rendering

```

import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <br />
      <Link to="/users">Go to Users Page</Link> <br />
      <Link to="/events">Go to Events Page</Link>
      {/_ Components above outlet remain same, only child route elements are rendered._/}
      <Outlet />
    </div>
  );
}
export { Home };

```

# useNavigate Hook - To navigate to another page

1. Programmatic Navigation - Navigate based on user actions
2. Navigation Options - Replace, state, and relative navigation
3. Route Parameters - Navigating with dynamic parameters
4. Query Parameters - Including search parameters
5. Navigation State - Passing state between routes

# useNavigate Common Use Cases:

1. Form submission redirects
2. Authentication flows
3. Conditional navigation
4. Back button functionality
5. Multi-step wizards and flows

```
import { useNavigate } from "react-router-dom";

function Events() {
  const navigation = useNavigate();
  function handleGotoUsers() {
    navigation({ pathname: "/users", search: "?id=10&from=events" });
  }

  return (
    <div>
      <h3>Events Page</h3>
      <button onClick={handleGotoUsers}>Users</button>
    </div>
  );
}

export { Events };

```

# useSearchParams

It is used in React Router and Next.js to read and modify query string parameters from the URL (e.g., ?key=value).

### useSearchParams Features:

1. Reading Parameters - Accessing current search parameters
2. Parameter Parsing - Converting strings to appropriate types
3. Multiple Values - Handling parameters with multiple values
4. Default Values - Providing fallbacks for missing parameters
5. Type Safety - Working with TypeScript for parameter types

### useSearchParams for State Management:

1. URL as single source of truth
2. Syncing component state with URL
3. Search and filter interfaces
4. Pagination controls
5. Shareable application states

```
EXAMPLE OF useSearchParams, setSearchParams

import { useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log("id is", searchParams.get("id"));
  console.log("from", searchParams.get("from"));
  return (
    <div>
      <h2>Users Page</h2>

      <button
        onClick={() => {
          setSearchParams({ id: "20", from: "events" });
        }}
      >
        Change Query Params
      </button>
    </div>
  );
}

export { Users };

```

# Advanced URL Parameters

Explore advanced URL parameter patterns and techniques for building sophisticated routing systems.

### Advanced Patterns:

- Nested Parameters - Multi-level parameter structures
- Optional Parameters - Making parameters optional with ?
- Wildcard Parameters - Using \* for catch-all routes
- Parameter Validation - Ensuring parameter formats
- Parameter Transformation - Converting and processing parameters

### Complex Scenarios:

- Multi-tenant applications
- Internationalization (i18n) routing
- Version-specific routes
- A/B testing parameter handling
- Custom parameter parsing logic

# useParams - Get URL Parameters

useParams hook to extract and utilize URL parameters in your React components effectively.

### useParams Hook:

- Parameter Extraction - Getting values from URL segments
- Type Safety - TypeScript integration for parameters
- Multiple Parameters - Handling complex parameter combinations
- Parameter Validation - Ensuring parameter existence and format
- Default Handling - Managing missing or invalid parameters

### Implementation Best Practices:

- Parameter type conversion
- Error handling for invalid parameters
- Caching and memoization
- Integration with data fetching
- Parameter-based component rendering

```
EXAMPLE:

import { useParams } from "react-router-dom";

function SingleUser() {
  const { username } = useParams();
  return (
    <div>
      <h2>I am SingleUser my username is: {username} </h2>
    </div>
  );
}

export { SingleUser };

```

# rfce = vs code shortcut to create function in react file

# Generics in React Typescript

Generics allow you to create reusable components that work with multiple types while maintaining type safety. They're like placeholders for types that get filled in when the component is used.

#### Why Use Generics?

1. Create flexible, reusable components
2. Maintain strong type checking
3. Avoid code duplication
4. Better IntelliSense and autocomplete

```
EXAMPLE:-

import React from 'react';

// Define props with a generic type T
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// Generic functional component
function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage Example 1: List of strings
function App() {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <List
      items={fruits}
      renderItem={(fruit) => <span>{fruit}</span>}
    />
  );
}

// Usage Example 2: List of objects
interface User {
  id: number;
  name: string;
  email: string;
}

function UserList() {
  const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];

  return (
    <List
      items={users}
      renderItem={(user) => (
        <div>
          <strong>{user.name}</strong> - {user.email}
        </div>
      )}
    />
  );
}
```

# React Redux

    npm i @reduxjs/toolkit

    npm i react-redux

# React Redux Notes

Redux is a **predictable state management library** for JavaScript applications. It helps you manage the global state of your application in a centralized store.

### Why Use Redux with React?

- **Centralized State**: All application state lives in one place
- **Predictable**: State changes follow strict patterns
- **Debuggable**: Easy to track state changes over time
- **Testable**: Pure functions make testing straightforward

---

## Core Concepts

### 1. Store

The single source of truth that holds the entire state of your application.

### 2. Actions

Plain JavaScript objects that describe **what happened**. They must have a `type` property.

### 3. Reducers

Pure functions that specify **how the state changes** in response to actions.

### 4. Dispatch

The method used to send actions to the store.

## When to Use Redux

✅ **Use Redux when:**

- Multiple components need to access the same state
- State needs to be available in many places
- App has complex state logic
- You need time-travel debugging

❌ **Don't use Redux when:**

- Building a small app with simple state
- State is only used in one component
- Learning React for the first time (learn React first!)

---

## Installation

### Modern Approach (Redux Toolkit - Recommended)

```bash
npm install @reduxjs/toolkit react-redux
```

### Classic Approach (Not Recommended for Beginners)

```bash
npm install redux react-redux
```

**Note**: Redux Toolkit is the official recommended way to write Redux logic. It simplifies the setup and reduces boilerplate.

---

## Redux Architecture

```
┌─────────────┐
│  Component  │
└──────┬──────┘
       │ dispatch(action)
       ▼
┌─────────────┐
│   Action    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Reducer   │ ──► updates ──► ┌───────┐
└─────────────┘                  │ Store │
                                 └───┬───┘
                                     │
                        subscribe    │
                                     ▼
                              ┌─────────────┐
                              │  Component  │
                              └─────────────┘
```

---

## Best Practices

### 1. Use Redux Toolkit

Redux Toolkit is the official, recommended way to write Redux logic. It includes:

- `configureStore()`: Simplified store setup
- `createSlice()`: Reduces boilerplate
- Built-in Immer for immutable updates

### 2. Organize Files by Feature

```
src/
  features/
    counter/
      counterSlice.js
      Counter.jsx
    todos/
      todosSlice.js
      TodoList.jsx
      AddTodo.jsx
  app/
    store.js
```

### 3. Keep State Normalized

### 4. Use Selector Functions

```javascript
// Create reusable selectors
export const selectAllTodos = (state) => state.todos.todos;
export const selectActiveTodos = (state) =>
  state.todos.todos.filter((todo) => !todo.completed);
```

### 5. Don't Put Everything in Redux

Local component state is fine for:

- Form inputs
- UI state (hover, focus)
- Temporary data

## Key React-Redux Hooks

### `useSelector()`

Extracts data from the Redux store state.

```javascript
const count = useSelector((state) => state.counter.value);
const todos = useSelector((state) => state.todos.todos);
```

### `useDispatch()`

Returns the dispatch function to dispatch actions.

```javascript
const dispatch = useDispatch();
dispatch(increment());
```

## Common Mistakes to Avoid

1. **Mutating State Directly** (if not using Redux Toolkit)

   ```javascript
   // ❌ Wrong
   state.todos.push(newTodo);

   // ✅ Correct (without Redux Toolkit)
   return [...state.todos, newTodo];
   ```

2. **Not Using Redux Toolkit** - It simplifies everything!

3. **Over-using Redux** - Not everything needs to be in Redux

4. **Not Organizing Code** - Use feature-based folder structure

5. **Forgetting the Provider** - Wrap your app with `<Provider>`

---

## Quick Reference Cheat Sheet

```javascript
// 1. Install
npm install @reduxjs/toolkit react-redux

// 2. Create Slice
import { createSlice } from '@reduxjs/toolkit';

export const mySlice = createSlice({
  name: 'myFeature',
  initialState: { value: 0 },
  reducers: {
    myAction: (state, action) => {
      state.value = action.payload;
    }
  }
});

// 3. Configure Store
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    myFeature: mySlice.reducer
  }
});

// 4. Provide Store
<Provider store={store}>
  <App />
</Provider>

// 5. Use in Components
import { useSelector, useDispatch } from 'react-redux';

const value = useSelector(state => state.myFeature.value);
const dispatch = useDispatch();
dispatch(myAction(newValue));
```

# Shadcn / UI & Design Systems

A component library built on top of Radix UI + Tailwind CSS.

```
npm i tailwindcss @tailwindcss/vite

Replace everything in src/index.css with
@import "tailwindcss";

Edit tsconfig.json file

Edit tsconfig.app.json file

Update vite.config.ts

npm i -D @types/node
npx shadcn@latest init

To add button:
npx shadcn@latest add button
```

# Tailwind CSS

# Install Tailwind CSS with React Vite

npm install -D tailwind postcss autoprefixer
npx tailwindcss init -p

TypeScript
Type Annotations
Interfaces and Types
Classes and Inheritance
Generics
Modules
Advanced Types
TypeScript with React
