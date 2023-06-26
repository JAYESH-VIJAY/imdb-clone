//---------------------this is movie list component----------------

import Box from "./Box";
import Movie from "./Movie";
import Loder from "./Loder";
import ErrorMessage from "./ErrorMessage";
import { useContext, useState } from "react";
import { MovieContext } from "../App";
export default function MovieList() {
  const { movies, loading, error, setSelectedId } = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box backgroundColor={"rgb(44, 43, 43)"} width={"40%"} padding={"1.6rem"}>
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </p>
      {/* {!isOpen && <p className="seelist">click on + icon for full list </p>} */}
      {isOpen && (
        <div className="movie-list">
          {loading && <Loder />}
          {!loading &&
            !error &&
            movies.map((movie) => {
              return (
                <Movie
                  setSelectedId={setSelectedId}
                  movie={movie}
                  key={`${movie.Title.replace(" ", "")}${Math.round(
                    Math.random() * 100000
                  )}`}
                ></Movie>
              );
            })}
          {error && <ErrorMessage error={error} />}
        </div>
      )}
    </Box>
  );
}
