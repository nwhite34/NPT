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

  const scrollToRef = (ref, context) => {
    if (ref.current) {
      const elementRect = ref.current.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      let scrollToPosition;
  
      if (context === 'contact' && window.innerWidth < 768) {
        // For the contact form on mobile, scroll to the center of the screen
        const middlePoint = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        scrollToPosition = middlePoint;
      } else if (context === 'programmes') {
        // For programmes, simply scroll to the element's top minus the header's height
        const headerOffset = 70; // Replace with the actual height of your header
        scrollToPosition = absoluteElementTop - headerOffset;
      } else {
        // Default scroll behavior for other sections
        scrollToPosition = absoluteElementTop;
      }
  
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };
  

  
  return (
    <div className="bg-black">
    <div className="text-white font-bold rounded flex flex-col">
    <Navbar
  onHomeClick={() => scrollToRef(homeRef, 'home')}
  onProgrammesClick={() => scrollToRef(programmesRef, 'programmes')}
  onAboutClick={() => scrollToRef(aboutRef, 'about')}
  onContactClick={() => scrollToRef(contactRef, 'contact')}
/>

       <div ref={homeRef} id="home" className="full-width">
            <Eightsection onButtonClick={() => scrollToRef(contactRef, 'contact')} />
           
    </div>
      
    <Sixthsection onButtonClick={() => scrollToRef(contactRef)} />
      
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
