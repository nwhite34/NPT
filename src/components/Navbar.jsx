import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './Navbar.css';
import logo from '../NPT4.png';

const Navbar = ({ onHomeClick, onProgrammesClick, onAboutClick, onContactClick }) => {
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

  const navbarStyle = useSpring({
    paddingTop: isShrunk ? '1rem' : '2rem', // Adjust top padding
    paddingBottom: isShrunk ? '2rem' : '2rem', // Adjust bottom padding only when shrunk
  });

  return (
    <animated.nav style={navbarStyle} className={`bg-black text-blue-500 fixed w-full z-10 font-sans ${isShrunk ? 'navbar-shrunk' : 'navbar-expanded'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-custom-gold">
            <button onClick={onHomeClick}>
              <img src={logo} alt="Logo" className={`cursor-pointer ${isShrunk ? 'h-10 md:h-10 pr-4' : 'h-10 md:h-10 pr-4'}`} /> 
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setSidenavOpen(!isSidenavOpen)} className="text-custom-gold">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <button onClick={onHomeClick} className="underline-animation text-custom-gold hover:text-white">HOME</button>
            <button onClick={onProgrammesClick} className="underline-animation text-custom-gold hover:text-white">PROGRAMMES</button>
            <button onClick={onContactClick} className="underline-animation text-custom-gold hover:text-white">CONTACT</button>
            <button onClick={onAboutClick} className="underline-animation text-custom-gold hover:text-white">ABOUT</button>
          
          </div>
        </div>
      </div>
      {isSidenavOpen && (
        <div className="fixed right-0 top-0 w-64 h-full bg-black text-white z-50">
          <div className="flex justify-end">
            <button onClick={() => setSidenavOpen(false)} className="pt-10 pr-5 text-custom-gold hover:text-white">
              Close
            </button>
          </div>
          <ul className="space-y-4 p-4">
            <li><button onClick={onHomeClick} className="underline-animation text-custom-gold hover:text-white">HOME</button></li>
            <li><button onClick={onProgrammesClick} className="underline-animation text-custom-gold hover:text-white">PROGRAMMES</button></li>
            <li><button onClick={onContactClick} className="underline-animation text-custom-gold hover:text-white">CONTACT</button></li>
            <li><button onClick={onAboutClick} className="underline-animation text-custom-gold hover:text-white">ABOUT</button></li>
            
           
          </ul>
        </div>
      )}
    </animated.nav>
  );
};

export default Navbar;
