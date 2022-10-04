import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/free-mode";

import img1 from "../Assets/Partners/1.png";
import img2 from "../Assets/Partners/2.jpg";
import img3 from "../Assets/Partners/3.png";
import img4 from "../Assets/Partners/4.jpg";
import img5 from "../Assets/Partners/5.png";
import img6 from "../Assets/Partners/6.png";
import img7 from "../Assets/Partners/7.png";
import img8 from "../Assets/Partners/8.png";
import img9 from "../Assets/Partners/9.png";
import img10 from "../Assets/Partners/10.png";
import img11 from "../Assets/Partners/11.png";

const Partner = () => {
  return (
    <div className="bg-[#f1f1f8] w-full h-[23rem] items-center justify-center ">
      <div className="bg-[#f1f1f8]">
        <div className="text-center  pt-[3rem]">
          <h2 className="text-[#19a6a6] text-[24px] sm:text-[25px] md:text-[30px] lg:text-[33px] mx-[3rem] sm:mx-[1.5rem] md:mx-[1.5rem] lg:mx-[16rem]">
            A trusted partner to some of the worlds most innovative broadband
            and technology companies
          </h2>
        </div>
        <div className="justify-center items-center pt-[2rem] px-[8.5rem] sm:px-[5rem] sm:h-5 md:px-[9rem] md:h-9 bg-[#f1f1f8]">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper "
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partner;
