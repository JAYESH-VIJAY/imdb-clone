import { useContext } from "react";
import { MovieContext } from "../App";
export default function NavBar() {
  const { movies, setQuery } = useContext(MovieContext);
  // const [input, setInput] = useState("");
  const queryHandler = (event) => {
    setQuery(() => event.target.value);
  };
  const result = movies.length;
  return (
    <div className="nav-bar">
      <img src="/logo.png" alt="imdb clone" className="logo" />
      <input
        type="search"
        name="movie search"
        id="search"
        className="search"
        onChange={queryHandler}
        placeholder="...movie name"
      />
      {result ? (
        <div className="found">final result: {result} movies found</div>
      ) : (
        ""
      )}
    </div>
  );
}
