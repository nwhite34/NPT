import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../NPT4.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  const [isShrunk, setShrunk] = useState(false);
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black text-blue-500 fixed w-full z-10 font-sans ${isShrunk ? 'p-2' : 'p-4'} `}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-sans text-custom-gold">
          <a href="#home">
            <img src={logo} alt="Logo" className={`cursor-pointer ${isShrunk ? 'h-6 md:h-8' : 'h-8 md:h-10'}`} /> NPT
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setSidenavOpen(!isSidenavOpen)} className="text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="underline-animation text-custom-gold hover:text-white">HOME</a>
          <a href="#programmes" className="underline-animation text-custom-gold hover:text-white">PROGRAMMES</a>
          <a href="#about" className="underline-animation text-custom-gold hover:text-white">ABOUT</a>
          <a href="#contact" className="underline-animation text-custom-gold hover:text-white">CONTACT</a>
        </div>
      </div>
      {isSidenavOpen && (
        <div className="fixed right-0 top-0 w-64 h-full bg-black text-white z-50">
          <div className="flex justify-end">
            <button onClick={() => setSidenavOpen(false)} className="p-6 text-custom-gold hover:text-white">
              Close
            </button>
          </div>
          <ul className="space-y-4 p-4">
            <li><a href="#home" className="underline-animation text-custom-gold hover:text-white">HOME</a></li>
            <li><a href="#about" className="underline-animation text-custom-gold hover:text-white">ABOUT</a></li>
            <li><a href="#programmes" className="underline-animation text-custom-gold hover:text-white">PROGRAMMES</a></li>
            <li><a href="#contact" className="underline-animation text-custom-gold hover:text-white">CONTACT</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
