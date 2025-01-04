import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 mt-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Services</h3>
                    <p className="text-sm">
                    Frontend Developer | React Enthusiast | Problem Solver
                    </p>
                </div>
                
                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Follow Me</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center border-t border-gray-700 pt-4">
                <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
