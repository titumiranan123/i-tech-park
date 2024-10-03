/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import design from './../assets/service/design1.png'
interface Slide {
    nav:string
  title: string;
  content: string;
  image:string
}

const TextNavigationSlider: React.FC = () => {
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
    <div className="flex max-w-[1240px] items-center gap-10 mx-auto mt-[120px] ">
      {/* Left-side Text Navigation */}
      <div className="w-[450px] h-[441px] rounded-[20px] bg-gray-200 p-4 flex flex-col justify-center space-y-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleTextNavigationClick(index)}
            className={`text-lg flex items-center  text-left transition-all duration-300 text-black ${
              index === activeIndex
                ? "ms-1 text-[33px] leading-[38.4px]  bold "
                : "regular text-[30px] "
            } `}
          >
            <span
              className={`${
                index === activeIndex
                  ? "h-[27px] w-[5px] me-1 bg-[#F04B23] "
                  : "regular"
              } `}
            ></span>{" "}
            {slide.nav}
          </button>
        ))}
      </div>

      {/* Main Slider */}
      <div className="lg:w-[750px] w-full ">
        <Swiper
          direction="vertical"
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-[710px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-[730px] flex flex-col    bg-[#F04B23] p-8 rounded-lg shadow-lg">
                <h1 className="text-[48px] leading-[57.6px] text-white text-start font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-[20px] font-[400] regular leading-[30px] text-white text-start">
                  {slide.content}
                </p>
                <img
                  src={slide.image}
                  className="w-[621px] flex justify-center items-center mx-auto mt-4 h-[370px] rounded-[20px]"
                  alt={slide.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextNavigationSlider;
