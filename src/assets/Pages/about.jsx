import React from 'react';

const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row items-center p-8">
            {/* Profile Image */}
            <div className="md:w-1/2 mb-6 md:mb-0 relative group">
                <img
                    src="https://i.ibb.co/D46MHSD/4.png" // Replace with your image path
                    alt="Profile"
                    className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-110"
                />
                {/* Fullscreen Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 scale-0 group-hover:scale-100 transition-transform duration-500 flex justify-center items-center">
                    <img
                        src="https://i.ibb.co/D46MHSD/4.png" // Replace with your image path
                        alt="Fullscreen Profile"
                        className="w-3/4 h-auto rounded-lg"
                    />
                </div>
            </div>

            {/* About Me Text */}
            <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-2">About Me</h2>
                <h3 className="text-xl font-semibold mb-4">I'm Radwa Ahamad Shepat</h3>
                <p className="mb-4">
                    Hi! My name is Radwa Ahamad. I am a Web Developer, and I'm very passionate and dedicated to my work.
                </p>
                <ul className="space-y-2">
                    <li><strong>Birthday:</strong> 08.02.2004</li>
                    <li><strong>Location:</strong> Dhaka, Bangladesh</li>
                    <li><strong>Study:</strong> BRAHMANBARIA POLYTECHNIC INSTITUTE</li>
                    <li><strong>Age:</strong> 20+</li>
                    <li><strong>Interests:</strong> Watching movies, Reading</li>
                    <li><strong>Degree:</strong> Diploma (running)</li>
                    <li><strong>Mail:</strong> ahamadshepat@gmail.com</li>
                    <li><strong>Phone:</strong> 01302087137</li>
                </ul>
                <a href="https://drive.google.com/file/d/1esNxnc1w_IJyjoo1cHbi_DaGv8_vj_HP/view" className="btn mt-4 bg-pink-500 text-white px-4 py-2 rounded-md">
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default AboutMe;
