import React, { useRef } from 'react';
import Navbar from './Navbar';
import Firstsection from './Firstsection';
import Secondsection from './Secondsection';
// import Thirdsection from './Thirdsection';
// import Fourthsection from './Fourthsection';
import Fifthsection from './Fifthsection';
import Sixthsection from './Sixthsection';
import Seventhsection from './Seventhsection';
import Eightsection from './Eightsection';
import Footer from './Footer';

const Homepage = () => {
  const homeRef = useRef(null);
  const programmesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-black">
    <div className="text-white font-bold rounded flex flex-col">
      <Navbar
        onHomeClick={() => scrollToRef(homeRef)}
        onProgrammesClick={() => scrollToRef(programmesRef)}
        onAboutClick={() => scrollToRef(aboutRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
       <div ref={homeRef} id="home" className="full-width">
            <Eightsection onButtonClick={() => scrollToRef(contactRef)} />
            <Sixthsection onButtonClick={() => scrollToRef(contactRef)} />
       
       
    </div>
      

      
      <div className='bg-black w-full h-2'></div>
    
      <div ref={programmesRef} id="programmes">
        <Secondsection />
      </div>
    

      <div className='bg-black w-full h-2'></div>
      <Fifthsection />
     
      <div className='bg-black w-full h-20'></div>
    
      
      <div ref={contactRef} id="contact">
      <Firstsection />
      </div>
      <div ref={aboutRef} id="about">
        <Seventhsection onButtonClick={() => scrollToRef(contactRef)} />
      </div>
      <Footer
        onHomeClick={() => scrollToRef(homeRef)}
        onProgrammesClick={() => scrollToRef(programmesRef)}
        onAboutClick={() => scrollToRef(aboutRef)}
        onContactClick={() => scrollToRef(contactRef)}
      />
    </div>
    </div>
  );
};

export default Homepage;
