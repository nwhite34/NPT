import React from 'react';
import secondJpg from '../getty1.jpg';

const Fourthsection = () => {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background Image */}
            <img src={secondJpg} alt="Fitness" className="absolute inset-0 w-full h-full object-cover"/>

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-center w-full md:w-1/2 ml-auto p-4">
                {/* Right-Aligned Column Container */}
                <div className="max-w-full md:max-w-xl bg-black bg-opacity-80 rounded-lg p-4">
                    {/* Text Content */}
                    <div className="text-left mb-6">
                        {/* Subheading */}
                        <h2 className="text-lg md:text-xl text-white mb-2">1-2-1 & SMALL GROUP</h2>
                        {/* Header Text */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-custom-gold">PERSONAL TRAINING WITH NPT</h1>
                        {/* Paragraph Text */}
                        <p className="text-sm md:text-base text-white">
                            The number one Personal Training Studio in NPT helping men and women to get in the best shape of their lives with our infamous 6 Week Transformation Challenge (without living on a treadmill or surviving on salads)
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="bg-black bg-opacity-80 rounded-lg p-4 md:p-6 text-custom-gold">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="first-name" className="block text-sm font-bold mb-2">First Name *</label>
                                <input id="first-name" type="text" placeholder="First Name" className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="last-name" className="block text-sm font-bold mb-2">Last Name *</label>
                                <input id="last-name" type="text" placeholder="Last Name" className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone-number" className="block text-sm font-bold mb-2">Phone Number *</label>
                                <input id="phone-number" type="text" placeholder="Phone" className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-bold mb-2">Email *</label>
                                <input id="email" type="email" placeholder="Email" className="w-full py-2 px-3 rounded border shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <button type="button" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                CLAIM YOUR FREE TRIAL TRAINING SESSION
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fourthsection;
