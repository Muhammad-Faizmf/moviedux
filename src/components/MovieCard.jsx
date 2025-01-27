const MovieCard = ({ movie, isWatchedlist, toggleWatchlist }) => {

  const handleImageError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    }
    if (rating >= 5 && rating < 8) {
      return "rating-ok";
    }
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
            <a href={`https://themoviedb.org/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.original_title}
                onError={handleImageError}
              />
            </a>
            <div className="movie-card-info">
              <h3 className="movie-card-title">{movie.original_title}</h3>
              <p style={{ textAlign: "center" }}>
                {movie.overview.slice(0, 100) + "..."}
              </p>
              <div>
                <span className="movie-card-genre">
                  {parseFloat(movie.vote_average.toFixed(1))}
                </span>
                <span
                  className={`movie-card-rating ${getRatingClass(
                    parseFloat(movie.vote_average.toFixed(1))
                  )}`}
                >
                  {parseFloat(movie.vote_average.toFixed(1))}
                </span>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={isWatchedlist}
                      onChange={() => toggleWatchlist(movie.id)}
                    />
                    <span className="slider">
                      <span className="slider-label">
                        {isWatchedlist ? "In Watchlist" : "Add to Watchlist"}
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
  );
};

export default MovieCard;
