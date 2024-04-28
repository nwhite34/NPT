import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import nickJpg from '../image.jpg';
import nick1Jpg from '../new1.png';
import nick2Jpg from '../new2.png';

const SecondSection = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      const position = window.scrollY;
      const triggerPoint = window.innerHeight * 1.2;

      if (position > triggerPoint && !triggerAnimation) {
        setTriggerAnimation(true);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerAnimation]);

  const animationProps = useSpring({
    opacity: triggerAnimation ? 1 : 0,
    transform: triggerAnimation ? 'translateY(0)' : 'translateY(100px)',
    from: {
      opacity: 0,
      transform: 'translateY(100px)',
    },
    config: { duration: 500 },
  });

  return (
    <animated.div
      style={{
        ...animationProps,
        backgroundColor: 'black',
        color: 'white',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        minHeight: isLargeScreen ? '130vh' : '150vh',
        fontWeight: 'bold'
      }}
      className="text-white font-semibold"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-6">
          <h2 className="text-3xl font-semibold text-center font-sans">
            OUR <span className='text-custom-gold'>PROGRAMMES</span>
          </h2>
        </div>
        <div className="mt-1 bg-gray-900 rounded-md p-5 mb-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0 flex items-center">
              <img src={nickJpg} alt="A man lifting weights" className="w-full max-w-md rounded-lg shadow-lg border-4 border-custom-gold" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">1:1 Training</h3>
                <p className="mt-2 text-base text-gray-300">
                  Enhance your fitness journey with expert guidance on form and technique.
                  As your personal trainer, we offer personalized sessions tailored to improve your
                  movement efficiency and prevent injuries. By focusing on the right techniques, we
                  ensure that every exercise is performed safely and effectively.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">Optimize Recovery and Performance</h3>
                <p className="mt-2 text-base text-gray-300">
                  Whether you're recovering from an injury or aiming to optimize your performance,
                  rehabilitation work is crucial. Let's work together to tailor a recovery plan that aligns with
                  your health and fitness goals, ensuring you can return to peak condition safely and sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 bg-gray-900 rounded-md p-5 mb-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0 flex items-center">
              <img src={nick1Jpg} alt="Nutrition guidance" className="w-full max-w-md rounded-lg shadow-lg border-4 border-custom-gold" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">1:1 Nutrition Guidance</h3>
                <p className="mt-2 text-base text-gray-300">
                  Unlock your full potential with tailored nutrition guidance! At NPT,
                  we're here not just to motivate your workouts, but to empower your eating habits.
                  Let's transform your body and mind with a diet that complements your fitness goals.
                  Together, we'll ensure that you're nourished and ready to conquer any challenge!
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">Personalized Nutrition Plans</h3>
                <p className="mt-2 text-base text-gray-300">
                  Understanding that every body is unique,
                  we offer customized dietary strategies that align with
                  your specific health and fitness objectives. Let's optimize
                  your performance and recovery by integrating wholesome, balanced
                  meals into your daily routine. Start fueling your success today!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 bg-gray-900 rounded-md p-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0 flex items-center">
              <img src={nick2Jpg} alt="Group Personal Training" className="w-full max-w-md rounded-lg shadow-lg border-4 border-custom-gold" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">Group Personal Training</h3>
                <p className="mt-2 text-base text-gray-300">
                  Our Small Group Personal Training is unlike anything you'll have experienced before.
                  In micro training groups of just 6:1, all your workouts are customised for you...
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-custom-gold">Socialize with Other Like-minded People</h3>
                <p className="mt-2 text-base text-gray-300">
                  Group training goes beyond just exercise; it's a chance to connect and meet new friends!
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </animated.div>
  );
};

export default SecondSection;
