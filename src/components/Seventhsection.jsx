import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const MissionSection = ({ onButtonClick }) => {
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px)',
    config: { tension: 300, friction: 20 }
  }));

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight / 2;
      const section = document.getElementById('mission-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < offset) {
          setAnimatedProps({ opacity: 1, transform: 'translateY(0px)' });
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setAnimatedProps]);

  return (
    <div id="mission-section" className="bg-black text-white py-12 min-h-[80vh] mt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <animated.div style={animatedProps} className="text-center">
          <h2 className="text-4xl font-extrabold text-custom-gold mb-6 font-sans">OUR MISSION</h2>
          <p className="mb-4">
            We're committed to helping over 1,000 people in Gold Coast live longer, stronger, more confident lives. It's why we offer free trial sessions, and our iron-clad money back guarantee on results (yes, really)
          </p>
          <p className="mb-4">
            If you're desperate to get back into your favourite clothes that have been relegated to the back of the closet, are tired of your work shirts beginning to feel the strain around your stomach, and feel sick of no-longer having the “get-up-and-go” you felt when you were younger? We will guide you to getting that mojo back, to feel confident the next time you're on a beach, making a presentation at work, or running around with your kids
          </p>
          <p className="mb-4">
            Training & addressing your diet with the correct approach adds to your life exponentially, through increasing your energy, decreasing your stress, heightening your mood, boosting long-term health, and equipping you with confidence in your everyday strength and appearance. Which is exactly why we designed The Armoury from the ground up to be the best 1-2-1 & Small Group Personal Training Studio in Milton Keynes. If you'd like to be part of a coaching environment that puts you first? Get in touch
          </p>
          <button 
    onClick={onButtonClick} 
    className="mt-20 bg-custom-gold text-black py-3 px-8 rounded-full font-bold transition duration-300 ease-in-out cursor-pointer text-xl md:text-2xl shadow-xl hover:bg-white hover:text-black mb-4 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
>
    Book your free trial now
</button>
        </animated.div>
      </div>
    </div>
  );
};

export default MissionSection;
