import React, { useEffect, useState } from "react";
import { MenuIcons, XIcon } from "@heroicons/react/outline";
import logo from "../Assets/Logo-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-tailwind/react";
import MenuIcon from "../Assets/Icons/Menu.svg";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const finalScollPosition = useScrollPosition(0);

  console.log(finalScollPosition);
  //className="w-full h-[80px]  z-10 bg-transparent hover: hover:bg-scroll  fixed drop-shadow-lg"
  return (
    <div
      className={
        finalScollPosition > 0
          ? "bg-[#10223f]  w-full h-[80px]  z-10 fixed"
          : "bg-transparent w-full h-[80px]  z-10 fixed"
      }>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logo} className="mr-4 " />
          <ul className="hidden md:flex text-white font-bold  lg:text-[16px] md:text-[10px]  sm:text-[5px] ">
            <li>SOLUTIONS</li>
            <li>ABOUT US</li>
            <li>BLOG</li>
            <li>RESOURCES</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="hidden  md:flex pr-4">
          <button className="bg-white rounded-full text-bold lg:text-[16px] lg:w-[200px] lg:h-[45px] md:text-[10px] md:w-[100px] md:h-[45px]  text-[#19a6a6]">
            REQUEST A DEMO
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <svg
              className="w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg
              className="w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512">
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-[#4a5278] w-full px-8 text-white"
        }>
        <li className="border-b-2 border-zinc-200 w-full">SOLUTIONS</li>
        <li className="border-b-2 border-zinc-200 w-full">SOLUTIONS</li>
        <li className="border-b-2 border-zinc-200 w-full">BLOG</li>
        <li className="border-b-2 border-zinc-200 w-full">ABOUT US</li>
        <li className="border-b-2 border-zinc-200 w-full">BLOG</li>
        <li className="border-b-2 border-zinc-200 w-full">RESOURCES</li>
        <li className="border-b-2 border-zinc-200 w-full">CAREERS</li>
        <li className="border-b-2 border-zinc-200 w-full">CONTACT US</li>
        <li className="border-b-2 border-zinc-200 w-full">REQUEST A DEMO</li>
      </ul>
    </div>
  );
};

export default Navbar;
