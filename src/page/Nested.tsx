/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Nested: React.FC<{ data: any;}> = ({
  data
}) => {
  return (
    <SwiperComponent
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      modules={[Navigation, EffectFade]}
    >
      {data.map((s: any, idx: number) => (
        <SwiperSlide key={idx}>
          <div className="lg:p-[56px] p-3 lg:w-[733px] lg:h-[730px] h-[460px]">
            <h1 className="bold md:text-[48px] text-[32px] lg:leading-[57.6px] leading-[40px] text-white">{s.title}</h1>
            <p className="regular text-white text-[16px] lg:text-[20px] lg:leading-[30px] leading-[20px] mt-6 ">{s.content}</p>
            <img
              className="lg:w-[621px] mt-[46px] rounded-[20px] lg:h-[370px]"
              src={s.image}
              alt={s.title}
            />
          </div>
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Nested;
