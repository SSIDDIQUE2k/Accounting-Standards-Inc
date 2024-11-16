import React from "react";
import { Link } from "react-scroll";

const About = () => {
  const links = [
    { title: "Home", link: "home" },
    { title: "Services", link: "services" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <section className="body-font bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div id="about" className="text-center w-full mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            About Us
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="text-lg sm:text-xl font-medium text-dark-orange mt-4"
          >
            Accounting & CPA Services for Businesses & Individuals
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:w-1/2 w-full"
          >
            <img
              className="object-cover object-center rounded-lg shadow-md"
              alt="Accounting services"
              src={require("../assets/Images/about.png")}
            />
          </div>

          {/* Text Section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <p className="text-lg lg:text-base xl:text-xl font-medium text-gray-700 leading-loose xl:leading-8">
              With over two decades of expertise, Accounting Standards Inc.
              provides comprehensive accounting and CPA services tailored to
              meet the needs of both businesses and individuals. Our services
              include tax preparation, financial statement analysis, and
              bookkeeping, ensuring your financial management is handled with
              precision and integrity.
              <br />
              <br />
              We offer specialized solutions such as corporate and individual
              tax returns, financial statements, sales tax and payroll, and
              support for nationwide startups. Our commitment to excellence
              means that you can rely on us for accurate and reliable financial
              services that support your goals.
              <br />
              <br />
              Whether you're seeking strategic guidance or essential financial
              services, Accounting Standards Inc. is here to be your trusted
              partner in finance and accounting.
            </p>

            {/* CTA Button */}
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              className="mt-7 flex gap-x-4 md:gap-x-5 justify-center"
            >
              <Link
                to="services" // Ensure this matches the `id` in the target section
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
      </div>
    </section>
  );
};

export default About;
