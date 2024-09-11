"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "/public/assets/images/aboutUs/about1.png";
import img2 from "/public/assets/images/aboutUs/about2.png";
import img3 from "/public/assets/images/aboutUs/about3.png";

const Slider = ({ swiperRef }) => {
  return (
    <div className="w-full">
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
          <div className="flex justify-between gap-5 pr-2 flex-wrap lg:flex-nowrap">
            <div className="w-[270px] md:w-[350px] rounded-lg bg-white p-6 shadow-lg space-y-4">
              <div className="flex justify-center ">
                <Image
                  src={img1}
                  alt="img"
                  width={90}
                  height={90}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 grid gap-2 pt-[60px]">
                {" "}
                {/* pt to push content down */}
                <h1 className="text-2xl font-medium text-[#2B2B2B]">
                  David Ken
                </h1>
                <p className="text-sm font-normal text-[#999999]">24 Years</p>
                <div className="text-base text-balance text-accent-color font-normal">
                  The salad is fresh!!! Don&apos;t ask about the sauce again,
                  it&apos;s really delicious, it&apos;s going to be routine. I
                  recommend this salad to all of you guys! because they really
                  take care of the quality.
                </div>
              </div>
            </div>
            {/* card 2  */}
            <div className="w-[270px] md:w-[350px] rounded-lg bg-white p-6 shadow-lg space-y-4">
              <div className="flex justify-center ">
                <Image
                  src={img2}
                  alt="img"
                  width={90}
                  height={90}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 grid gap-2 pt-[60px]">
                {" "}
                {/* pt to push content down */}
                <h1 className="text-2xl font-medium text-[#2B2B2B]">
                  Jennifer Sina
                </h1>
                <p className="text-sm font-normal text-[#999999]">21 Years</p>
                <div className="text-base text-balance text-accent-color font-normal">
                  The salad is fresh!!! Don&apos;t ask about the sauce again,
                  it&apos;s really delicious, it&apos;s going to be routine. I
                  recommend this salad to all of you guys! because they really
                  take care of the quality.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-between gap-5 pr-2 flex-wrap lg:flex-nowrap">
            <div className="w-[270px] md:w-[350px] rounded-lg bg-white p-6 shadow-lg space-y-4">
              <div className="flex justify-center ">
                <Image
                  src={img3}
                  alt="img"
                  width={90}
                  height={90}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 grid gap-2 pt-[60px]">
                {" "}
                {/* pt to push content down */}
                <h1 className="text-2xl font-medium text-[#2B2B2B]">
                  Selena Gomez
                </h1>
                <p className="text-sm font-normal text-[#999999]">22 Years</p>
                <div className="text-base text-balance text-accent-color font-normal">
                  The salad is fresh!!! Don&apos;t ask about the sauce again,
                  it&apos;s really delicious, it&apos;s going to be routine. I
                  recommend this salad to all of you guys! because they really
                  take care of the quality.
                </div>
              </div>
            </div>
            {/* card 2  */}
            <div className="w-[270px] md:w-[350px] rounded-lg bg-white p-6 shadow-lg space-y-4">
              <div className="flex justify-center ">
                <Image
                  src={img2}
                  alt="img"
                  width={90}
                  height={90}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 grid gap-2 pt-[60px]">
                {" "}
                {/* pt to push content down */}
                <h1 className="text-2xl font-medium text-[#2B2B2B]">
                  Jennifer Sina
                </h1>
                <p className="text-sm font-normal text-[#999999]">21 Years</p>
                <div className="text-base text-balance text-accent-color font-normal">
                  The salad is fresh!!! Don&apos;t ask about the sauce again,
                  it&apos;s really delicious, it&apos;s going to be routine. I
                  recommend this salad to all of you guys! because they really
                  take care of the quality.
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
