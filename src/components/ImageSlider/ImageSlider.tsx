import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

interface ImageSliderProps {
  url: string;
  limit: number;
  page: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ url, limit = 5, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${'1'}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error: any) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1,
    );
  }

  function handleNext() {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1,
    );
  }
  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  console.log(typeof images);

  if (loading) {
    return <div className="loading">Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div className="x">Error Occurred</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem: any, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? 'current-image'
                  : 'current-image hide-current-image'
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
