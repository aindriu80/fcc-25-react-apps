import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
    console.log(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating-container">
      <div className="component-title">Star Rating</div>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? 'active' : 'inactive'}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
