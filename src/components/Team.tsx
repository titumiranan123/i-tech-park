/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import design from "./../assets/team-1.png";

interface Slide {
  nav: string;
  title: string;
  content: string;
  image: string;
}

const Teammember: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const slides: Slide[] = [
    {
      nav: "Design",
      title: "Design",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Web Development",
      title: "E-Comerce",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Video Editing",
      title: "Billie Pierce",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Search Engine Marketing",
      title: "Graphic Design",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Social Media Marketing",
      title: "Bernadette Newman",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Business Consultation",
      title: "Bernadette Newman",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
    {
      nav: "Virtual Assistent",
      title: "Bernadette Newman",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
      image: design,
    },
  ];

  const handleTextNavigationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col justify-between lg:flex-row max-w-[1240px] items-center gap-10 mx-auto mt-[60px] lg:mt-[120px] lg:px-0 px-4">
      {/* Left-side Text Navigation */}
      <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] p-4 flex flex-col justify-center space-y-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleTextNavigationClick(index)}
            className={`text-lg flex items-center text-left transition-all duration-300 text-black ${
              index === activeIndex
                ? "ms-1 text-[24px] lg:text-[32px] leading-[38.4px] font-bold"
                : "regular text-[20px] lg:text-[30px]"
            } `}
          >
            <span
              className={`${
                index === activeIndex
                  ? "h-[20px] lg:h-[27px] w-[3px] lg:w-[5px] me-1 bg-[#F04B23]"
                  : ""
              } `}
            ></span>
            {slide.nav}
          </button>
        ))}
      </div>

      {/* Main Slider */}
      <div className="w-full lg:w-[780px] lg:h-[440px] rounded-xl overflow-hidden">
        <Swiper
          direction="vertical"
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-[530px] lg:h-[415px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row gap-5 bg-[#F04B23] p-6 lg:p-8 rounded-lg shadow-lg">
                <img
                  src={slide.image}
                  className="w-full lg:w-[305px] h-[250px] lg:h-[333px] rounded-[20px] object-cover"
                  alt={slide.title}
                />
                <div className="mt-4 lg:mt-6">
                  <h1 className="text-[24px] lg:text-[32px] leading-[32px] lg:leading-[47.6px] text-white font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-white mt-1 text-[16px] lg:text-[20px] leading-3 font-semibold">
                    Founder & Chief Executive Officer
                  </p>
                  <p className="text-[14px] lg:text-[16px] mt-6 lg:mt-8 font-normal text-white">
                    {slide.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teammember;
