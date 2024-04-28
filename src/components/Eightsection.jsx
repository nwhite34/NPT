import React, { useState, useEffect } from 'react';
import meJpg from '../me.jpg'; // Adjust the relative path if needed
import vsJpg from '../second.jpg'; // Adjust the relative path if needed
import sixJpg from '../nathan.jpg'; // Adjust the relative path if needed

const Thirdsection = () => {
  // Array of image URLs, including local images
  const images = [meJpg, sixJpg, vsJpg];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change image every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 20000); // 20000 milliseconds = 20 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-black text-white font-bold">
      {/* Display the current image */}
      <img src={images[currentIndex]} alt="Slideshow" className="w-full h-full object-cover absolute" />

      {/* Overlay content with a semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          Nick's 
          <span className="text-custom-gold"> Personal Training</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          1:1 Training and Group Sessions
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
          Become better now. Transform your fitness journey with personalized guidance and community support.
        </p>
      </div>

      {/* Navigation dots */}
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
