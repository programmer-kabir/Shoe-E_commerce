import React from "react";
import Content from "../../../Component/Content/Content";

const Gallery = () => {
  return (
    <Content>
      
      <div className="flex mx-auto items-center justify-center  gap-5 mt-2 w-full">
        <div className="">
          <div className="grid grid-cols-2 gap-5 mb-3">
            <img
              className="lg:w-[430px] w-[392px] h-[250px]"
              src="https://i.ibb.co/wJNvLF3/banner-1.jpg"
              alt=""
            />
            <img
              className="lg:w-[430px] h-[250px] w-[392px] "
              src="https://i.ibb.co/jM5bnrX/banner-2.jpg"
              alt=""
            />
          </div>
          <img
            className="w-[840px] hidden md:inline h-[250px]"
            src="https://i.ibb.co/q5F66Tz/banner-3.jpg"
            alt=""
          />
        </div>
        <div className="w-1/3">
          <div className="w-[420px] ">
            <img
              className="lg:w-[420px] w-[392px]Ho h-[512px]"
              src="https://i.ibb.co/J7jKZgg/banner-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Content>
  );
};

export default Gallery;
