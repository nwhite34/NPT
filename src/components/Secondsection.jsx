import React from 'react';
import nickJpg from '../image.png'; // Adjust the relative path if needed
import nick1Jpg from '../new1.png'; // Adjust the relative path if needed
import nick2Jpg from '../new2.png'; // Adjust the relative path if needed

const SecondSection = () => {
  return (
    <div className="bg-black py-12 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-6">
          <h2 className="text-base text-custom-gold font-semibold tracking-wide uppercase">What We Do</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-custom-gold sm:text-4xl">
            A better way to spend money
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto pb-10">
            Health is wealth, spend your money on becoming the best you!
          </p>
        </div>
        <div className="mt-1 bg-gray-900 rounded-md p-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
              <img src={nickJpg} alt="A man lifting weights" className="w-full max-w-xs rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-white">Small Group Personal Training</h3>
                <p className="mt-2 text-base text-gray-300">
                  Our Small Group Personal Training is unlike anything you'll have experienced before. In micro training
                  groups of just 6:1, all your workouts are customised for you...
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-lg leading-6 font-medium text-white">One-on-One Attention</h3>
                <p className="mt-2 text-base text-gray-300">
                  The balance of the motivational group environment, 1:1 attention, and your own personal nutrition...
                </p>
              </div>
              <div className="flex justify-center">
                {/* Possible interaction element here */}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-6">
          </div>
          <div className="mt-5 bg-gray-900 rounded-md p-5">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <img src={nick1Jpg} alt="A group training session" className="w-full max-w-xs rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="mb-6">
                  <h3 className="text-lg leading-6 font-medium text-white">Small Group Personal Training</h3>
                  <p className="mt-2 text-base text-gray-300">
                    Our Small Group Personal Training is unlike anything you'll have experienced before. In micro training
                    groups of just 6:1, all your workouts are customised for you...
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg leading-6 font-medium text-white">One-on-One Attention</h3>
                  <p className="mt-2 text-base text-gray-300">
                    The balance of the motivational group environment, 1:1 attention, and your own personal nutrition...
                  </p>
                </div>
                <div className="flex justify-center">
                  {/* Possible interaction element here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-6">
          </div>
          <div className="mt-5 bg-gray-900 rounded-md p-5">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <img src={nick2Jpg} alt="Personal trainer assisting client" className="w-full max-w-xs rounded-lg shadow-lg" />
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="mb-6">
                  <h3 className="text-lg leading-6 font-medium text-white">Small Group Personal Training</h3>
                  <p className="mt-2 text-base text-gray-300">
                    Our Small Group Personal Training is unlike anything you'll have experienced before. In micro training
                    groups of just 6:1, all your workouts are customised for you...
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg leading-6 font-medium text-white">One-on-One Attention</h3>
                  <p className="mt-2 text-base text-gray-300">
                    The balance of the motivational group environment, 1:1 attention, and your own personal nutrition...
                  </p>
                </div>
                <div className="flex justify-center">
                  {/* Possible interaction element here */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default SecondSection;
