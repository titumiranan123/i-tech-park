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
  section: string; // Add section to identify the section each slide belongs to
  title: string;
  content: string;
  image: string;
}

const TextNavigationSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const sections = [
    "Design",
    "Web Development",
    "Video Editing",
    "Search Engine Marketing",
    "Social Media Marketing",
    "Business Consultation",
    "Virtual Assistant",
  ];
  const slides: Slide[] = [
    {
      section: "Design",
      title: "Graphic Design",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: design1,
    },
    {
      section: "Design",
      title: "Motion Poster",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: design2,
    },
    {
      section: "Design",
      title: "UI/UX",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: design3,
    },
    {
      section: "Design",
      title: "Logo Animation",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: design4,
    },

    {
      section: "Web Development",
      title: "Custom Code",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: web1,
    },
    {
      section: "Web Development",
      title: "WordPress",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: web2,
    },
    {
      section: "Web Development",
      title: "Shopify",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: web3,
    },

    {
      section: "Video Editing",
      title: "Video Editing",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: video1,
    },

    {
      section: "Search Engine Marketing",
      title: "YouTube SEO",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: seo1,
    },
    {
      section: "Search Engine Marketing",
      title: "SEO",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: seo2,
    },
    {
      section: "Search Engine Marketing",
      title: "Google Ads",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: seo3,
    },

    {
      section: "Social Media Marketing",
      title: "Organic Social Media",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: social1,
    },
    {
      section: "Social Media Marketing",
      title: "Paid Social Media",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: social2,
    },
    {
      section: "Social Media Marketing",
      title: "Monetization",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: social3,
    },

    {
      section: "Business Consultation",
      title: "Business Consultation",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: business1,
    },

    {
      section: "Virtual Assistant",
      title: "Virtual Assistant",
      content:
        "I-Tech Park BD serves as your Digital Marketing Partner in all way possible. From Social Media Marketing to WordPress Customization, and ranking your website in search engines (SEO), we assist you in your digital presence.",
      image: virtual1,
    },
  ];

  // Function to handle text-based navigation clicks
  const handleTextNavigationClick = (sectionIndex: number) => {
    // Get the index of the first slide of that section
    const sectionFirstIndex = slides.findIndex(
      (slide) => slide.section === sections[sectionIndex]
    );
    if (sectionFirstIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(sectionFirstIndex);
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
          {sections.map((section, index) => (
            <motion.button
              key={index}
              onClick={() => handleTextNavigationClick(index)}
              whileHover={{ scale: 1.05 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
              className={`text-lg flex items-center text-left transition-all duration-300 text-black ${
                slides[activeIndex].section === section
                  ? "ms-1 text-[24px] md:text-[28px] md:leading-[32px] lg:text-[32px] lg:leading-[38.4px] bold"
                  : "regular text-[20px] leading-[24px] lg:text-[30px] md:text-[26px] md:leading-[28px]"
              } `}
            >
              <span
                className={`${
                  slides[activeIndex].section === section
                    ? "h-[20px] md:h-[27px] w-[3px] md:w-[5px] me-1 bg-[#F04B23]"
                    : ""
                } `}
              ></span>
              {section}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Slider */}
      <div className="w-full  lg:w-[743px] lg:h-[730px]  overflow-hidden  ">
        <Swiper
          direction="vertical"
          spaceBetween={30}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full lg:h-[730px] "
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                animate={{ opacity: 1, x: 0 }} // On animation state
                exit={{ opacity: 0, x: -50 }} // On exit state
                transition={{ duration: 0.5 }} // Duration of animation
                className=" bg-[#F04B23] lg:h-[730px] rounded-[20px] "
              >
                <Nested data={[slide]} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TextNavigationSlider;
