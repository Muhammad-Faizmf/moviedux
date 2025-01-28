import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import AllRoutes from "./components/Routers";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=dc572f65942de3ed506949ef2f472418"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
        setError("");
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  }, []);

  const toggleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <AllRoutes
          movies={movies}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
          loading={loading}
          error={error}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
