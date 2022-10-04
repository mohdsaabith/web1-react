import React from "react";
import img1 from "../Assets/Blog/1.png";
import img2 from "../Assets/Blog/2.jpg";
import img3 from "../Assets/Blog/3.jpg";

const Blog = () => {
  const blogCard = {
    blogData: [
      {
        img: img1,
        heading:
          "VCTI Achieves Dramatic Growth Fueled by U.S.’s Plans and Funding for Broadband Expansion",
        title: "2 MIN | COMPANY NEWS",
      },
      {
        img: img2,
        heading: "Final Rules - New Opportunities for Broadband Expansion",
        title: "4 MIN | RDOF",
      },
      {
        img: img3,
        heading: "VCTI Launches New Identity",
        title: "3 MIN | NEWS",
      },
    ],
  };

  return (
    <div className="mt-[5rem]">
      <div className="w-full bg-cover  bg-[url('./Assets/blog-bg.png')]  ">
        <div className="text-center items-center justify-center ">
          <h1 className="text-[#19a6a6] text-[32px] mb-3">Recent blog posts</h1>
        </div>
        <div className="flex items-center ">
          <div className="flex-1 ">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  lg:gap-x-30 lg:mx-[5em] md:mx-[4rem] sm:mx-[2rem] mx-[1rem] ">
              {blogCard.blogData.map((item) => {
                return (
                  <div className="">
                    <div className="items-center overflow-hidden ">
                      <img src={item.img} className="h-[15rem] w-full" alt="" />
                    </div>
                    <div className="h-[17rem] px-8   bg-[#f1f1f8]">
                      <div className=" pt-[4rem] h-7 text-start items-center  ">
                        <h1 className="sm:text-[16px] md:text-[24px] lg:text-[25px]">
                          {item.heading}
                        </h1>
                      </div>
                      <div className="pt-[10rem]">
                        <h4 className="">{item.title}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-center items-center justify-center">
          <button className="my-[3rem]   bg-white rounded-full w-[180px] h-[45px] border-[#19a6a6]  text-[#19a6a6] border-2 hover:bg-[#19a6a6] hover:text-white ">
            Learn About VCTI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
