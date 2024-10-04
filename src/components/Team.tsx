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
    <div className="flex max-w-[1240px] items-center gap-10 mx-auto mt-[120px] ">
      {/* Left-side Text Navigation */}
      <div className="w-[450px] h-[441px] rounded-[20px]  p-4 flex flex-col justify-center space-y-4">
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
      <div className="lg:w-[830px] w-full overflow-hidden lg:h-[440px] rounded-xl">
        <Swiper
          direction="vertical"
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full h-[415px] border"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className=" flex gap-5    bg-[#F04B23] p-8 rounded-lg shadow-lg">
                <img
                  src={slide.image}
                  className="w-[305px] h-[333px] flex justify-center items-center mx-auto mt-4  rounded-[20px]"
                  alt={slide.title}
                />
                <div className="mt-6">
                  <h1 className="text-[32px] leading-[47.6px] text-white text-start font-bold ">
                    {slide.title}
                  </h1>
                  <p className="text-white mt-1 semi-bold text-[20px] leading-3">Founder & Chief Executive Officer</p>
                 
                  <p className="text-[16px] mt-8 font-[400] regular leading-[20px] text-white text-start">
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
