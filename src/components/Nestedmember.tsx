/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Nestedmember: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SwiperComponent
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      modules={[Navigation, EffectFade]}
      className="teamswiperchild"
    >
      {data.map((slide: any, idx: number) => (
        <SwiperSlide key={idx}>
          <div className="p-3 lg:p-14 flex flex-col md:flex-row gap-5 justify-start items-center">
            <img
              src={slide.image}
              className="w-full md:h-[333px] md:w-[305px] lg:w-[305px] lg:h-[333px] rounded-lg object-cover"
              alt={slide.title}
            />
            <div className=" rounded-lg flex justify-center items-center flex-col ">
              {" "}
              {/* Updated styles */}
              <h1 className="text-[24px] lg:text-[36px] text-white font-bold lg:leading-[43.2px] ">
                {slide.name}
              </h1>
              <p className="text-white text-[22px] font-semibold ">
                {slide.designation}
              </p>
              <p className="text-sm lg:text-base mt-3 lg:mt-4 text-white">
                {slide.content}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Nestedmember;
