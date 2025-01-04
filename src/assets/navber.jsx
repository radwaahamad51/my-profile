import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <div className="relative">
            <div className="navbar bg-base-100    ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/project'}>Project-1</Link></li>
                            <li><Link to={"/project2"}>Project-2</Link></li>
                            <li><Link>Project-3</Link></li>
                            <li><Link>Project-4</Link></li>
                            <li>
                                <a><Link to={"/"}>home</Link></a>
                               
                            </li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-pink-400  " >Radwa Shepat</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li>
                            <details>
                                <summary>Project View</summary>
                                <ul className="p-2">
                                    <li><Link to={'/project'}>Project-1</Link></li>
                                    <li><Link to={"/project2"}>Project-2</Link></li>
                                    <li><Link>Project-3</Link></li>
                                    <li><Link>Project-4</Link></li>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="https://drive.google.com/file/d/1esNxnc1w_IJyjoo1cHbi_DaGv8_vj_HP/view" className="btn mt-4 bg-pink-500 text-white px-4 py-2 rounded-md">  Download CV</a>
                </div>
            </div>
        </div>
    )
};
export default Navber;