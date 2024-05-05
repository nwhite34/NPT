import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import meJpg from '../me.jpg';
import vsJpg from '../second.jpg';
import sixJpg from '../nathan.jpg';

const Thirdsection = ({ onButtonClick }) => {
  const images = [meJpg, vsJpg, sixJpg];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Set up interval to cycle images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Animation for text and button on load
  const textAnimationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.slow,
    reset: !loaded,
    onRest: () => setLoaded(true)
  });

  const buttonAnimationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.default,
    reset: !loaded,
  });

  // Check for specific device height/width
  const isIPhone12 = window.innerHeight === 844 && window.innerWidth === 390;

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div {...swipeHandlers} className={`relative flex flex-col justify-center items-center bg-black text-white font-bold ${isIPhone12 ? 'min-h-screen' : 'h-screen'}`}>
      <img 
        src={images[currentIndex]} 
        alt="Slideshow" 
        className="absolute w-full h-full object-cover"
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
        <animated.h1 style={textAnimationProps} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          Nick's <span className="text-custom-gold">Personal Training</span>
        </animated.h1>
        <animated.p style={textAnimationProps} className="text-xl md:text-2xl lg:text-3xl">
          1:1 Training and Group Sessions
        </animated.p>
        <animated.p style={textAnimationProps} className="text-lg md:text-xl lg:text-2xl">
          Become better now. Transform your fitness journey with personalized guidance and community support.
        </animated.p>
        <animated.button 
          onClick={onButtonClick} 
          style={buttonAnimationProps}
          className="bg-custom-gold text-black py-3 px-8 mt-20 rounded-full font-bold transition duration-300 ease-in-out cursor-pointer text-xl md:text-2xl shadow-xl hover:bg-white hover:text-black mb-4 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
        >
          TRY US OUT
        </animated.button>
      </div>
      <div className="absolute bottom-5 flex">
        {images.map((_, idx) => (
          <span key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`cursor-pointer block rounded-full w-3 h-3 mx-1 ${
                  currentIndex === idx ? 'bg-white' : 'bg-gray-500'
                }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Thirdsection;
