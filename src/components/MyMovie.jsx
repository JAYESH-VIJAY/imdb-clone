import React, { useEffect, useState } from "react";

export default function MyMovie({ movieDetails, userRating }) {
  const [allWatchedMovie, setAllWatchedMovieList] = useState([]);

  useEffect(() => {
    setAllWatchedMovieList((prevWatchedMovies) => {
      // const uniqueMovies = Array.from(
      //   new Set([...prevWatchedMovies, movieDetails])
      // );
      const uniqueMovies = [...prevWatchedMovies, movieDetails].filter(
        (movie, index, self) =>
          index ===
          self.findIndex(
            (m) => m.imdbID === movie.imdbID && m.Title === movie.Title
          )
      );
      return uniqueMovies;
    });
  }, [movieDetails]);

  return (
    <li className="mymovie">
      {allWatchedMovie.slice(1).map((watchedMovie, index) => (
        <div className="my-m" key={index}>
          <img
            src={watchedMovie.Poster}
            alt="movie-poster"
            className="movie-poster"
          />
          <div className="box-1">
            <p className="movie-title">{watchedMovie.Title}</p>
            <div className="data-container">
              <span>⭐ {watchedMovie.imdbRating}</span>
              <span>🌟 {userRating}</span>
              <span>⏰ {watchedMovie.Runtime}</span>
            </div>
          </div>
        </div>
      ))}
    </li>
  );
}
