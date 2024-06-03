import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useSwipeable } from 'react-swipeable';
import meJpg from '../me.jpg';
import vsJpg from '../second.jpg';
import sixJpg from '../nathan.jpg';

// Custom hook to preload images
const usePreloadImages = (imageArray) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);
      setImagesPreloaded(true);
    };

    preloadImages();
  }, [imageArray]);

  return imagesPreloaded;
};

const Thirdsection = ({ onButtonClick }) => {
  const images = [meJpg, vsJpg, sixJpg];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload images
  const imagesPreloaded = usePreloadImages(images);

  // Set up interval to cycle images
  useEffect(() => {
    if (!imagesPreloaded) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [imagesPreloaded, images.length]);

  // Animation for text on load
  const textAnimationProps = useSpring({
    from: { transform: 'translateY(50px)' },
    to: { transform: 'translateY(0px)' },
    config: config.slow,
    reset: !loaded,
    onRest: () => setLoaded(true)
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

  if (!imagesPreloaded) {
    return null;
  }

  return (
    <div {...swipeHandlers} className={`relative flex flex-col justify-center items-center ${isIPhone12 ? 'min-h-screen' : 'h-screen'}`}>
      <div className="absolute w-full h-full">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt="Slideshow"
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
        <animated.h1 style={textAnimationProps} className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white">
          Nick's <span className="text-custom-gold">Personal Training</span>
        </animated.h1>
        <animated.p style={textAnimationProps} className="text-xl md:text-2xl lg:text-3xl text-white">
          1:1 Training and Group Sessions
        </animated.p>
        <animated.p style={textAnimationProps} className="text-lg md:text-xl lg:text-2xl text-white">
          Become better now. Transform your fitness journey with personalized guidance and community support.
        </animated.p>
        <button
          onClick={onButtonClick}
          className="bg-custom-gold text-black py-3 px-8 mt-20 rounded-full font-bold transition duration-300 ease-in-out cursor-pointer text-xl md:text-2xl shadow-xl hover:bg-white hover:text-black mb-4 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
        >
          TRY US OUT
        </button>
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
