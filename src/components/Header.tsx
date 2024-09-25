/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import img from "./../assets/header1.png";

import ReactPlayer from "react-player";
import arrow from "./../assets/arrow1.png";

import Pulsebutton from "./TolkingHeaderButton/PulseButton";
import { Link } from "react-router-dom";
interface MousePosition {
  x: number | string;
  y: number | string;
}
const Header: React.FC = () => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleHideImage = (hide: any) => {
    setIsImageVisible(!hide);
  };
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: "50%",
    y: "50%",
  });

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
    <div className="  relative">
      <div className="lg:px-0 px-4  flex justify-center items-center flex-col z-20 ">
        <div className="relative mt-[120px] md:mt-[174px] mx-auto  max-w-[1240px]">
          <div className="flex justify-between lg:flex-nowrap flex-wrap gap-5 items-center z-20 lg:px-4 px-0">
            <div className="w-1/2">
              <h1 className="text-black headingFont font-bold md:font-semibold lg:text-[56px] md:text-[48px] text-[24px] leading-[35px]  flex  items-center lg:leading-[67px] md:leading-[64px] md:text-left    ">
                Result Driven <br />
                Digital Agency
              </h1>
            </div>
            <div className="w-1/2">
              <p className="opensans lg:mt-[34px] md:mt-5 font-[600] text-[14px] leading-[16px] md:text-[16px] lg:text-[20px] text-[#080808] md:leading-[25.6px] px-2 ">
                I-Tech Park BD serves as  your Digital Marketing Partner in all way possible. From Social Media Marketing, WordPress Customization to ranking your webiste in search engines(SEO), we assist you in your digital presence.
              </p>
              <div className="flex flex-wrap md:justify-normal justify-center gap-2  lg:mt-[59px] mt-[59px] md:mt-[49px]">
                <Link
                  to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
                  target="_blank"
                  className="py-4 px-6 border bg-black rounded-[16px] flex justify-center items-center opensans font-[700] md:text-[20px] text-white shadow text-[12px]  gap-2"
                >
                  Book a Call
                  <img className="md:w-8 md:h-8 w-6 h-6" src={arrow} alt="" />
                </Link>
                <Link
                  to={"https://montagemotion.com/work/video-editing"}
                  target="_blank"
                  className="py-4 px-6 border  rounded-[16px] flex justify-center items-center opensans font-[700] text-[12px] text-black md:text-[20px]"
                >
                  See Our Works
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[102px]  mt-[80px] ">
          <div className=" rounded-[28px] overflow-hidden   lg:scale-100 scale-95   z-40 bg-black lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px] mx-auto  relative ">
            {isImageVisible && (
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={img}
                  className="lg:w-[993px] lg:h-[562px]"
                  alt="Displayed"
                />
                <div
                  style={{
                    position: "absolute",
                    top: mousePos.y,
                    left: mousePos.x,
                    transform: "translate(-50%, -50%)", // Center the component at the mouse position
                  }}
                  className="absolute  lg:top-[38%] md:top-[30%] top-[35%] md:h-[80px] md:w-[80px]  img-fluid  md:left-[39%] lg:left-[44%] left-[44%]"
                >
                  <Pulsebutton onHideImage={handleHideImage} />
                </div>
              </div>
            )}

            {!isImageVisible && (
              <div className=" lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px] flex justify-center items-center mx-auto  ">
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=4HQs-yyCrrk"}
                  playing
                  height={"100%"}
                  width={"100%"}
                  controls
                  className=" lg:w-[993px] lg:h-[562px] md:w-[720px] md:h-[400px] w-full h-[200px]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white absolute -bottom-[40px] lg:h-[325px] md:h-[220px] h-[135px] left-0 w-full  "></div>

    </div>
  );
};

export default Header;
