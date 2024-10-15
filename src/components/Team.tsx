/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import core1 from "./../assets/member/core1.png";
import core2 from "./../assets/member/core2.png";
import core3 from "./../assets/member/core3.png";
import design1 from "./../assets/member/design1.png";
import design2 from "./../assets/member/designer2.png";
import design3 from "./../assets/member/designer3.png";
import design4 from "./../assets/member/designer4.png";
import video1 from "./../assets/member/videoeditor1.png";
import webdeveloper1 from "./../assets/member/webdeveloper1.png";
import support1 from "./../assets/member/support1.png";
import seo1 from "./../assets/member/seo1.png";
import digi1 from "./../assets/member/digitalmarketer1.png";
import digi2 from "./../assets/member/digitalmarketer2.png";
import digi3 from "./../assets/member/digitalmarketer3.png";
import digi4 from "./../assets/member/digitalmarketer4.png";
import digi5 from "./../assets/member/digitalmarketer5.png";
import digi6 from "./../assets/member/digitalmarketer6.png";
import digi7 from "./../assets/member/digitalmarketer7.png";
import digi8 from "./../assets/member/digitalmarketer8.png";
// import digi9 from "./../assets/member/digitalmarketer9.png";
import digi10 from "./../assets/member/digitalmarketer10.png";

import Nestedmember from "./Nestedmember";
import Heading from "./Heading";

interface Slide {
  nav: string;
  slides: Array<{
    name: string;
    designation: string;
    content: string;
    image: string;
  }>;
}

const Teammember: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
 const slides: Slide[] = [
   {
     nav: "Core Team ",
     slides: [
       {
         name: "Masud Rana",
         designation: "Founder & Chief Executive Officer.",
         content:
           "Our CEO is a visionary leader who drives innovation and inspires exclience , guiding our team to consistently achieve outstanding results.",
         image: core1,
       },
       {
         name: "Abu Bakar Chowdhury",
         designation: "Co Founder & Chief Operating Officer",
         content:
           "",
         image: core2,
       },
       {
         name: "Masud Rana",
         designation: "Chief technology officer",
         content:
           "",
         image: core3,
       },
     ],
   },
   {
     nav: "Design",
     slides: [
       {
         name: "Abdur Rabbi",
         designation: "Logo Designer- Team Lead",
         content:
           "Our CEO is a visionary leader who drives innovation and inspires exclience , guiding our team to consistently achieve outstanding results.",
         image: design1,
       },
       {
         name: "Ashadul Islam Ahad",
         designation: "Design Team - Asst. Team Lead",
         content:
           "",
         image: design2,
       },
       {
         name: "Md. Abdul Motaleb",
         designation: "Motion Graphics - Team Lead",
         content:
           "",
         image: design3,
       },
       {
         name: "Shakal Ahmed",
         designation: "Design Team - Team Lead",
         content:
           "",
         image: design4,
       },
     ],
   },
   {
     nav: "Digital Marketing",
     slides: [
       {
         name: "Sume Akter",
         designation: "Marketer -team Lead",
         content: "",
         image: digi1,
       },
       {
         name: "Anisur Rahman",
         designation: "Instagram Linkdin Organic Marekting-Asst Team Lead",
         content: "",
         image: digi2,
       },
       {
         name: "Dewan Miah",
         designation: "Facebook organic marketing -Team Member",
         content:
           "",
         image: digi3,
       },
       {
         name: "Jaynto Kumar Roy",
         designation: "Facebook organic marketing - Team Member",
         content: "",
         image: digi4,
       },
       {
         name: "Md Mostafijur Rahman",
         designation: "Lead Generation Expert",
         content: "",
         image: digi5,
       },
       {
         name: "Nijam Uddin",
         designation: "Instagram Organic Marketing - Team Lead",
         content: "",
         image: digi6,
       },
       {
         name: "Rakib Islam",
         designation: "Instagram+Twitter Organic Marketing -Asst. Team Lead",
         content: "",
         image: digi7,
       },
       {
         name: "Shihab Uddin Fahim",
         designation: "Social Media Paid  Marketing - Team Lead",
         content: "",
         image: digi8,
       },
       {
         name: "Tahmid Nabil",
         designation: "Facebook Organic Marketing - Team Lead",
         content: "",
         image: digi10,
       },
     ],
   },
   {
     nav: "Video Editing",
     slides: [
       {
         name: "Al Af Muntasir",
         designation: "Video Editor - Team Leader",
         content:
           "",
         image: video1,
       },
     ],
   },
   {
     nav: "Web Development",
     slides: [
       {
         name: "Sharier Nahid",
         designation: "Wordpress Developer- Team Lead",
         content:
           "",
         image: webdeveloper1,
       },
     ],
   },
   {
     nav: "Support",
     slides: [
       {
         name: "Nahin Rahman",
         designation: "Support Team",
         content:
           "",
         image: support1,
       },
     ],
   },
   {
     nav: "SEO",
     slides: [
       {
         name: "Ratul Islam Rafi",
         designation: "SEO team - Team Member(SEO)",
         content:
           "",
         image: seo1,
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
    <div className="max-w-[1240px] mx-auto mt-[60px] lg:mt-[120px]">
      <Heading
        title="Our Team"
        subtitle="Our team is a dynamic blend of creativity, expertise and dedication, who are passionate about driving your success."
      />
      <div className="flex flex-col mt-[60px] justify-between lg:flex-row max-w-[1240px] items-center lg:gap-2 mx-auto  lg:px-0 px-4 gap-16 md:gap-10">
        {/* Left-side Text Navigation */}

        <div className="w-full lg:w-[460px] lg:h-[441px] rounded-[20px] flex flex-col justify-center lg:space-y-4 md:space-y-3 space-y-1 mt-[24px]">
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

        {/* Main Slider */}
        <div className="w-full   lg:w-[827px] h-[580px] md:h-[360px] lg:h-[453px] rounded-xl overflow-hidden   ">
          <Swiper
            direction="vertical"
            spaceBetween={30}
            slidesPerView={1}
            mousewheel={true}
            modules={[Navigation, Mousewheel]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="teamswiper lg:h-[453px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Initial slide-in state
                  animate={{ opacity: 1, x: 0 }} // On animation state
                  exit={{ opacity: 0, x: -50 }} // On exit state
                  transition={{ duration: 0.5 }} // Duration of animation
                  className="  w-full h-full "
                >
                  <Nestedmember data={slide.slides} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Teammember;
