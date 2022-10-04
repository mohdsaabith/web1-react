import React from "react";
import img1 from "../Assets/Card/1.png";
import img2 from "../Assets/Card/2.png";
import img3 from "../Assets/Card/3.png";
import img4 from "../Assets/Card/4.png";
import img5 from "../Assets/Card/5.png";
import img6 from "../Assets/Card/6.png";
import img7 from "../Assets/Card/curve-1.png";

const Card = () => {
  const data = {
    cardData: [
      {
        img: img1,
        title: "Quickly identify and target new markets",
      },
      {
        img: img2,
        title: "Onboard customers 100x faster",
      },
      {
        img: img3,
        title: "Migrate complex technologies to cloud faster",
      },
      {
        img: img4,
        title: "Optimize ROI with new market expansion",
      },
      {
        img: img5,
        title: "Reduce operations costs by up to 70%",
      },
      {
        img: img6,
        title: "Excellence delivered on-time and on-budget",
      },
    ],
  };

  return (
    <div className="">
      <div className=" flex  lg:px-[10rem] md:px-[5rem] sm:px-[14rem] px-[5rem]">
        <div className="flex-1  ">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-x-80 md:grid-cols-3 md:gap-x-7 ">
            {data.cardData.map((item) => {
              return (
                <div
                  className=" overflow-hidden items-center place-items-center justify-center lg:h-[14rem] lg:w-[14rem] md:h-[12rem] md:w-[12rem] sm:w-[12rem] sm:h-[12rem] w-[12rem] h-[12rem]
                 ">
                  <img
                    src={item.img}
                    className="h-[auto] w-[auto] pl-[2rem] items-center justify-center text-center"
                    alt=""
                  />
                  <div className="">
                    <h5 className="text-[#8d8d94] h-[auto] w-[auto] justify-center items-center  text-center text-[20px] ">
                      {item.title}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <img
          src={img7}
          alt=""
          className="items-end
          justify-end
          md:pl-[600px]
          
          "
        />
      </div>
    </div>
  );
};

export default Card;
