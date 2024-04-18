import React, { useState } from 'react';

// Array of testimonials
const testimonials = [
  {
    image: "/path_to_dave_image.jpg",
    text: "Working from home meant my body felt stiffer, my energy plummeted and my motivation was non-existent. The Armoury has completely turned that around! I've lost weight, gained strength and feel like a healthier, happier version of myself!",
    name: "Dave Wood",
    rating: 5,
  },
  {
    image: "/path_to_kyla_image.jpg",
    text: "I love our training and never get bored, it helps me balance my busy life as a mum and gives me the time to focus on myself. The best decision I ever made for my health was booking my first session at The Armoury!",
    name: "Kyla Clarke",
    rating: 4,
  },
  {
    image: "/path_to_alex_image.jpg",
    text: "It's the first time I have seen results in years. They really take time to understand you as an individual both from a training and nutrition perspective!",
    name: "Alex Dovey",
    rating: 5,
  },
  {
    image: "/path_to_sam_image.jpg",
    text: "Amazing results after joining The Armoury, definitely a life changer with their personal touch and custom plans!",
    name: "Sam Rios",
    rating: 5,
  },
  {
    image: "/path_to_lily_image.jpg",
    text: "Finding the right fitness routine was tough, but The Armoury's approach made it much easier and more fun than I thought possible!",
    name: "Lily Tran",
    rating: 4,
  },
  {
    image: "/path_to_mark_image.jpg",
    text: "Professional, attentive, and results-driven. The Armoury helped me reach my fitness goals with ease!",
    name: "Mark Jensen",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-1">
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-custom-gold' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.396-.956 1.705-.956 2.101 0l1.868 4.516c.177.428.51.725.892.79l4.998.726c.993.144 1.39 1.367.671 2.065l-3.616 3.523c-.334.325-.487.794-.408 1.255l.853 4.973c.215 1.256-1.106 2.212-2.248 1.62l-4.465-2.348c-.426-.224-.938-.224-1.364 0l-4.465 2.348c-1.142.592-2.463-.364-2.248-1.62l.853-4.973c.079-.461-.074-.93-.408-1.255L.689 10.024c-.719-.698-.322-1.921.671-2.065l4.998-.726c.382-.065.715-.362.892-.79l1.868-4.516z" />
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">THE RESULTS YOU CAN EXPECT</h2>
        <p className="mt-4 text-center">
          The Armoury would be nothing without the men and women that have put their trust in us over the last 10 years...
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, displayCount).map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-gray-900 shadow-md rounded-lg">
              <img className="w-32 h-32 object-cover rounded-full border-2 border-custom-gold" src={testimonial.image} alt="client" />
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
              className="bg-custom-gold text-black px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-300"
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
