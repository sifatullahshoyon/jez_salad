"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img from "/public/assets/images/icon/iconOne.png";

const Slider = ({ swiperRef }) => {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Assign Swiper instance to ref
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px]">
            <div>
              <Image src={img} alt="img" />
            </div>
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold ">Product Name</h1>
              <p className="text-sm text-gray-500 dark:text-white/60">
                This is a brief description of the product. It highlights the
                key features and benefits.
              </p>
              <div className="text-lg font-semibold">$99.99</div>
            </div>
            <div className="flex gap-4">
              <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
                Add to Cart
              </button>
              <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                View Details
              </button>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide><h1>Slide 2</h1></SwiperSlide> */}
        {/* <SwiperSlide><h1>Slide 3</h1></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
