import { useState, FC } from "react";
import { Rating } from "react-simple-star-rating";

import { StarRatingProps } from "../../Types";

const StarRating: FC<StarRatingProps> = ({ initialValue }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
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
