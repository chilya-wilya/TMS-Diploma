import React, { useState, FC } from "react";
import { Rating } from "react-simple-star-rating";

type StarRatingProps = {
  initialValue: number;
};

const StarRating: FC<StarRatingProps> = ({ initialValue }) => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
    // other logic
  };

  return (
    <Rating
      onClick={handleRating}
      ratingValue={rating}
      initialValue={initialValue}
      size={16}
      fillColor={"#4C4B5E"}
      transition={true}
    />
  );
};

export default StarRating;
