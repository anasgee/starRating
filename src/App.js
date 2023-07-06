
import "./index.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="App">
      {[...Array(5)].map((currElement, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="star"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
              className="star"
              color={ratingValue <= (hover||rating) ? "#ffc107" : "#e4e5e9"}
              size={100}
            />
          </label>
        );
      })}
    </div>
  );
}

export default App;
