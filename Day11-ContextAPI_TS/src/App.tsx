import axios from "axios";
import { createContext, useContext, useState } from "react";

// TypeScript type for movie objects with specific properties
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
    // Return the response data typed as an array of TMovies
    return res.data as TMovies[];
  } catch (error) {
    throw new Error("Movies not found");
  }
}

// Define a literal type that only allows "light" or "dark" values
type ThemeType = "light" | "dark";

// Create a context for theme with initial type of ThemeType or null
const ThemeContext = createContext<ThemeType | null>(null);

// Create a context for movies  with initial type of TMovies array or null
const MoviesContext = createContext<TMovies[] | null>(null);

function App() {
  // const [count, setCount] = useState<number>(0)

  // state to store the array of movies, initialized as empty array
  const [movies, setMovies] = useState<TMovies[]>([]);

  // State to store current theme, initialized as "light"
  const [theme, setTheme] = useState<ThemeType>("light");

  async function fetchMovies() {
    try {
      const data = await getMovies();
      // Update movies state with the fetched data
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(movies);

  return (
    // MoviesContext.Provider wraps children and provides movies value to all descendants
    <MoviesContext.Provider value={movies}>
      <ThemeContext.Provider value={theme}>
        <>
          <h2> TypeScript - Literal Types - Context APIs</h2>
          <button onClick={fetchMovies}>Get Movies</button>
          {/* Label wrapping the checkbox for better accessibility */}
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
              // onChange handler fires when checkbox state changes
              onChange={(e) => {
                if (e.target.checked) {
                  setTheme("dark");
                } else {
                  setTheme("light");
                }
              }}
            />
            Is dark mode?
          </label>
          <MoviesList />
        </>
      </ThemeContext.Provider>
    </MoviesContext.Provider>
  );
}

// Child component that displays the list of movies
function MoviesList() {
  // useContext hook to access the current theme value from ThemeContext
  const theme = useContext(ThemeContext);

  // useContext hook to access the current theme value from MoviesContext
  const movies = useContext(MoviesContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h2>List of all movies: </h2>
      {/* Optional chaining (?.) safely maps over movies array if it exists or not */}
      {movies?.map((item) => {
        // Return a paragraph for each movie showing the director's name
        return <p key={item.id}>{item.director} </p>;
      })}
    </div>
  );
}

export default App;

/* 
Key Concepts Demonstrated
Context Providers: Wrap components to share data (movies and theme) down the component tree without props.

useContext Hook: Allows MoviesList to access both movies and theme values without them being passed as props.

Benefits: Avoids prop drilling - MoviesList gets data directly from context instead of receiving it through props from App.
*/
