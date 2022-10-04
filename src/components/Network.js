import React from "react";

const Network = () => {
  return (
    <div className="text-center items-center justify-center  bg-[url('./Assets/network-bg.png')]  h-[25rem]">
      <div className="mx-[3rem] sm:mx-[5rem] md:mx-[20rem] ">
        <h2 className="text-[25px] sm:text-[30px] md:text-[32px] lg:text-[34px] pt-[3.5rem] sm:pt-[5rem] md:pt-[5rem] text-white">
          We are unapologetically passionate about networks and technology
        </h2>
        <h5 className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] lg:mx-[5rem]">
          We provide expert technical resources to help network companies
          develop complex networked and cloud products, and solutions to enable
          broadband service providers to evolve their network with a clear path
          to digital transformation.
        </h5>
        <button className="mt-5  bg-white rounded-full w-[180px] h-[45px] border-[#19a6a6]  text-[#19a6a6] border-2 hover:bg-[#19a6a6] hover:text-white ">
          Learn About VCTI
        </button>
      </div>
    </div>
  );
};

export default Network;
