import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import user from "./../assets/helping.png";

const Main: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="fixed top-1/2 z-30 right-0 transform -translate-y-1/2"
        data-aos="fade-left"
      >
        <div
          className="lg:w-[325px] lg:h-[90px] md:w-[270px] w-[145px] md:h-[75px] h-[45px] 
                     rounded-[64px] -rotate-90 lg:gap-4 cursor-pointer gap-1 
                     flex flex-row-reverse justify-between items-center 
                     bg-[#F04B23] md:p-2 p-1"
        >
          <img
            src={user}
            className="lg:w-[78px] md:w-[60px] md:h-[60px] lg:h-[78px] 
                       rounded-full rotate-90 w-[40px] h-[40px]"
            alt="user"
            loading="lazy"
            decoding="async"
          />
          <h1
            className="text-white semibold lg:text-[36px] md:text-[30px] 
                       lg:leading-[43.2px] text-[14px] rotate-180 ms-2"
          >
            Need Help ?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
