// -------------------this is Movie component-------------------

export default function Movie({ movie, setSelectedId }) {
  return (
    <div
      className="movie-container"
      onClick={() => {
        setSelectedId((id) => (id === movie.imdbID ? null : movie.imdbID));
      }}
    >
      <img src={movie.Poster} alt="" className="movie-image" />
      <div>
        <div className="name">{movie.Title}</div>
        <div className="year">{movie.Year}</div>
      </div>
    </div>
  );
}
