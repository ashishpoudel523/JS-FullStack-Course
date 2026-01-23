# TypeScript is a programming language that adds types to JavaScript. It allows us to write JavaScript with a set of tools called a type system that can spot potential bugs in, clarify the structure of, and help refactor our code.

# TypeScript is a strongly typed superset of JavaScript which adds static typing.

Typescript founder = Anders Hejlsberg

# Why Typescript?

- static Type (check variable's data type) Checking
- IMporoved Developer Experience
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

Example of simple interface:

interface User {
id: number;
name: string;
age?: number; // optional property
}

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

Examples of Type Inference:
let count = 10; // inferred as number
const message = "Hello TypeScript"; // inferred as string

function add(a: number, b: number) {
return a + b; // return type inferred as number
}

const arr = [1, 2, 3]; // inferred as number[]

# Type-Safe Props

Define an interface or type for your component props to explicitly state what props the component expects, along with their types.

Example:

type ButtonProps = {
label: string;
onClick: () => void;
};

# Optional Props

You can mark props as optional by adding a ? after the prop name. The component can then be called with or without these props.

Example:

type UserCardProps = {
name: string;
age?: number; // optional prop
};

# Static typing vs Dynamic Typing

Static typing checks variable types during compilation, ensuring high performance and early error detection (e.g., Java, C++).

Dynamic typing checks types at runtime, offering faster prototyping and greater flexibility (e.g., Python, JavaScript), but risks unexpected errors during execution.

# Literal Types

It allows us to specify the exact value a variable can hold.

type Direction = "east" | "west" | "north" | "south"

let move: Direction

move = "south" // it's valid
