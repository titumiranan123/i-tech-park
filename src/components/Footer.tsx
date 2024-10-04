import React, { useEffect } from "react";
import call from "../assets/footer/call.png";
import facebook from "../assets/footer/facebook.png";
import instagram from "../assets/footer/instragram.png";
import youtube from "../assets/footer/youtube.png";
import linkdin from "../assets/footer/linkdin.png";
import email from "../assets/footer/email.png";
import logo from "./../assets/footerlogo.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration for animations
      easing: "ease-out-cubic", // Smooth easing
      once: true, // Animations trigger once
      mirror: false, // No animation on scroll up
    });
  }, []);

  return (
    <div className="bg-black lg:px-0 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-16 gap-8">
          {/* Logo and Description Section */}
          <div data-aos="flip-left">
            <img className=" -mt-[10px]" src={logo} alt="logo" />
            <p
              className="text-white regular text-[20px] leading-[24px] mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              I-Tech Pak BD serves as your Digital Marketing Partner in all ways
              possible. From Social Media Marketing, WordPress Customization to
              ranking your website in search engines (SEO), we assist you in
              your digital presence.
            </p>
            <div
              className="flex gap-3 mt-[36px]"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/facebook.com"}
                data-aos="flip-right"
              >
                <img src={facebook} alt="facebook" />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/instagram.com"}
                data-aos="flip-right"
              >
                <img src={instagram} alt="instagram" />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/linkedin.com"}
                data-aos="flip-right"
              >
                <img src={linkdin} alt="linkedin" />
              </Link>
              <Link
                className="hover:scale-125 duration-150 transition-all"
                to={"/youtube.com"}
                data-aos="flip-right"
              >
                <img src={youtube} alt="youtube" />
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:ms-16" data-aos="slide-right">
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Services
            </h1>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Design
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Web Development
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Video Editing
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Search Engine Marketing
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Social Media Marketing
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="600"
              >
                Business Consultation
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to={"#services"}
                data-aos="fade-left"
                data-aos-delay="700"
              >
                Virtual Assistant
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="lg:ms-[70px]" data-aos="fade-down">
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Resources
            </h1>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to="/"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Home
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to="/services"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Services
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to="/reviews"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                Reviews
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to="/about"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                About
              </Link>
              <Link
                className="text-white regular text-[20px] leading-[24px] hover:text-slate-400 hover:translate-x-3 duration-200 transition-all"
                to="/contact"
                data-aos="fade-left"
                data-aos-delay="600"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:ms-10" data-aos="flip-up">
            <h1 className="bold text-[32px] leading-[38.4px] text-white">
              Contact
            </h1>
            <div className="flex flex-col gap-4 mt-6">
              <a
                href="tel:880354564654"
                className="flex gap-2 items-center text-white regular"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img className="w-4 h-4 " src={call} alt="call" />
                <p>+880354564654</p>
              </a>
              <a
                href="mailto:example@gmail.com"
                className="flex gap-2 items-center text-white regular"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img className="w-4 h-4" src={email} alt="email" />
                <p>example@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line and Rights Section */}
        <div className="-mt-5" data-aos="zoom-in">
          {/* <div className="lg:w-[1240px] h-[1px] bg-white"></div> */}
          <div
            className="text-white text-[20px] regular flex justify-center items-center text-center mb-6 mt-4"
            data-aos="fade-up"
          >
            © 2024 I -Tech Park BD. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
