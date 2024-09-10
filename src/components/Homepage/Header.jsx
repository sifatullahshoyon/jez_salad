import React from "react";
import BtnPrimary from "../Shared/Buttons/BtnPrimary";
import bannerImg from "/public/assets/images/banner.png";
import Image from "next/image";
import Navbar from "../Shared/Navbar";

const Header = () => {
  return (
    <header className="relative pb-[100px]">
      <Navbar />
      <div className="bg-gradient-to-bl   from-[#FCBA60] absolute h-[500px] w-[1000px] right-0 top-0 -z-30 blur-2xl"></div>
      <div className="md:flex flex flex-col-reverse  md:flex-row justify-center items-center flex-wrap gap-5">
        {/* Content Part */}
        <div className="pl-5">
          <p className="lg:h-14 lg:rounded-full sm:rounded-3xl md:rounded-full bg-[#FFF0DC] flex justify-center items-center w-1/4 h-auto lg:w-[213px] text-balance text-base font-semibold text-primary-color mb-[30px] p-2 lg:p-0">
            #1 Best Healthy Salad
          </p>
          <p className="lg:w-[590px] text-accent-color lg:text-7xl md:text-4xl sm:text-2xl font-bold mb-[30px]">
            <span className="text-primary-color">Skip</span> The Diet, Just Eat
            Healthy With Jez Salad
          </p>
          <p className="text-secondary-color lg:text-xl text-base font-medium text-balance mb-[30px]">
            Imagine you don&#39;t need a diet because we provide <br /> healthy
            and delicious food for you!
          </p>
          <BtnPrimary width="w-48" height="h-[68px]" fontSize={18}>
            Order Food
          </BtnPrimary>
          <div className="mt-[88px] mb-5 flex gap-x-14 gap-y-5 flex-wrap">
            <div>
              <p className="text-2xl font-semibold text-accent-color">5.000+</p>
              <p className="text-base font-normal text-secondary-color">
                Customer
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-accent-color">8.000+</p>
              <p className="text-base font-normal text-secondary-color">
                Delivery
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-accent-color">1.000+</p>
              <p className="text-base font-normal text-secondary-color">
                Ratings
              </p>
            </div>
          </div>
        </div>
        {/* Image Part */}
        <div>
          <Image
            src={bannerImg}
            alt="banner img"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
