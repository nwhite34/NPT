import React from 'react';
import nickJpg from '../nick.jpg'; // Adjust the relative path if needed

const Firstsection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full font-sans text-white"
      style={{
        backgroundImage: `url(${nickJpg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Take Your Fitness To The <span className="text-custom-gold"> Next Level </span> 
      </h1>
      <p className="text-xl text-center mt-4">
     
      </p>
      <button className="mt-8 bg-transparent border border-white py-2 px-4 rounded-full text-white hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
        START HERE
      </button>
    </div>
  );
};

export default Firstsection;
