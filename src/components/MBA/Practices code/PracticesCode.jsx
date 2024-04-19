    import React, { useState } from 'react';
    import './PracticesCode.css';

    export const PracticesCode = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
  
        const slideItems = [
          <div key={1}>Slide 1</div>,
          <div key={2}>Slide 2</div>,
          <div key={3}>Slide 3</div>,
        ];
      
        const nextSlide = () => {
          setCurrentSlide(currentSlide === slideItems.length - 1 ? 0 : currentSlide + 1);
        };
      
        const prevSlide = () => {
          setCurrentSlide(currentSlide === 0 ? slideItems.length - 1 : currentSlide - 1);
        };
      
        const handleDotClick = (index) => {
          setCurrentSlide(index);
        };
      
        return (
          <div className="slider-container">
            <button className="prev" onClick={prevSlide}>Prev</button>
            <button className="next" onClick={nextSlide}>Next</button>
      
            <div className="slides">
              {slideItems.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  {slide}
                </div>
              ))}
            </div>
      
            <div className="dots">
              {slideItems.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        );
      };

