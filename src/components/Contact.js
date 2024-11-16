import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9inzcz7",
        "template_lg8ahdf",
        formRef.current,
        "_8hE7B_7PzOSTxPxm"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Unable to send message.");
        }
      );
  };

  return (
    <section className="bg-darkblue py-16 text-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg text-dark-orange mt-4">
            We’d love to hear from you! Get in touch with us today.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Contact Information */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold text-dark-orange mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-dark-orange text-2xl" />
                <div>
                  <p className="text-lg font-medium">Office: +1 (718) 421-3833</p>
                  <p className="text-lg font-medium">Cell: +1 (917) 847-6599</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-dark-orange text-2xl" />
                <a
                  href="mailto:ssiddique@accstad.com"
                  className="text-lg font-medium underline hover:text-orange-400"
                >
                  ssiddique@accstad.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-dark-orange text-2xl" />
                <p className="text-lg font-medium">
                  1100 Coney Island Ave, Suite 403 <br />
                  Brooklyn, NY 11230, United States
                </p>
              </div>
            </div>
            <div className="mt-8">
              <SocialHandles />
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.994034938872!2d-73.96891778459042!3d40.6277561793409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2445b9de91589%3A0x2648d0d934acc67f!2s1100%20Coney%20Island+Ave,+Suite+403,+Brooklyn,+NY+11230,+USA!5e0!3m2!1sen!2sin!4v1699882990921!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/1100+Coney+Island+Ave,+Brooklyn,+NY+11230"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-center text-white bg-dark-orange hover:bg-orange-500 py-3 px-6 rounded-lg font-medium transition"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
