/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import img from "./../assets/header1.png";
import ReactPlayer from "react-player";
import arrow from "./../assets/arrow1.png";
import Pulsebutton from "./TolkingHeaderButton/PulseButton";
import user from "./../assets/helping.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For animations
import AOS from "aos"; // For scroll animations
import "aos/dist/aos.css"; // AOS animation styles
import arrowg from "./../assets/arrow.png";
interface MousePosition {
  x: number | string;
  y: number | string;
}

const Header: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: "50%",
    y: "50%",
  });

  useEffect(() => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
      duration: 1240, // Animation duration
      easing: "ease-in-out", // Easing for scroll animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleHideImage = (hide: any) => {
    setIsImageVisible(!hide);
  };

  const handleMouseMove = (event: any) => {
    const boundingRect = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: "50%", y: "50%" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative"
    >
      <div className="lg:px-0 px-4 flex justify-center items-center flex-col z-20">
        <div className="relative  mt-[60px] md:mt-[154px] mx-auto max-w-[1240px]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex justify-between lg:flex-nowrap flex-wrap gap-5  relative z-20 "
          >
            <div className="lg:w-1/2">
              <h1
                data-aos="fade-up"
                className="text-black bold  lg:text-[64px]  lg:leading-[76.8px] md:text-[56px] text-[34px] leading-[35px] flex items-center  md:leading-[64px] md:text-left"
              >
                Result Driven <br />
                Digital Agency
              </h1>
              <img
                className="absolute left-[16%] lg:h-[280px] lg:w-[180px] w-[100px] h-[240px] top-40 md:top-32 -z-10"
                src={arrowg}
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="regular text-[14px] leading-[16px] md:text-[18px] lg:text-[20px] text-[#000030] md:leading-[25.6px] regular"
              >
                I-Tech Park BD serves as your Digital Marketing Partner in all
                ways possible. From Social Media Marketing, WordPress
                Customization to ranking your website in search engines(SEO), we
                assist you in your digital presence.
              </p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  delay: 0.5,
                }}
                className="flex  md:justify-normal justify-center gap-2 lg:mt-[59px] mt-[59px] md:mt-[49px]"
              >
                <Link
                  to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
                  target="_blank"
                  className="py-3 px-6 w-[150px] md:w-[230px]  bg-black rounded-[40px] flex justify-center items-center opensans font-[600] md:text-[20px] md:leading-[27.24px] text-white shadow text-[12px] gap-2 z-20"
                >
                  Book a Call
                  <img
                    className="md:w-[36px] md:h-[36px] w-6 h-6"
                    src={arrow}
                    alt=""
                  />
                </Link>
                <Link
                  to={"https://montagemotion.com/work/video-editing"}
                  target="_blank"
                  className="py-4 px-6 border rounded-[40px] md:w-[230px] w-[150px] flex justify-center border-[#000030] items-center opensans font-[400] text-[12px] text-[#000030] md:text-[20px] z-20"
                >
                  See Our Works
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="md:mt-[102px] relative mt-[80px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-[28px] overflow-hidden lg:scale-100 scale-95  bg-white lg:w-[1240px] lg:h-[698px] md:w-[720px]  md:h-[405px] w-[320px] h-[180px] mx-auto relative"
          >
            {isImageVisible && (
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={img}
                  className="lg:w-[1240px] lg:h-[698px] md:w-[720px]  md:h-[405px]"
                  alt="Displayed"
                />
                <div
                  style={{
                    position: "absolute",
                    top: mousePos.y,
                    left: mousePos.x,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="absolute lg:top-[28%] md:top-[30%] top-[35%] md:h-[80px] md:w-[80px] img-fluid md:left-[39%]  lg:left-[44%] left-[44%]"
                >
                  <Pulsebutton onHideImage={handleHideImage} />
                </div>
              </div>
            )}
            {!isImageVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:w-[1240px] lg:h-[698px] md:w-[720px] md:h-[405px] w-[320px] h-[180px] flex justify-center items-center mx-auto"
              >
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=4HQs-yyCrrk"}
                  playing
                  height={"100%"}
                  width={"100%"}
                  controls
                  className="lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-[300px] h-[200px]"
                />
              </motion.div>
            )}
          </motion.div>
          <div
            className="absolute  lg:-right-36 md:-right-[110px] -right-[60px] lg:top-[44%] top-[40%]"
            data-aos={"fade-left"}
          >
            <div className="lg:w-[325px] md:w-[270px] w-[135px] md:h-[75px]  h-[45px] rounded-[64px] -rotate-90  lg:gap-4  cursor-pointer gap-1 flex flex-row-reverse justify-between items-center bg-[#F04B23] md:p-2 p-1">
              <img
                src={user}
                className="lg:w-[78px] md:w-[60px] md:h-[60px] lg:h-[78px] rounded-full rotate-90 w-[40px] h-[40px]"
                alt="user"
              />
              <h1 className="text-white semibold   lg:text-[36px] md:text-[30px]  lg:leading-[43.2px] text-[14px] rotate-180 ms-2 " >
                Need Help ?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
