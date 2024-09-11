"use client";
import React, { useRef } from "react";
import Container from "../Shared/Container";
import Slider from "../Slider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const AboutUs = () => {
  const swiperRef = useRef(null); // Ref to store Swiper instance

  // Function to go to the next slide
  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  // Function to go to the previous slide
  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <section className="py-[100px]">
      <div className="bg-gradient-to-r from-[#FFF6EA] to-[#FFE8C7] h-full py-5">
        <Container>
          <div className="flex flex-col lg:flex-row items-center h-full lg:h-[682px] pl-5 lg:pl-5">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl lg:text-5xl text-[#333333] font-semibold">
                What Are People <br />
                Saying <span className="text-primary-color">About Us</span>
              </h1>
              <p className="my-8 text-balance text-sm lg:text-base text-[#999999] font-normal">
                We are very happy if you are satisfied with our <br /> service
                and products, let&apos;s read pure reviews from <br /> customers
                who bought our products.
              </p>
              <p className="my-6 text-[#333333] text-3xl lg:text-5xl font-bold">
                02<small className="text-base text-[#CCCCCC]">/05</small>
              </p>
              {/* Left and Right Buttons */}
              <div className="flex">
                <button
                  onClick={handlePrevClick}
                  className="mr-6 bg-primary-color  w-14 h-14 rounded-lg flex justify-center items-center"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={handleNextClick}
                  className="bg-primary-color  w-14 h-14 rounded-lg flex justify-center items-center"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
              <Slider swiperRef={swiperRef} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutUs;
