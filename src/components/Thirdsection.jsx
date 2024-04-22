import React, { useState, useEffect } from 'react';
import meJpg from '../me.jpg'; // Adjust the relative path if needed
import vsJpg from '../second.jpg'; // Adjust the relative path if needed
import sixJpg from '../nathan.jpg'; // Adjust the relative path if needed



const Thirdsection= ({ onButtonClick }) => {
    // Array of image URLs from Unsplash, plus the local image
    const images = [
        
        meJpg,
        sixJpg,
        vsJpg,
    ];

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

    // Function to go to the next image
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="bg-black hover:bg-blue-700 text-white font-bold rounded flex flex-col justify-center items-center h-screen relative">
            {/* Display the current image */}
            <img src={images[currentIndex]} alt="Slideshow" className="w-full h-full object-cover" />

            {/* Caption or any additional content */}
            <div className="absolute text-4xl">
            Unleash Your Potential:


                <button onClick={onButtonClick} className="mt-1/2 m-auto ml-2 mr-2 bg-transparent border border-custom-gold py-2 px-2 rounded-full text-custom-gold hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                Start
            </button>
            Your Transformation Today!
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-5 flex">
                {images.map((_, idx) => (
                    <span key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`cursor-pointer block rounded-full w-3 h-3 mx-1 mb-2 ${
                            currentIndex === idx ? 'bg-white' : 'bg-gray-500'
                          }`}></span>
                ))}
            </div>

            {/* Navigation arrows */}
            <button onClick={prevSlide} className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                &#8592;
            </button>
            <button onClick={nextSlide} className="absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-4xl">
                &#8594;
            </button>
        </div>
    );
};

export default Thirdsection;
