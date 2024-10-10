/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Nested: React.FC<{ data: any[] }> = ({ data }) => {
  // State to manage current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle slide change
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="mx-auto relative">
      <SwiperComponent
        direction="vertical"
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        mousewheel={{ forceToAxis: true }}
        modules={[Navigation]}
        style={{ width: "100%", height: "500px" }} // Set a reasonable height
        onSlideChange={handleSlideChange} // Handle slide change
      >
        {data.map((s, idx) => (
          <SwiperSlide
            
            key={idx}
          >
            <div className="flex flex-col lg:flex-row gap-5 w-full h-[420px] p-6 lg:p-8 rounded-lg shadow-lg ">
              <img
                src={s.image}
                className="w-full lg:w-[305px] h-[250px] lg:h-[333px] rounded-[20px] object-cover"
                alt={s.title}
              />
              <div className="mt-4 lg:mt-6">
                <h1 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[47.6px] text-white font-bold">
                  {s.title}
                </h1>
                <p className="text-white mt-1 text-[16px] lg:text-[20px] leading-[24px] font-semibold">
                  Founder & Chief Executive Officer
                </p>
                <p className="text-[14px] lg:text-[16px] mt-6 lg:mt-8 font-normal text-white">
                  {s.content}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div
        className={`swiper-button-prev-custom absolute top-[32%] left-0 transform -translate-y-1/2 z-10 cursor-pointer ${
          currentIndex === 0 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <FaArrowLeft />
      </div>
      <div
        className={`swiper-button-next-custom absolute top-[45%] -right-2 transform -translate-y-1/2 z-10 cursor-pointer ${
          currentIndex === data.length - 1
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Nested;
