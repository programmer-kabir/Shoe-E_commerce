import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Content from "../../../Component/Content/Content";
import { BiRightArrowAlt } from "react-icons/bi";

const Banner = () => {
  return (
    <Content>
      <div className="pt-16">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // navigation={true}
          pagination={{
            clickable: false,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative ">
            <img
              className="w-[1280px]  absolute "
              src="https://i.ibb.co/Fh1jfcF/slide-1.jpg"
            />
            <div className="absolute  z-50 mt-36 space-y-3 ml-32 text-white">
              <h3 className="text-2xl">Deals and Promotions</h3>
              <h2 className="text-5xl font-semibold">
                Sneakers & Athletic Shoes
              </h2>
              <h3 className="text-4xl">from $9.99</h3>
              <button className="button ">
                shop now <BiRightArrowAlt className="w-7 h-5" />{" "}
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[1280px] h-[500px]"
              src="https://i.ibb.co/XZVYgdB/slide-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[1280px] h-[500px]"
              src="https://i.ibb.co/tXt2LgJ/slide-3.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Content>
  );
};

export default Banner;
