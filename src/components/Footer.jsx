import React from 'react';
import logo from '../NPT4.png'; // Ensure the path to your logo is correct

const Footer = ({ onHomeClick, onProgrammesClick, onAboutClick, onContactClick }) => {
    return (
        <div className="pt-16 bg-black text-custom-gold">
            <div className="w-full border-custom-gold border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto bg-black">
                <div className="container mx-auto py-12">
                    <div className="xl:flex lg:flex md:flex pt-6">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                                <img src={logo} alt="Logo" className="w-12 h-12" id="logo" />
                                <p className="ml-3 font-bold text-xl font-semibold">Nicks Personal Training</p>
                            </div>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0 text-custom-gold">
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-custom-gold font-bold text-xl mb-6">Resources</li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button onClick={onHomeClick} className="link-button">Home</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button onClick={onProgrammesClick} className="link-button">Programmes</button>
                                </li>
                            </ul>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-custom-gold font-bold text-xl mb-6">Community</li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button onClick={onAboutClick} className="link-button">About</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button onClick={onContactClick} className="link-button">Contact</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                            <p className="text-gray-800 text-base">2024 Nick's Personal Training. All Rights Reserved</p>
                        </div>
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                            <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button onClick={onHomeClick} className="link-button"></button>
                                </li>
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button onClick={onProgrammesClick} className="link-button"></button>
                                </li>
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button onClick={onAboutClick} className="link-button"></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
