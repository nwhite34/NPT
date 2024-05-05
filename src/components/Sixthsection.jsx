import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const SixthSection = ({ onButtonClick }) => {
  // State to manage whether the animation has been triggered
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Animation configuration using react-spring
  const animationProps = useSpring({
    to: {
      opacity: triggerAnimation ? 1 : 0,
      transform: triggerAnimation ? 'translateY(0)' : 'translateY(50px)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    config: { duration: 500 }
  });

  // Add event listener to window to trigger animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get the window scroll position
      const position = window.scrollY;
      const height = window.innerHeight;
      // Trigger animation when the user scrolls more than half the window height
      if (position > height * 0.5 && !triggerAnimation) {
        setTriggerAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerAnimation]);  // Only re-run the effect if triggerAnimation changes

  return (
    <animated.div style={animationProps} className="bg-black py-12 min-h-[75vh] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="text-center mt-20">
          <h2 className="text-3xl sm:text-4xl uppercase mb-20 text-white font-semibold">
            It's time to put yourself <span className="text-custom-gold">first!</span>
          </h2>
          <p className="text-white font-semibold">
            We specialize in guiding young adults who are ready to elevate their fitness and forge their path to becoming stronger, more resilient individuals.
          </p>
          <p className="mb-4">
            Utilizing our exclusive Strength and Resilience Blueprint, we empower you to transform over the next 6 weeks. Expect dynamic workouts and sustainable nutrition—no fads, no monotony.
          </p>
          <p className="mb-4">
            We understand that fitness should empower your life, not complicate it. Our approach begins with a comprehensive assessment of your current fitness level and sets a realistic, exciting goal for your future self.
          </p>
          <p className="mb-4">
            Imagine overcoming the lethargy that slows down your day, shrinking that stubborn belly fat, and building the kind of body confidence that makes you eager to wear clothes that flaunt your progress, not cover it up.
          </p>
          <p className="mb-6">
            In just 42 days, you'll shift from feeling uncertain about your fitness future to celebrating the strong, confident habits you’ve developed and the noticeable changes in your physique and stamina.
          </p>
          <div className="mt-20">
          <button 
    onClick={onButtonClick} 
    className="bg-custom-gold text-black py-3 px-8 rounded-full font-bold transition duration-300 ease-in-out cursor-pointer text-xl md:text-2xl shadow-xl hover:bg-white hover:text-black mb-4 focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
>
    TRY US OUT
</button>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default SixthSection;
