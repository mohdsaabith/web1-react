import React from "react";

const Header = () => {
  return (
    <div>
      <div
        className="  text-center
      items-center
      bg-[url('./Assets/bg1.jpg')]
      h-[37rem]      
       ">
        <div className="lg:px-[7rem] md:px-[6rem] sm:px-[5rem] pt-[10rem] px-[4rem]">
          <h1 className="text-white lg:text-[120px] md:text-[80px] sm:text-[60px] text-[50px] font-bold     z-10">
            ACCELERATE
          </h1>
          <p
            className="text-white
          lg:text-[20px]
          md:text-[15px]
          sm:text-[15px]
          text-[15px]
          font-bold">
            Solutions for broadband service providers and network technology
            companies
          </p>
        </div>
        <button
          className=" rounded-full
         md:w-[180px]
         md:h-[45px]
         md:text-[16px]
         sm:text-[12px]
         sm:w-[135px]
         sm:h-[45px]
         w-[150px]
         h-[35px]
          text-bold
         
          mr-4
           bg-[#96bf41]
            text-white
             border-2
              hover:bg-white
               hover:text-[#96bf41]
                hover:border-[#96bf41]">
          View our Solutions
        </button>
        <button
          className="bg-[#19a6a6]
         rounded-full
          md:w-[180px] 
          md:h-[45px] 
          md:text-[16px]
          sm:text-[12px]
          sm:w-[135px]
          sm:h-[45px]
          text-[15px]
         w-[150px]
         h-[35px]
          text-bold
        text-white border-2
        hover:bg-white 
        hover:text-[#19a6a6] 
        hover:border-[#19a6a6]">
          Request a Demo
        </button>
      </div>
      <div
        className="
      
      
      bg-no-repeat h-[110px] bg-[url('./Assets/bg2.png')]"></div>
    </div>
  );
};

export default Header;
