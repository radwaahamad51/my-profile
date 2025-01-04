import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
    FaNodeJs,
} from "react-icons/fa";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

const SkillsAndEducationCard = () => {
    return (
        <div className="bg-black text-white py-12 px-6 rounded-md">
            <h2 className="text-center text-3xl font-extrabold mb-8">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Skill 1 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <FaHtml5 className="mr-2 text-orange-500 group-hover:animate-bounce" />
                            HTML
                        </span>
                        <span className="text-lg font-semibold">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "100%" }}></div>
                    </div>
                </div>

                {/* Skill 2 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <FaCss3Alt className="mr-2 text-blue-500 group-hover:animate-bounce" />
                            CSS
                        </span>
                        <span className="text-lg font-semibold">100%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "100%" }}></div>
                    </div>
                </div>

                {/* Skill 3 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <SiExpress className="mr-2 text-gray-400 group-hover:animate-bounce" />
                            Express.js
                        </span>
                        <span className="text-lg font-semibold">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "80%" }}></div>
                    </div>
                </div>

                {/* Skill 4 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <FaReact className="mr-2 text-cyan-500 group-hover:animate-bounce" />
                            React.js
                        </span>
                        <span className="text-lg font-semibold">90%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "90%" }}></div>
                    </div>
                </div>

                {/* Skill 5 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <FaJsSquare className="mr-2 text-yellow-500 group-hover:animate-bounce" />
                            JavaScript
                        </span>
                        <span className="text-lg font-semibold">60%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "60%" }}></div>
                    </div>
                </div>

                {/* Skill 6 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <FaNodeJs className="mr-2 text-green-500 group-hover:animate-bounce" />
                            Node.js
                        </span>
                        <span className="text-lg font-semibold">80%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "80%" }}></div>
                    </div>
                </div>

                {/* Skill 7 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <SiFirebase className="mr-2 text-orange-400 group-hover:animate-bounce" />
                            Firebase
                        </span>
                        <span className="text-lg font-semibold">70%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "70%" }}></div>
                    </div>
                </div>

                {/* Skill 8 */}
                <div className="group relative">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold flex items-center">
                            <SiMongodb className="mr-2 text-green-400 group-hover:animate-bounce" />
                            MongoDB
                        </span>
                        <span className="text-lg font-semibold">75%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-600 rounded-md mt-2">
                        <div className="h-full bg-pink-600 rounded-md" style={{ width: "75%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsAndEducationCard;
