/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import AOS from "aos";
import "aos/dist/aos.css";
import design from "./../assets/service/design1.png";

interface Slide {
  nav: string;
  title: string;
  content: string;
  image: string;
}

const TextNavigationSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as needed
  }, []);
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
      title: "E-Commerce",
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
      nav: "Virtual Assistant",
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
    <div className="flex flex-col lg:flex-row max-w-[1240px] items-center gap-10 mx-auto mt-[60px] lg:mt-[120px] lg:px-0 px-4">
      {/* Left-side Text Navigation */}
      <div
        data-aos="fade-up"
        className="w-full lg:w-[450px] h-auto lg:h-[441px] rounded-[20px]  p-4 flex flex-col justify-center space-y-4"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleTextNavigationClick(index)}
            className={`text-base sm:text-lg flex items-center text-left transition-all duration-300 text-black ${
              index === activeIndex
                ? "ms-1 text-[20px] sm:text-[30px] lg:text-[33px] leading-[38.4px] bold"
                : "regular text-[18px] sm:text-[24px] lg:text-[30px]"
            } `}
          >
            <span
              className={`${
                index === activeIndex
                  ? "h-[20px] sm:h-[27px] w-[3px] sm:w-[5px] me-1 bg-[#F04B23]"
                  : "regular"
              } `}
            ></span>{" "}
            {slide.nav}
          </button>
        ))}
      </div>

      {/* Main Slider */}
      <div
        className="w-full lg:w-[750px] lg:h-[710px] rounded-xl overflow-hidden"
        data-aos="fade-left"
      >
        <Swiper
          direction="vertical"
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-[410px]  lg:h-[710px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col bg-[#F04B23] p-4 sm:p-8 rounded-lg shadow-lg">
                <h1 className="text-[24px] sm:text-[36px] lg:text-[48px] leading-[30px] sm:leading-[48px] lg:leading-[57.6px] text-white font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[26px] lg:leading-[30px] text-white">
                  {slide.content}
                </p>
                <img
                  src={slide.image}
                  className="w-full sm:w-[500px] lg:w-[621px] h-[200px] sm:h-[280px] lg:h-[370px] rounded-[20px] mx-auto mt-4"
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
