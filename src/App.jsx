import "./App.css";
import NavBar from "./components/NavBar";
import { createContext, useState } from "react";
import MovieDetail from "./components/MovieDetail";
import Watched from "./components/Watched";
import MovieList from "./components/MovieList";
//custom Hook
import { useMovies } from "./useMovies";

//context api
export const MovieContext = createContext();

const App = () => {
  const [query, setQuery] = useState("");
  const [id, setSelectedId] = useState(null);
  //---------for star-------------
  const [userRating, setUserRating] = useState(null);
  function setterFunction(r) {
    setUserRating(r);
  }
  //----
  //---------this is for add the movie in our watch list-------

  const [movie, setMovie] = useState({});
  const addHandler = (m) => {
    setMovie(m);
  };

  const { movies, loading, error } = useMovies(query);

  return (
    <MovieContext.Provider
      value={{
        movies,
        query,
        setQuery,
        setSelectedId,
        loading,
        error,
        id,
        onWatch: addHandler,
        userRating,
        setterFunction,
        setUserRating,
        movieDetails: movie,
      }}
    >
      <NavBar />

      <div className="movies">
        {query.length >= 3 && <MovieList />}
        {id && <MovieDetail />}

        <Watched></Watched>
      </div>
    </MovieContext.Provider>
  );
};

export default App;
