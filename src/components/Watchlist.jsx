import MovieCard from "./MovieCard";

const Watchlist = ({movies, watchlist, toggleWatchlist}) => {
  return (
    <div>
      <h1 className="title"> Watchlist</h1>
      <div className="watchlist"></div>
      <div className="movies-grid">
        {
        watchlist.map(id => {
          const movie = movies.find(movie => movie.id === id);
          return <MovieCard movie={movie} key={id} toggleWatchlist={toggleWatchlist} isWatchedlist={true}></MovieCard>
        })
      }
      </div>
    </div>
  )
}

export default Watchlist