import { useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader"
const MoviesGrid = ({ movies, watchlist, toggleWatchlist, loading, error}) => {
  const [searchTerm, setSearch] = useState("");
  const [rating, setRating] = useState("All");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  // const matchGenre = (movie, genre) => {
  //   return (
  //     genre === "All Genres" ||
  //     movie.genre.toLowerCase() === genre.toLowerCase()
  //   );
  // };

  const matchSearchTerm = (movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim());
  };

  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.vote_average >= 8;

      case "Ok":
        return movie.vote_average >= 5 && movie.vote_average < 8;

      case "Bad":
        return movie.vote_average < 5;

      default:
        return false;
    }
  };

  const filteredMovies = movies.filter((movie) =>
     matchRating(movie, rating)
    && matchSearchTerm(movie)
  );

  if(loading) return <Loader/>
  if(error) return <h2>{error}</h2>
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
      
        <div className="filter-slot">
          <label>Rating</label>
          <select
            name=""
            id=""
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} isWatchedlist={watchlist.includes(movie.id)} toggleWatchlist={toggleWatchlist}/>
        ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
