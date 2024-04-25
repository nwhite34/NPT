import React, { useRef } from 'react';
import Navbar from './Navbar';
import Firstsection from './Firstsection';
import Secondsection from './Secondsection';
import Thirdsection from './Thirdsection';
import Fourthsection from './Fourthsection';
import Fifthsection from './Fifthsection';
import Sixthsection from './Sixthsection';  // Ensure correct naming
import Seventhsection from './Seventhsection';
import Footer from './Footer';

const Homepage = () => {
  const fourthSectionRef = useRef(null);

  const scrollToFourthSection = () => {
    if (fourthSectionRef.current) {
      fourthSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="text-white font-bold rounded flex flex-col">
      <Navbar />
      <div id="home" className="full-width"> {/* Ensure full width and correct sectioning */}
      
        <Thirdsection onButtonClick={scrollToFourthSection}/>
      </div>
     < Sixthsection onButtonClick={scrollToFourthSection}/>
      <div className='bg-black w-full h-2'></div>
      <Firstsection onButtonClick={scrollToFourthSection} />
      <div id="programmes">
        <Secondsection />
      </div>
      <div className='bg-black w-full h-2'></div>
  
      <div className='bg-black w-full h-20'></div>
      <Fifthsection />
      <div className='bg-black w-full h-20'></div>
      <div id="contact" ref={fourthSectionRef}>
        <Fourthsection />
      </div>
      <div className='bg-black w-full h-2'></div>
      <div id="about">
        <Seventhsection onButtonClick={scrollToFourthSection}/>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
