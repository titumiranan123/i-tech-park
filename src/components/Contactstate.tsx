import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import whatsapp from "./../assets/whatsapp.png";
import { Link } from "react-router-dom";
import arrow from "./../assets/arrow1.png";
import { motion } from "framer-motion";

const Contactstate: React.FC = () => {
  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration for AOS
      once: true, // Only animate once per scroll
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, when: "beforeChildren", staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-[1240px] mx-auto lg:mt-[120px] md:mt-[80px] sm:mt-[40px] px-4"
    >
      <div
        className="lg:w-[1200px] w-full lg:h-[270px] bg-[#0E141E] rounded-[24px] py-[39px] px-4 lg:px-[36px] grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-4"
        data-aos="fade-up" // AOS animation on container
      >
        {/* Left section with WhatsApp contact */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center gap-5 lg:border-r-2 border-[#F04B23] p-4 lg:p-0"
          data-aos="fade-right" // AOS animation on this section
        >
          <motion.h1
            variants={textVariants}
            className="text-white font-bold text-[24px] sm:text-[28px] lg:text-[32px] text-center lg:text-left"
          >
            Have a Project?
          </motion.h1>
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <motion.img
              variants={itemVariants}
              className="h-8 w-8 sm:h-10 sm:w-10"
              src={whatsapp}
              alt="whatsapp"
              data-aos="zoom-in" // AOS animation for image
            />
            <motion.div
              variants={itemVariants}
              className="text-white text-center lg:text-left text-[16px] sm:text-[18px] lg:text-[20px] font-[400]"
              data-aos="fade-left" // AOS animation for text
            >
              <p className="uppercase">GET A free consultation</p>
              <p>+8801521331108</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right section with consultation text and button */}
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:col-span-2 gap-6 lg:gap-0"
          data-aos="fade-up" // AOS animation for the right section
        >
          <motion.div
            variants={textVariants}
            className="text-white text-center lg:text-left w-full lg:w-2/3 text-[14px] sm:text-[16px] lg:text-[18px]"
          >
            We offer various top-notch services to cater to your needs in the
            digital arena. Need a consultation? Make an appointment. Our
            experienced consultant will reach out at your preferred time.
          </motion.div>
          <motion.div variants={itemVariants} className="w-full lg:w-auto">
            <Link
              to={"https://calendly.com/imonofficial2/30min?month=2024-07"}
              target="_blank"
              className="py-3 sm:py-4 px-4 sm:px-6 bg-[#F04B23] rounded-[40px] flex justify-center items-center opensans font-[600] text-white shadow-md text-[12px] sm:text-[14px] lg:text-[20px] gap-2 w-full lg:w-auto"
              data-aos="zoom-in" // AOS animation for button
            >
              Book a Call
              <img
                className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                src={arrow}
                alt="arrow"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contactstate;
