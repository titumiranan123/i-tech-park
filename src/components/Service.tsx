/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import design1 from "./../assets/service/design1.png";
import design2 from "./../assets/service/design2.png";
import design3 from "./../assets/service/design3.png";
import design4 from "./../assets/service/design4.png";
import web1 from "./../assets/service/web1.png";
import web2 from "./../assets/service/web2.png";
import web3 from "./../assets/service/web3.png";
import seo1 from "./../assets/service/seo1.png";
import seo2 from "./../assets/service/seo2.png";
import seo3 from "./../assets/service/seo3.png";
import social1 from "./../assets/service/social1.png";
import social2 from "./../assets/service/social2.png";
import social3 from "./../assets/service/social3.png";
import video1 from "./../assets/service/video1.png";
import virtual1 from "./../assets/service/virtual1.png";
import business1 from "./../assets/service/business.png";
import Nested from "../page/Nested";


interface Slide {
  nav: string;
  slides: Array<{
    title: string;
    content: string;
    image: string;
  }>;
}

const TextNavigationSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const mainSlide = useRef<any>(null);
  const slides: Slide[] = [
    {
      nav: "Design",
      slides: [
        {
          title: "Graphic Design",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: design1,
        },
        {
          title: "Motion Poster",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: design2,
        },
        {
          title: "UI/UX",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: design3,
        },
        {
          title: "Logo Animation",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: design4,
        },
      ],
    },
    {
      nav: "Web Development",
      slides: [
        {
          title: "Custom Code",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: web1,
        },
        {
          title: "WordPress",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: web2,
        },
        {
          title: "Shopify",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: web3,
        },
      ],
    },
    {
      nav: "Video Editing",
      slides: [
        {
          title: "Video Editing",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: video1,
        },
      ],
    },
    {
      nav: "Search Engine Marketing",
      slides: [
        {
          title: "YouTube SEO",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: seo1,
        },
        {
          title: "SEO",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: seo2,
        },
        {
          title: "Google Ads",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: seo3,
        },
      ],
    },
    {
      nav: "Social Media Marketing",
      slides: [
        {
          title: "Organic Social Media",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: social1,
        },
        {
          title: "Paid Social Media",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: social2,
        },
        {
          title: "Monetization",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: social3,
        },
      ],
    },
    {
      nav: "Business Consultation",
      slides: [
        {
          title: "Business Consultation",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: business1,
        },
      ],
    },
    {
      nav: "Virtual Assistant",
      slides: [
        {
          title: "Virtual Assistant",
          content:
            "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
          image: virtual1,
        },
      ],
    },
  ];

  const handleTextNavigationClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col justify-between lg:flex-row max-w-[1240px] items-center gap-10 md:gap-10 lg:gap-3 mx-auto mt-[60px] lg:mt-[120px] lg:px-0 px-4 ">
      {/* Left-side Text Navigation */}
      <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] ">
        <h1 className="bold lg:text-[64px] text-[28px] leading-[32px] md:text-[40px] lg:leading-[76.8px]">
          Services
        </h1>
        <div className="flex flex-col justify-center lg:space-y-4 md:space-y-3 space-y-1 mt-[24px]">
          {slides.map((slide, index) => (
            <motion.button
              key={index}
              onClick={() => handleTextNavigationClick(index)}
              whileHover={{ scale: 1.05 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
              className={`text-lg flex items-center text-left transition-all duration-300   text-black ${
                index === activeIndex
                  ? "ms-1 text-[24px] md:text-[28px] md:leading-[32px]  lg:text-[32px] lg:leading-[38.4px] bold"
                  : "regular text-[20px] leading-[24px] lg:text-[30px] md:text-[26px] md:leading-[28px]"
              } `}
            >
              <span
                className={`${
                  index === activeIndex
                    ? "h-[20px] md:h-[27px] w-[3px] md:w-[5px] me-1 bg-[#F04B23]"
                    : ""
                } `}
              ></span>
              {slide.nav}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Slider */}
      <div className="w-full  lg:w-[743px] lg:h-[730px] rounded-xl overflow-hidden  ">
        <Swiper
          direction="vertical"
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full lg:h-[730px] "
          ref={mainSlide}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                animate={{ opacity: 1, x: 0 }} // On animation state
                exit={{ opacity: 0, x: -50 }} // On exit state
                transition={{ duration: 0.5 }} // Duration of animation
                className=" bg-[#F04B23] lg:h-[730px] "
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

export default TextNavigationSlider;
