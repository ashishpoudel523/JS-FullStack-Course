import axios from "axios";
import { createContext, useContext, useState } from "react";

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

type ThemeType = "light" | "dark";

const ThemeContext = createContext<ThemeType | null>(null);

const MoviesContext = createContext<TMovies[] | null>(null);

function App() {
  // const [count, setCount] = useState<number>(0)

  const [movies, setMovies] = useState<TMovies[]>([]);

  const [theme, setTheme] = useState<ThemeType>("light");

  async function fetchMovies() {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(movies);

  return (
    <MoviesContext.Provider value={movies}>
      <ThemeContext.Provider value={theme}>
        <>
          <h2> TypeScript - Literal Types - Context APIs</h2>
          <button onClick={fetchMovies}>Get Movies</button>
          <label>
            <input
              type="checkbox"
              checked={theme === "dark"}
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

function MoviesList() {
  const theme = useContext(ThemeContext);
  const movies = useContext(MoviesContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h2>List of all movies: </h2>
      {movies?.map((item) => {
        return <p key={item.id}>{item.director} </p>;
      })}
    </div>
  );
}

export default App;
