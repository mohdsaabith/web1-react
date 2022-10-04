import React from "react";
import logo from "../Assets/Logo-1.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#10223f]">
        <div className="lg:px-[3rem] md:px-[2.5rem]">
          <div className="grid lg:grid-cols-4 gap-3 sm:grid-cols-1 grid-cols-1 p-[3rem] ">
            <div className="col-span-2">
              <img src={logo} alt="" />
              <p className="text-white lg:text-[16px] md:text-[14px] sm:text-[12px] text-[10px]  pt-[1rem]">
                Solutions that accelerate broadband expansion, operations &
                innovation for broadband providers and technology companies.
              </p>
            </div>
            <div>
              <ul className="text-white lg:text-[14px] md:text-[12px] sm:text-[10px] text-[9px] font-bold lg:space-y-1 md:">
                <li className="hover:text-[#19a6a6]">HOME</li>
                <li className="hover:text-[#19a6a6]">
                  SOLUTIONS FOR BROADBAND PROVIDERS
                </li>
                <li className="hover:text-[#19a6a6]">
                  SOLUTIONS FOR TECHNOLOGY COMPANIES
                </li>
                <li className="hover:text-[#19a6a6]">ABOUT US</li>
                <li className="hover:text-[#19a6a6]">CAREERS</li>
                <li className="hover:text-[#19a6a6]">CONTACT US</li>
              </ul>
            </div>
            <div className="font-bold lg:text-[14px] md:text-[12px] sm:text-[10px] text-[9px] lg:pl-[7.5rem] md:pl-[3rem] sm:pl-[1rem] pl-[.5rem] leading-3">
              <ul className="">
                <li className="text-[#19a6a6]">USA</li>
                <li className="text-white">+1 (732) 981-0611</li>
                <li className="text-white">info@vcti.io</li>
              </ul>
              <ul>
                <li className="text-[#19a6a6]">India</li>
                <li className="text-white">+91 80 40375300</li>
                <li className="text-white">info@vcti.io</li>
              </ul>
            </div>
          </div>
          <hr className="px-[3rem]" />
          <div>
            <div>
              <h1 className=" text-white lg:text-[13px] md:text-[11px] sm:text-[10px] text-[9px] lg:p-[2rem] md:p-[1.5rem] sm:p-[1.2rem] p-[1rem]">
                © 2022 VCTI. All rights reserved. | Privacy & Terms of Use
              </h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
