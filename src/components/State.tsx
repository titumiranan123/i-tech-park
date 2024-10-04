import React from 'react';
import project from "./../assets/project.png"
import customer from "./../assets/customer.png"
import award from "./../assets/award.png"
import success from "./../assets/successrate.png"
import CountUp from "react-countup";
const State:React.FC = () => {
    return (
      <div className="max-w-[1240px] mx-auto lg:mt-[120px] md:mt-[80px] ">
        <div className="lg:w-[1200px] lg:h-[270px] bg-[#0E141E] rounded-[24px] py-[39px] px-[101px] grid grid-cols-1 lg:grid-cols-4 gap-10 md:grid-cols-2 ">
          <div className="flex flex-col gap-1 text-white items-center ">
            <img src={project} alt="project" className="w-[64px] h-[64px]" />
            <div className="flex gap-1 text-[56px] text-center leading-[67.2px] bold">
              <CountUp start={0} end={3} />K
            </div>
            <p className="text-[24px] regular leading-[36px]">
              Complete Project
            </p>
          </div>
          <div className="flex flex-col gap-1 text-white items-center ">
            <img src={customer} alt="project" className="w-[64px] h-[64px]" />
            <div className="flex gap-1 text-[56px] text-center leading-[67.2px] bold">
              <CountUp start={0} end={20} />
              K+
            </div>
            <p className="text-[24px] regular leading-[36px]">
              Happy Customers
            </p>
          </div>
          <div className="flex flex-col gap-1 text-white items-center ">
            <img src={award} alt="project" className="w-[64px] h-[64px]" />
            <div className="flex gap-1 text-[56px] text-center leading-[67.2px] bold">
              <CountUp start={0} end={13} />+
            </div>
            <p className="text-[24px] regular leading-[36px]">Award wining</p>
          </div>
          <div className="flex flex-col gap-1 text-white items-center ">
            <img src={success} alt="project" className="w-[64px] h-[64px]" />
            <div className="flex gap-1 text-[56px] text-center leading-[67.2px] bold">
              <CountUp start={0} end={99} />%
            </div>
            <p className="text-[24px] regular leading-[36px]">Success Rate</p>
          </div>
        </div>
      </div>
    );
};

export default State;