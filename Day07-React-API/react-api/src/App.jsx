// import { useEffect, useState } from "react";

// function App() {
//   // State to store fetched data
//   // State to control loading UI
//   // State to store error message (IMPORTANT)
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // ❌ useEffect callback itself CANNOT be async
//     // ✔ define async function inside it
//     async function fetchTodos() {
//       try {
//         // API call
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/todos"
//         );

//         // Always check response.ok
//         // fetch DOES NOT throw error for 404/500 by default
//         if (!response.ok) {
//           throw new Error(`HTTP Error: ${response.status}`);
//         }

//         // Convert response to JS object
//         const data = await response.json();

//         // Update state → triggers re-render
//         setTodos(data.slice(0, 5));
//       } catch (err) {
//         // Store error message for UI
//         setError(err.message);

//         // Still log for debugging
//         console.error(err);
//       } finally {
//         // Runs whether success or error
//         setLoading(false);
//       }
//     }

//     // Call the async function
//     fetchTodos();
//   }, []); // [] → runs only once when component mounts

//   // Loading state UI
//   if (loading) return <p>Loading...</p>;

//   // Error state UI
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Todos</h2>
//       <ul>
//         {/* key is REQUIRED when rendering lists */}
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

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
