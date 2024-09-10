import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-gradient-to-r from-[#FFF6EA] to-[#FFE8C7] h-[550px] rounded-3xl">
      <div className="subscribe h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <h6 className="text-base lg:text-xl text-primary-color font-medium text-center">
            Our Subscribe
          </h6>
          <p className="text-2xl lg:text-5xl text-dark-two-color text-balance font-semibold text-center leading-normal mt-2 mb-6">
            Subscribe To Get The Latest <br />
            Promo from Jez Salad
          </p>
          <p className="text-base text-dark-two-color text-balance font-medium text-center leading-normal mb-20">
            We recommended you to subscribe to our promo program, <br />
            drop your email below to get daily update about us
          </p>
          <div className="w-1/2 relative">
            <input
              className="flex h-20 w-full rounded-full border px-3 py-2 focus-visible:outline-none "
              id="email"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
            <button className="lg:w-[170px] p-2 lg:p-0 h-14 rounded-full bg-primary-color text-white text-sm lg:text-lg absolute right-2 top-2 font-semibold flex items-center justify-center cursor-pointer transition tracking-wide`">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
