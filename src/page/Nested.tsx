/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Nested: React.FC<{ data: any;}> = React.memo(({
  data
}) => {
  return (
    <SwiperComponent
      effect="fade"
      fadeEffect={{ crossFade: true }}
      navigation
      modules={[Navigation, EffectFade]}
      className="serviceImg"
    >
      {data.map((s: any, idx: number) => (
        <SwiperSlide key={idx}>
      
            <img
            loading="lazy"
              className="lg:w-[621px] mx-auto mt-[46px] rounded-[20px] lg:h-[370px]"
              src={s.image}
              alt={s.title}
            />
    
        </SwiperSlide>
      ))}
    </SwiperComponent>
  );
});

export default Nested;
