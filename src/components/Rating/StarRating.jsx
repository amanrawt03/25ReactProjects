import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  function handleOnClick(index) {
    setRating(index);
  }
  function handleOnMove(index) {
    setHover(index);
  }
  function handleOnLeave(){
    setHover(rating)
  }

  return (
    <div>
      {[...Array(10)].map((_, i) => {
        const index = i + 1;
        return (
          <FaStar
            key={index}
            className= {index <= (rating || hover) ? 'active' : 'inactive'}
            onClick={() => handleOnClick(index)}
            onMouseMove={() => handleOnMove(index)}
            onMouseLeave={handleOnLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
