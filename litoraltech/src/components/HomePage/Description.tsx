import React from "react";
import Image from "next/image";

interface Props {}

const Description: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center h-[80vh] md:h-[98vh] md:flex-row">
      <div className="flex flex-col custombp:mt-[10rem] md:justify-normal">
        <div className="flex flex-col items-center justify-center">
          <Image src="/logoTech.svg" alt="Logo" width={120} height={120} />
          <h2 className="mt-3 text-2xl font-bold text-center text-white md:text-5xl">
            Inovation, Security and Quality!
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <span className="text-white md:w-[50vw] items-center text-center mt-4">
            We place the client at the center of our operations. We understand
            that each organization has unique needs, and as such, we develop
            customized approaches and tailored strategies to meet the individual
            goals and objectives of our clients.
          </span>
        </div>

        <div className="flex justify-center mt-5">
          <button className="text-white w-80 p-1 bg-[#0085FF] rounded  hover:bg-blue-500 transition hover:scale-110">
            FREE CONSULT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
