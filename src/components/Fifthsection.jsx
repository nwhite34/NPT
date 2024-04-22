import React, { useState } from 'react';
import fit1 from '../fit1.png';
import fit2 from '../fit2.png';
import fit3 from '../fit3.png';
import fit4 from '../fit4.png';
import fit5 from '../fit5.png';
import fit6 from '../fit6.png';

// Array of testimonials
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
  <div className="flex justify-center mt-2 mb-2 space-x-1 overflow-visible"> {/* Ensuring overflow is visible and adjusting margins */}
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-8 w-8 ${index < rating ? 'text-custom-gold' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 24 24" // Adjusted view box to ensure the stars are fully contained
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24h-7.19L12 2l-2.81 7.24H2l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const FifthSection = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const handleClick = () => {
    setDisplayCount(prevCount => Math.min(prevCount + 3, testimonials.length));
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center font-sans">THE RESULTS YOU CAN <span className='text-custom-gold'> EXPECT </span></h2>
        <p className="mt-4 text-center">
          The Armoury would be nothing without the men and women that have put their trust in us over the last 10 years...
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Increased gap for larger images */}
          {testimonials.slice(0, displayCount).map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-900 shadow-lg rounded-lg"> {/* Adjusted padding and shadow for more emphasis */}
              <img className="w-64 h-64 object-cover border-4 border-custom-gold rounded-lg " src={testimonial.image} alt="client" /> {/* Further increased image size */}
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-center text-sm italic">
                "{testimonial.text}"
                <cite className="block mt-2 text-xs font-medium">- {testimonial.name}</cite>
              </blockquote>
            </div>
          ))}
        </div>
        {displayCount < testimonials.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleClick}
              className="bg-custom-gold text-black px-5 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
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