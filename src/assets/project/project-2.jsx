import React from "react";

const ProjectTow = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-center text-3xl font-extrabold mb-8">Project-2</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Slider 1 */}
                <div className="bg-white shadow-lg rounded-lg p-4 group relative overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/L59PrXN/Screenshot-2025-01-04-154032.png"
                        alt="Slider 1 - Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Description that appears on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                        <p className="text-white text-xl">This the home land page,  <br />whan the site open you will show the landing page</p>
                    </div>
                </div>

                {/* Slider 2 */}
                <div className="bg-white shadow-lg rounded-lg p-4 group relative overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/VvjYd2Y/Screenshot-2025-01-04-203642.png"
                        alt="Slider 2 - Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                        <p className="text-white text-xl">This is the all food section</p>
                    </div>
                </div>

                {/* Slider 3 */}
                <div className="bg-white shadow-lg rounded-lg p-4 group relative overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/2tpMqFz/Screenshot-2025-01-04-203657.png"
                        alt="Slider 3 - Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                        <p className="text-white text-xl">This is the food gallary.</p>
                    </div>
                </div>

                {/* Slider 4 */}
                <div className="bg-white shadow-lg rounded-lg p-4 group relative overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/SPrCK6Q/Screenshot-2025-01-04-203718.png"
                        alt="Slider 4 - Image 1"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                        <p className="text-white text-xl">This is the oder section</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-3xl font-extrabold mb-8">Some story of this project</h1>
                    <p>the</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectTow;
