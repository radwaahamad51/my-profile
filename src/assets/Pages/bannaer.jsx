import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const UniqueBannerSection = () => {
    return (
        <section id="banner" className="rounded-s-2xl relative overflow-hidden py-24 text-center mt-16 mb-4 text-white">
            {/* Gradient Background */}
            <div className=" rounded-s-2xl absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-70"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-shadow-lg animate__animated animate__fadeIn animate__delay-1s">
                    Connect with me on Social Media!
                </h2>
                <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-2s">
                    Follow us for the latest updates and exciting news.
                </p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-8">
                    <a
                        href="https://www.facebook.com/alon.radwa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl hover:text-blue-800 transform transition duration-300 hover:scale-125 hover:rotate-12"
                    >
                        <FaFacebook />
                    </a>
                    
                    <a
                        href="https://www.instagram.com/radwaahamad/profilecard/?igsh=enZkM3RtamhuZGc4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl hover:text-pink-600 transform transition duration-300 hover:scale-125 hover:rotate-12"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/radwa-ahamad-215726337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl hover:text-blue-700 transform transition duration-300 hover:scale-125 hover:rotate-12"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default UniqueBannerSection;
