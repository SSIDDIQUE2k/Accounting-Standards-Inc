import React, { useState } from "react";
import {
  FaBriefcase,
  FaChartLine,
  FaMoneyCheckAlt,
  FaCalculator,
  FaPiggyBank,
  FaRegCreditCard,
} from "react-icons/fa";
import ProjectsData from "./ServicesData";

const Projects = () => {
  return (
    <section
      id="services" // Added correct id for scrolling
      className="text-gray-800 body-font bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 py-16"
    >
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div id="projects" className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold title-font mb-4 text-gray-900">
            Our Services
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
            className="text-lg sm:text-xl font-medium leading-relaxed text-gray-600 max-w-3xl"
          >
            Explore the services we provide for businesses and individuals. Let
            us assist you with your accounting and financial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ProjectsData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDetails = () => {
    setIsVisible(!isVisible);
  };

  // Map service names to specific icons
  const getServiceIcon = (name) => {
    switch (name) {
      case "Corp Tax Return":
        return <FaBriefcase className="text-blue-600 text-2xl" />;
      case "Individual Tax Return":
        return <FaChartLine className="text-blue-600 text-2xl" />;
      case "Nationwide Startup":
        return <FaMoneyCheckAlt className="text-blue-600 text-2xl" />;
      case "Bookkeeping":
        return <FaCalculator className="text-blue-600 text-2xl" />;
      case "Financial Statements":
        return <FaPiggyBank className="text-blue-600 text-2xl" />;
      case "Sales Tax & Payroll":
        return <FaRegCreditCard className="text-blue-600 text-2xl" />;
      default:
        return <FaBriefcase className="text-blue-600 text-2xl" />;
    }
  };

  return (
    <div className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:-translate-y-2 relative">
      {/* Service Icon */}
      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
        {getServiceIcon(service.name)}
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
        {service.name}
      </h3>

      {/* Toggle Button */}
      <button
        onClick={toggleDetails}
        className={`text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
          isVisible
            ? "bg-red-600 hover:bg-red-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isVisible ? "Hide Details" : "View Details"}
      </button>

      {/* Service Details */}
      {isVisible && (
        <div className="mt-4 text-gray-600 text-base transition-opacity duration-300">
          <p>{service.description}</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
