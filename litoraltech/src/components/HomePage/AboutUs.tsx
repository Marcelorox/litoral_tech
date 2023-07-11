import React from "react";
import Image from "next/image";

interface Props {}

const AboutUs: React.FC<Props> = () => {
  return (
    <>
    <h1 className="text-white font-bold text-xl md:text-5xl hidden md:flex justify-center bg-[#0085FF] p-10 text-center">
          ABOUT US
    </h1>
      <div className="flex flex-col justify-center bg-[#0085FF]  md:h-[50vh] h-[90vh] md:flex-row">
        
        <div className="flex flex-col justify-center items-center ">
        <h1 className="text-white font-bold text-xl md:text-5xl flex md:hidden justify-center bg-[#0085FF] p-10 text-center">
          ABOUT US
    </h1>
          <div className="flex justify-center flex-col items-center">
            <h2 className="text-white md:w-[40vw] text-center md:text-start font-bold text-lg md:text-3xl mt-3">
              Manage your company in the palm of your hand!
            </h2>
          </div>

          <span className="text-white md:w-[40vw] text-center md:text-start mt-4">
            Our main goal is to achieve tangible and measurable results. We work
            closely with our clients to establish key performance indicators and
            track progress over time, ensuring that the implemented strategies
            generate positive and impactful outcomes.
          </span>
          <div className="flex justify-center mt-5 w-full">
            <button className="text-white md:w-full p-1 w-80  bg-[#1E1E1E] rounded">
              LEARN MORE
            </button>
          </div>
        </div>
        <Image
          className="ml-9 hidden md:flex"
          src="/graphic.svg"
          alt="Logo"
          width={400}
          height={400}
        />
      </div>
    </>
  );
};
export default AboutUs;
