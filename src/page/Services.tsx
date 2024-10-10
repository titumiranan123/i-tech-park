/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import design from "./../assets/team-1.png";
import Nested from "./Nested";
interface Slide {
  nav: string;
  slides: Array<{
    title: string;
    content: string;
    image: string;
  }>;
}

const Teammember: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const slides: Slide[] = [
    {
      nav: "Design",
      slides: [
        {
          title: "Design",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
          image: design,
        },
        {
          title: "Design2",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
          image: design,
        },
      ],
    },
    {
      nav: "Web Development",
      slides: [
        {
          title: "E-Comerce",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
          image: design,
        },
        {
          title: "E-Comerce 2",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
          image: design,
        },
      ],
    },
    // {
    //   nav: "Video Editing",
    //   title: "Billie Pierce",
    //   content:
    //     "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
    //   image: design,
    // },
    // {
    //   nav: "Search Engine Marketing",
    //   title: "Graphic Design",
    //   content:
    //     "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
    //   image: design,
    // },
    // {
    //   nav: "Social Media Marketing",
    //   title: "Bernadette Newman",
    //   content:
    //     "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
    //   image: design,
    // },
    // {
    //   nav: "Business Consultation",
    //   title: "Bernadette Newman",
    //   content:
    //     "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
    //   image: design,
    // },
    // {
    //   nav: "Virtual Assistent",
    //   title: "Bernadette Newman",
    //   content:
    //     "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing. WordPress Customization to ranking your website in search engines (SEO) . we assist you in your digital presence.",
    //   image: design,
    // },
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
          <motion.button
            key={index}
            onClick={() => handleTextNavigationClick(index)}
            whileHover={{ scale: 1.05 }} // Hover effect
            whileTap={{ scale: 0.95 }} // Tap effect
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
          </motion.button>
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
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                animate={{ opacity: 1, x: 0 }} // On animation state
                exit={{ opacity: 0, x: -50 }} // On exit state
                transition={{ duration: 0.5 }} // Duration of animation
                className=" bg-[#F04B23] h-[420px] "
              >
                <Nested data={slide.slides} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Teammember;
