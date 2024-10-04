import React from 'react';
import whatsapp from './../assets/whatsapp.png'
import { Link } from 'react-router-dom';
import arrow from './../assets/arrow1.png'
const Contactstate:React.FC = () => {
    return (
      <div className="max-w-[1240px] mx-auto lg:mt-[120px] md:mt-[80px] ">
        <div className="lg:w-[1200px] lg:h-[270px] bg-[#0E141E] rounded-[24px] py-[39px] px-[36px] grid grid-cols-1 lg:grid-cols-3 gap-10  ">
          <div className="flex flex-col justify-center  gap-5 border-r-2 border-[#F04B23]">
            <h1 className="text-white bold text-[32px]">Have a Project ?</h1>
            <div className="flex gap-4 ">
              <img className="h-10 w-10" src={whatsapp} alt="whatsapp" />
              <div className="text-white regular text-[20px] font-[400]">
                <p className='uppercase'>GET A free consultation</p>
                <p>+8801521331108</p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between items-center lg:col-span-2">
            <div className="text-white regular w-2/3 text-[16px]">
              We offer various of top-notch services to cater to your needs in
              the digital arena . Need a consultation ? Make an appointment .
              Our experienced consultant will reach you on your available time .
              Make an appointment !
            </div>
            <div>
              <Link
                to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
                target="_blank"
                className="py-4 px-6  bg-[#F04B23] rounded-[16px] flex justify-center items-center opensans font-[600] md:text-[20px] text-white shadow text-[12px]  gap-2"
              >
                Book a Call
                <img className="md:w-8 md:h-8 w-6 h-6" src={arrow} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contactstate;