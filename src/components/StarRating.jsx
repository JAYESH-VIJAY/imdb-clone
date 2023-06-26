import { useState } from "react";
const outerContainerStyle = {
  display: "flex",
  gap: "1.6rem",
  fontSize: "2.2rem",
  backgroundColor: "rgb(50, 50, 54)",
  justifyContent: "center",
  margin: "1.6rem auto",
  padding: "1.6rem",
  maxWidth: "28rem",
  // border: "2px solid rgb(153, 138, 138,.3)",
  borderRadius: ".8rem",
  // alignItems: "center",
};

const innerStarStyle = {
  cursor: "pointer",
  display: "flex",
};
const textStyle = {
  margin: "0",
  color: "#ffe066",
  fontWeight: "600",
};
const StarRating = ({ maxRating = 5, setterFunction }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  function rateFunction(i) {
    setRating(i + 1);
    setterFunction(i + 1);
  }
  return (
    <div style={outerContainerStyle}>
      <div style={innerStarStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fill={rating >= i + 1}
            onRate={() => rateFunction(i)}
            onMouseE={() => setHoverRating(i + 1)}
            onMouseL={() => setHoverRating(0)}
          />
        ))}
      </div>
      <p style={textStyle}>{hoverRating || rating || ""}</p>
    </div>
  );
};

const starStyle = {
  width: "2rem",
  height: "2rem",
  color: "yellow",
  // display: "block",
};

function Star({ onRate, fill, onMouseE, onMouseL }) {
  return (
    <span
      role="button"
      style={starStyle}
      onMouseEnter={onMouseE}
      onMouseLeave={onMouseL}
      onClick={onRate}
    >
      {!fill ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fcc419"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )}
    </span>
  );
}
export default StarRating;
