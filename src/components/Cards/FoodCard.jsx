import Image from "next/image";
import React from "react";
import iconOne from "/public/assets/images/icon/iconOne.png";
import iconTwo from "/public/assets/images/icon/iconTwo.png";
import iconThree from "/public/assets/images/icon/iconThree.png";
import { FaArrowRight } from "react-icons/fa6";
import BtnPrimary from "../Shared/Buttons/BtnPrimary";

const FoodCard = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 ml-5 lg:ml-0">
      {/* Card 1 */}
      <div className="max-w-[350px] space-y-4 rounded-3xl border border-[rgb(255, 240, 218)] bg-white p-6 md:w-[350px] ">
        <Image
          src={iconOne}
          alt="icon"
          width={100}
          loading="lazy"
          placeholder="blur"
        />
        <div className="grid gap-2">
          <h1 className="pt-10 pb-2 text-2xl text-[#2B2B2B] font-semibold">
            Own fruit orchard
          </h1>
          <p className="text-balance text-base font-normal text-accent-color">
            Langsung dari Kebun Sendiri yang tersebar di setiap provinsi yang
            memiliki cabang toko Jez Salad.
          </p>
        </div>
        <button
          className={`w-40 h-12 rounded-full bg-white text-accent-color text-base font-semibold flex items-center justify-center cursor-pointer transition tracking-wide pl-0`}
        >
          Learn more <FaArrowRight className="ml-2" />
        </button>
      </div>
      {/* Card 2 */}
      <div className="max-w-[350px] space-y-4 rounded-3xl shadow-xl border border-[rgb(255, 240, 218)] bg-white p-6 md:w-[350px] ">
        <Image
          src={iconTwo}
          alt="icon"
          width={100}
          loading="lazy"
          placeholder="blur"
        />
        <div className="grid gap-2">
          <h1 className="pt-10 pb-2 text-2xl text-[#2B2B2B] font-semibold">
            #1 Healthy Fruit Salad
          </h1>
          <p className="text-balance text-base font-normal text-accent-color">
            The pioneer of healthy fruit salads that are delicious & suitable
            for all people with the best quality assurance.
          </p>
        </div>

        <BtnPrimary width="w-[170px]" height="h-[50px]" fontSize={16}>
          Learn more <FaArrowRight className="ml-2" />
        </BtnPrimary>
      </div>
      {/* Card 3 */}
      <div className="max-w-[350px] space-y-4 rounded-3xl border border-[rgb(255, 240, 218)] bg-white p-6 md:w-[350px] ">
        <Image
          src={iconThree}
          alt="icon"
          width={100}
          loading="lazy"
          placeholder="blur"
        />
        <div className="grid gap-2">
          <h1 className="pt-10 pb-2 text-2xl text-[#2B2B2B] font-semibold">
            100 Top Brand
          </h1>
          <p className="text-balance text-base font-normal text-accent-color">
            We are one of the best brands in the Food and Beverage sector in
            Indonesia.
          </p>
        </div>
        <button
          className={`w-40 h-12 rounded-full bg-white text-accent-color text-base font-semibold flex items-center justify-center cursor-pointer transition tracking-wide pl-0`}
        >
          Learn more <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
