import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import meJpg from '../me.jpg';
import vsJpg from '../second.jpg';
import sixJpg from '../nathan.jpg';

const Thirdsection = ({ onButtonClick }) => {
  const images = [meJpg, vsJpg, sixJpg];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isIPhone12 = window.innerHeight === 844 && window.innerWidth === 390;
  const divHeight = isIPhone12 ? '120vh' : '100vh';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [images.length]);

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

  return (
    <div {...swipeHandlers} className="relative h-screen flex flex-col justify-center items-center bg-black text-white font-bold" style={{ height: divHeight }}>
      <img src={images[currentIndex]} alt="Slideshow" className="w-full h-full object-cover absolute" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          Nick's <span className="text-custom-gold">Personal Training</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          1:1 Training and Group Sessions
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
          Become better now. Transform your fitness journey with personalized guidance and community support.
        </p>
        <button 
          onClick={onButtonClick} 
          className="bg-custom-gold text-black py-3 px-8 mt-20 rounded-full font-bold transition duration-300 ease-in-out cursor-pointer text-xl md:text-2xl shadow-xl hover:bg-white hover:text-black mb-4 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
        >
          Try us out
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
