import React from "react";
import Image from "next/image";

interface Props {}

const Description: React.FC<Props> = () => {
  return (
    <div className="flex flex-col justify-center h-[70vh] md:flex-row">

      <div className="flex flex-col justify-center items-center mt-20">

        <div className="flex justify-center flex-col items-center">
          <Image src="/logoTech.svg" alt="Logo" width={120} height={120} />
          <h2 className="text-white font-bold text-2xl md:text-5xl mt-3">Inovation, Security and Quality!</h2>
        </div>
        <span className="text-white md:w-[50vw] items-center mt-4">
          We place the client at the center of our operations. We understand
          that each organization has unique needs, and as such, we develop
          customized approaches and tailored strategies to meet the individual
          goals and objectives of our clients.
        </span>
        

        <div className="flex justify-center mt-4">
          <button className="text-white w-80 p-1 bg-[#0085FF] rounded">FREE CONSULT</button>
        </div>

      </div>
    </div>
  );
};

export default Description;