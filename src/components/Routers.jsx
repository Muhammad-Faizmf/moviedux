import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MoviesGrid from "../components/MoviesGrid";
import Watchlist from "../components/Watchlist";

const AllRoutes = ({movies, watchlist, toggleWatchlist}) => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <MoviesGrid
              movies={movies}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <Watchlist
              movies={movies}
              watchlist={watchlist}
              toggleWatchlist={toggleWatchlist}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
