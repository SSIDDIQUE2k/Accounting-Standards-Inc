import React from "react";
import Atoms from '../assets/Images/bklyn.png'
const  Experience = () => {

  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full ">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center">
            Professional Experience
          </p>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className=" max-w-xl mx-auto p-4 rounded-xl shadow-md bg-slate-100">
          <div className="flex flex-col font-medium gap-1 w-full">
            <h1 className="text-xl md:text-2xl font-semibold">
              Full Stack Developer Recreation Aid
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
             <img src={Atoms} alt="Atoms Digital Solution" className="h-10 w-10 lg:h-16 scale-y-150 lg:w-20 bg-transparent mix-blend-multiply" /> Brooklyn College Athletics
            </div>
            <p className="text-base md:text-base text-gray-500">
              June , 2022 - Present
            </p>
          </div>
          <div className="flex w-fit mx-auto">
            <ul data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className= "pl-3 md:pl-7 list-disc leading-loose max-w-max text-base text-justify md:text-start md:text-lg font-medium">
              <li className="py-2 md:py-3">
                Using ASP.NET Portal, a management website to make web pages for the Athletics Site.              
              </li>
              <li className="py-2 md:py-3">
                Collaborated with a team of 4 developers to ensure seamless integration of the application.              
              </li>
              <li className="py-2 md:py-3">
                Implemented (Html, Css, JavaScript, BootStrap5) with IIB resulting in a 30% reduction in image loading.              
              </li>
              <li className="py-2 md:py-3">
                Managing Website Daily to keep up with the day to day changes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;