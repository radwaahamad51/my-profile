import { useState } from "react";
import Navber from "./navber";



import { Outlet } from "react-router-dom";
import Footer from "./Pages/footer";

// import Navber from "./Pages/nav";


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div >
            <div className="">
            <Navber></Navber>
            </div>
            <div className="mx-auto max-w-7xl mt-5 ">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>







        </div>
    )
};
export default Home