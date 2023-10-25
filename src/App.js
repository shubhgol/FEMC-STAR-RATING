import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rating, setRating] = useState(0);
  const [onHoverRating, setOnHoverRating] = useState(0);
  return (
    <div className="App">
      {[...new Array(5)].map((_, index) => {
        return (
          <span
            key={index + 1}
            onClick={() => setRating(index + 1)}
            className={index + 1 <= (onHoverRating || rating) ? "on" : "off"}
            onMouseEnter={() => setOnHoverRating(index + 1)}
            onMouseLeave={() => setOnHoverRating(rating)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}
