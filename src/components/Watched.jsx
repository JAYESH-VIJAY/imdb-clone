import Box from "./Box";
import { useContext, useState } from "react";
import MyMovie from "./MyMovie";
import { MovieContext } from "../App";
export default function Watched() {
  const { movieDetails, userRating, setUserRating } = useContext(MovieContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box
      backgroundColor="rgb(44, 43, 43)"
      width="40%"
      padding="1.6rem 1.6rem 0rem 0rem"
    >
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </p>
      <Box padding="0rem">
        <div className="watch-section">
          <p>movies you watched</p>
        </div>
      </Box>
      {isOpen && (
        <MyMovie
          movieDetails={movieDetails}
          key={MyMovie}
          userRating={userRating}
          setUserRating={setUserRating}
        />
      )}
    </Box>
  );
}
