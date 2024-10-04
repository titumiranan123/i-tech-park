/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import arrow from "./../assets/arrow1.png";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import call from "./../assets/call.png";
import email from "./../assets/email.png";
import user from "./../assets/contactuser.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contactsection: React.FC = () => {
  const [valid, setData] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  function onChange(value: any) {
    setData(value);
  }

  const handalSubmit = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const formData = new FormData();
    formData.append("access_key", "9ab377e8-93da-4e3a-9664-c5872080d4b5");
    formData.append("Name", target.name.value);
    formData.append("Email", target.email.value);
    formData.append("Message", target.message.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setData(null);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Form Submitted Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="relative lg:h-[752px] h-auto max-w-[1240px] mx-auto lg:mt-[120px] mt-[80px] px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-36 gap-8 lg:pt-[81px]">
        {/* Contact Content */}
        <div
          className="contact-content lg:w-[400px]"
          data-aos="fade-right" // Apply AOS fade-right animation
        >
          <h1 className="text-black text-[40px] lg:text-[64px] font-bold leading-[46px] lg:leading-[76.8px]">
            Contact Us
          </h1>
          <p className="text-[16px] lg:text-[20px] font-[400] leading-[24px] lg:leading-[30px] mt-2">
            Have questions, ideas, or just want to say hello? We're here for
            you. Reach out through the details below or use the form to send a
            quick message. We'll get back to you promptly.
          </p>
          <div className="mt-8 lg:mt-10">
            <div className="flex gap-2 items-center">
              <img src={call} alt="Phone" className="w-6 h-6" />
              <p className="text-[16px] lg:text-[20px]">+880745875745</p>
            </div>
            <div className="flex gap-2 items-center mt-4">
              <img src={email} alt="Email" className="w-6 h-6" />
              <p className="text-[16px] lg:text-[20px]">example@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className="lg:absolute bottom-0 left-[30%] transform -translate-x-1/2"
          data-aos="fade-up" // Apply AOS fade-up animation
        >
          <img
            className="w-[250px] lg:w-[418px] h-auto"
            src={user}
            alt="User"
          />
        </div>
        {/* Form Section */}
        <div
          className="w-full lg:w-[422px] md:mt-0 -mt-26 border bg-white rounded-xl p-6 lg:p-8 h-auto"
          data-aos="fade-left" // Apply AOS fade-left animation
        >
          <form
            onSubmit={(e) => handalSubmit(e)}
            className="flex flex-col gap-4"
          >
            <input
              className="w-full h-[50px] lg:h-[70px] rounded-[8px] py-3 px-5 bg-[#F8F4F1] focus:outline-none"
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
            <input
              className="w-full h-[50px] lg:h-[70px] rounded-[8px] py-3 px-5 bg-[#F8F4F1] focus:outline-none"
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
            <textarea
              className="w-full h-[120px] lg:h-[146px] rounded-[8px] py-3 px-5 bg-[#F8F4F1] focus:outline-none"
              placeholder="Write your Message"
              name="message"
              required
            ></textarea>

            <div className="flex justify-center items-center flex-col gap-5 mt-6">
              <ReCAPTCHA
                sitekey="6LefQ_IpAAAAAPg3gXYY9vijQkXSlAakn4letZZB"
                onChange={onChange}
              />
              <button
                className={`py-3 lg:py-4 px-5 lg:px-6 bg-black text-white font-bold rounded-[8px] flex justify-center items-center shadow-md transition-opacity duration-200 ${
                  !valid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={!valid}
              >
                Submit
                <img
                  className="w-5 h-5 lg:w-8 lg:h-8 ml-2"
                  src={arrow}
                  alt="Arrow"
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Image */}
    </div>
  );
};

export default Contactsection;
