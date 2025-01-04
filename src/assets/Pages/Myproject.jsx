import React from "react";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div className="py-8">
            <h2 className="text-center text-3xl font-extrabold mb-10">Project</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {/* Card 1 */}
                <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                    <img
                        src="https://i.ibb.co.com/cJsmGMj/Screenshot-2025-01-04-153306.png"
                        alt="Ice Cream Sundae"
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-gray-800">Project-1</h3>
                            <p className="text-sm text-gray-600">Restaurant Management</p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                               <Link to={'/project'}>View More</Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                    <img
                        src="https://i.ibb.co.com/L59PrXN/Screenshot-2025-01-04-154032.png"
                        alt="Fluffy Pancakes"
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-gray-800">Project-2</h3>
                            <p className="text-sm text-gray-600">A Sports
                            Equipment Store</p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                <Link to={'/project2'}>View more</Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                    <img
                        src="https://i.ibb.co.com/GJ41Scy/Screenshot-2025-01-04-154127.png"
                        alt="Sushi Platter"
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-gray-800">Project-3</h3>
                            <p className="text-sm text-gray-600">Career Counseling</p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                View
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="relative group overflow-hidden rounded-xl cursor-pointer">
                    <img
                        src="https://i.ibb.co.com/3mh6h5q/Screenshot-2025-01-04-154245.png"
                        alt="Spicy Tacos"
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                            <h3 className="text-lg font-bold text-gray-800">Project-4</h3>
                            <p className="text-sm text-gray-600">Players Selection  </p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                               <Link to={'/project4'}>View More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
