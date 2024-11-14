import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_9inzcz7", "template_lg8ahdf", formRef.current, "_8hE7B_7PzOSTxPxm")
      .then(
        (result) => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Unable to send message!");
        }
      );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-dark-orange ">
            Let's keep in touch
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10 justify-center items-center">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6 flex flex-col items-center">
            <h1 data-aos="zoom-in-down" data-aos-duration="1000" data-aos-once="false" className="text-2xl lg:text-3xl text-dark-orange mb-3 lg:mb-4">
              Get In Touch
            </h1>
            <div data-aos="zoom-in-down" data-aos-duration="1000" data-aos-once="false" className="flex gap-5 mb-4 justify-center md:mb-5">
              <SocialHandles />
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaPhoneAlt className="text-white" />
              <p className="text-white md:text-lg">+1(315) 975-9378</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5">
              <FaEnvelope className="text-white" />
              <a href="mailto:siddiqueshazib5@gmail.com" className="text-white md:text-lg">siddiqueshazib5@gmail.com</a>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="false" className="flex gap-3 items-center md:gap-2 lg:gap-5">
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-center text-white md:text-lg">Brooklyn, New York, United States</p>
            </div>
          </div>
          {/* Contact form code (if you want to include it) */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
