import React from 'react';

const SixthSection = ({ onButtonClick }) => {
  return (
    <div className="bg-black py-12">
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
          <div className="mt-6">
            <button onClick={onButtonClick} className="text-black bg-custom-gold hover:bg-gold-600 font-bold py-2 px-4 rounded mt-20">
              Try us out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
