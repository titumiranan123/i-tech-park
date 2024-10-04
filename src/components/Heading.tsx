import React from "react";

interface headingProp {
  title: string;
  subtitle: string;
}

const Heading: React.FC<headingProp> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <h1
        className="font-[700] text-[32px] leading-[40px] text-black 
        md:text-[48px] md:leading-[58px] 
        lg:text-[64px] lg:leading-[76.8px]"
      >
        {title}
      </h1>
      <p
        className="font-[400] text-[16px] leading-[24px] text-black 
        md:text-[18px] md:leading-[26px] 
        lg:text-[20px] lg:leading-[30px]"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
