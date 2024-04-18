import React from 'react';
import logo from '../NPT4.png'; // Ensure the path to your logo is correct

const Footer = () => {
    return (
        <div className="pt-16 bg-black text-custom-gold">
            <div className="w-full border-custom-gold border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto bg-black">
                <div className="container mx-auto py-12">
                    <div className="xl:flex lg:flex md:flex pt-6">
                        <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
                            <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                                <img src={logo} alt="Logo" className="w-12 h-12" id="logo" />
                                <p className="ml-3 font-bold text-xl">Nicks Personal Training</p>
                            </div>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0 text-custom-gold">
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-custom-gold font-bold text-xl mb-6">Community</li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">About Us</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Guidelines and How To</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Quote from the Best</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">How to Start a Blog</button>
                                </li>
                            </ul>
                        </div>
                        <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-custom-gold font-bold text-xl mb-6">Resources</li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Accessibility</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Usability</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Marketplace</button>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <button className="link-button">Design & Dev</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                            <p className="text-gray-800 text-base">2020 The North. All Rights Reserved</p>
                        </div>
                        <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                            <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button className="link-button">Terms of Service</button>
                                </li>
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button className="link-button">Privacy Policy</button>
                                </li>
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button className="link-button">Security</button>
                                </li>
                                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                                    <button className="link-button">Sitemap</button>
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
