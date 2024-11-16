import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";

const Profile = () => {
  const links = [
    { title: "Home", link: "home" },
    { title: "About", link: "about" },
    { title: "Services", link: "projects" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <section className="text-gray-600 body-font pt-16 lg:min-h-75vh">
      <div className="p-5 mx-auto flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit gap-2">
        
        {/* Profile Image */}
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="w-5/6 sm:max-w-xs md:max-w-sm lg:max-w-md sm:w-2/6 lg:mr-10 xl:mr-20 lg:p-5 lg:w-1/3 xl:w-1/4 transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <img
            className="object-cover object-center rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            alt="Profile Image"
            src="https://i.ibb.co/mtMTdrm/db2.png"
            loading="lazy"
          />
        </div>
        
        {/* Text Content */}
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col items-center text-center xl:scale-105">
          <SocialHandles />
          
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="title-font md:text-3xl text-2xl mb-4 font-medium text-white"
          >
            Welcome to <span className="text-dark-orange">Accounting Standards Inc</span>
          </h2>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="text-3xl text-white mb-4 font-medium"
          >
            <Typewriter
              words={["Financial Services", "Tax Consultancy", "Business Solutions"]}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>

          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="mb-2 text-white text-lg md:text-xl leading-relaxed"
          >
            Your trusted partner in finance and accounting.
          </p>
          <p
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="text-lg text-white md:text-xl"
          >
            We specialize in comprehensive financial solutions for businesses.
          </p>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            className="mt-7 flex gap-x-4 md:gap-x-5 justify-center"
          >
            <Link
              to={links.find((link) => link.title === "Services").link}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <button
                className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 rounded-full focus:outline-none hover:bg-cornsilk hover:text-black transition-colors duration-300"
                aria-label="View our services"
              >
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="lg:mt-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          className="w-full h-18 sm:h-20 lg:h-[15vh]"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#f5f5f5" fillOpacity=".2" />
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#f5f5f5" fillOpacity=".5" />
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#f5f5f5" fillOpacity=".9" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Profile;
