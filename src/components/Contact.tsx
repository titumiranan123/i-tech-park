/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {  useState } from "react";
import arrow from "./../assets/arrow1.png";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import call from "./../assets/call.png";
import email from "./../assets/email.png";
import user from "./../assets/contactuser.png";
const Contactsection: React.FC = () => {
  const [valid, setData] = useState(null);
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
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: " Please try again later.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
 
  return (
    <div className=" relative lg:h-[752px] h-auto max-w-[1240px] mx-auto lg:mt-[120px] mt-[80px] ">
      <div className="flex justify-between items-center max-w-[1240px] mx-auto gap-36 lg:pt-[81px]">
        <div className="contact-content lg:w-[400px]">
          <h1 className="text-black text-[64px] font-bold leading-[76.8px]">
            Contact Us
          </h1>
          <p className="text-[20px] font-[400] leading-[30px] mt-2">
            Have questions, ideas, or just want to say hello? We're here for
            you. Reach out through the details below or use the form to send a
            quick message. We'll get back to you promptly
          </p>
          <div className="mt-10">
            <div className="flex gap-2 items-center">
              <img src={call} alt="" />
              <p>+880745875745</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={email} alt="" />
              <p>example@gmail.com</p>
            </div>
          </div>
        </div>
        <div className=" lg:w-[422px] border bg-white rounded-xl h-[609px] ">
          <div className="bg-white  rounded-[20px] py-[36px] px-[20px]">
            <form
              onSubmit={(e) => handalSubmit(e)}
              className="flex  flex-col gap-2"
              action=""
            >
              <input
                className="w-full h-[70px] rounded-[8px] py-5 px-8 bg-[#F8F4F1]"
                type="text"
                placeholder="Full Name"
                name="name"
              />
              <input
                className="w-full h-[70px] rounded-[8px] py-5 px-8 bg-[#F8F4F1]"
                type="text"
                placeholder="Email Address"
                name="email"
              />
              <textarea
                id=""
                className="w-full h-[146px] rounded-[8px] py-5 px-8 bg-[#F8F4F1]"
                placeholder="Write your Message"
                name="message"
              ></textarea>
              <div className="flex justify-center items-center flex-col gap-5 mt-10">
                <div>
                  <ReCAPTCHA
                    sitekey="6LefQ_IpAAAAAPg3gXYY9vijQkXSlAakn4letZZB"
                    onChange={onChange}
                  />
                </div>
                <button
                  className={`py-4 px-6 border bg-black rounded-[16px] flex justify-center items-center opensans font-[700] md:text-[20px] text-white shadow text-[12px]  gap-2 ${
                    !valid
                      ? "cursor-not-allowed pointer-events-none"
                      : "cursor-pointer"
                  }`}
                >
                  Submit
                  <img className="md:w-8 md:h-8 w-6 h-6" src={arrow} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[30%]">
        <img className="w-[418px] h-[636px]" src={user} alt="" />
      </div>
    </div>
  );
};

export default Contactsection;
