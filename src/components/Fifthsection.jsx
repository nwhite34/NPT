import React, { useState, useEffect, useRef } from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import fit1 from '../fit1.png';
import fit2 from '../fit2.png';
import fit3 from '../fit3.png';
import fit4 from '../fit4.png';
import fit5 from '../fit5.png';
import fit6 from '../fit6.png';

const testimonials = [
  {
    image: fit1,
    text: "Working from home meant my body felt stiffer, my energy plummeted and my motivation was non-existent. The Armoury has completely turned that around! I've lost weight, gained strength and feel like a healthier, happier version of myself!",
    name: "Sarah Wood",
    rating: 5,
  },
  {
    image: fit2,
    text: "I love our training and never get bored, it helps me balance my busy life as a mum and gives me the time to focus on myself. The best decision I ever made for my health was booking my first session at The Armoury!",
    name: "Kyla Clarke",
    rating: 4,
  },
  {
    image: fit3,
    text: "It's the first time I have seen results in years. They really take time to understand you as an individual both from a training and nutrition perspective!",
    name: "Alex Dovey",
    rating: 5,
  },
  {
    image: fit4,
    text: "Amazing results after joining The Armoury, definitely a life changer with their personal touch and custom plans!",
    name: "Sam Rios",
    rating: 5,
  },
  {
    image: fit5,
    text: "Finding the right fitness routine was tough, but The Armoury's approach made it much easier and more fun than I thought possible!",
    name: "Lily Tran",
    rating: 4,
  },
  {
    image: fit6,
    text: "Professional, attentive, and results-driven. The Armoury helped me reach my fitness goals with ease!",
    name: "Mark Jensen",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-2 mb-2 space-x-1 overflow-visible ">
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-8 w-8 ${index < rating ? 'text-custom-gold' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24h-7.19L12 2l-2.81 7.24H2l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const FifthSection = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isInView, setIsInView] = useState(false);
  const [containerHeight, setContainerHeight] = useState('120vh'); // Initial height set to 120vh
  const sectionRef = useRef(null);

  const trail = useTrail(displayCount, {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate3d(0, 0px, 0)' : 'translate3d(0, 40px, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' }
  });

  const springProps = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translate3d(0, 0px, 0)' : 'translate3d(0, 40px, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 40px, 0)' }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const triggerPoint = window.innerHeight / 2;
        if (top < triggerPoint) {
          setIsInView(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    const newDisplayCount = Math.min(displayCount + 3, testimonials.length);
    setDisplayCount(newDisplayCount);
    setContainerHeight(newDisplayCount > initialDisplayCount ? 'auto' : '120vh'); // Adjust height dynamically
  };

  return (
    <div ref={sectionRef} className="bg-black text-white p-8" style={{ minHeight: containerHeight }}>
      <div className="max-w-7xl mx-auto">
        <animated.h2 style={springProps} className="text-3xl font-semibold text-center font-sans">
          THE RESULTS YOU CAN <span className='text-custom-gold'>EXPECT</span>
        </animated.h2>
        <animated.p style={springProps} className="mt-4 text-center">
          NPT would be nothing without the men and women that have put their trust in us over the last 10 years...
        </animated.p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((props, index) => (
            <animated.div key={index} style={props} className="flex flex-col items-center p-6 bg-gray-900 shadow-lg rounded-lg">
              <img className="w-64 h-64 object-cover border-4 border-custom-gold rounded-lg" src={testimonials[index].image} alt="client" />
              <StarRating rating={testimonials[index].rating} />
              <blockquote className="mt-4 text-center text-sm italic">
                "{testimonials[index].text}"
                <cite className="block mt-2 text-xs font-medium">- {testimonials[index].name}</cite>
              </blockquote>
            </animated.div>
          ))}
        </div>
        {displayCount < testimonials.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleClick}
              className="bg-custom-gold text-black px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 font-bold text-xl md:text-2xl shadow-xl hover:shadow-none focus:outline-none focus:ring-2 focus:ring-custom-gold focus:ring-opacity-50"
            >
              CLICK HERE TO SEE EVEN MORE RESULTS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthSection;
