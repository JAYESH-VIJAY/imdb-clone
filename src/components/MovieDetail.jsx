//------------------------this is movie detail component-----------------------
import Loder from "./Loder";
import Box from "./Box";
import StarRating from "./StarRating";

const key = "8e369166";
import { useEffect, useState, useContext } from "react";
import { useKey } from "./useKey";
import { MovieContext } from "../App";
export default function MovieDetail() {
  const { setSelectedId, id, onWatch, setterFunction } =
    useContext(MovieContext);

  const [sloading, setIsSLoading] = useState();

  const [selectedMovie, setSelectedMovie] = useState({});
  useEffect(() => {
    async function getSelectedMovie() {
      setIsSLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${id}`);
      const data = await res.json();
      setSelectedMovie(data);
      setIsSLoading(false);
    }
    getSelectedMovie();
  }, [id]);
  const {
    Actors: actors,
    Country: country,
    Director: director,
    Genre: genre,
    Language: language,
    Plot: plot,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Title: title,
    imdbRating,
  } = selectedMovie;

  useEffect(() => {
    if (!title) return;
    document.title = `Movie: ${title}`;
    return function () {
      document.title = `imdb`;
    };
  }, [title]);

  function clickHandler() {
    setSelectedId(null);
  }

  useKey("Escape", clickHandler);

  return (
    <Box backgroundColor={"rgb(44, 43, 43)"}>
      <div>
        {sloading ? (
          <Loder />
        ) : (
          <>
            <div className="selected-movie-container">
              <div className="back-btn" onClick={clickHandler}>
                &larr;
              </div>
              <img
                src={poster}
                alt="poster not found"
                className="selected-poster"
              />
              <div className="movie-details">
                <div className="movie-name">{title}</div>
                <span className="release">
                  <span>{released}</span>
                  <span>{runtime}</span>
                </span>
                <div className="genre">{genre}</div>
                <div className="rating">⭐{imdbRating} imdb rating</div>
              </div>
            </div>

            <StarRating maxRating={10} setterFunction={setterFunction} />

            <button className="add-btn" onClick={() => onWatch(selectedMovie)}>
              + add to list
            </button>

            <section className="movie-overview">
              <p className="plot">
                <em>{plot}</em>
              </p>
              <p className="staring">Staring {actors}</p>
              <p className="director">Directed by {director}</p>
              <p className="l-c-b">
                <span>languages: {language}</span>
                <span>{country}</span>
              </p>
            </section>
          </>
        )}
      </div>
    </Box>
  );
}
