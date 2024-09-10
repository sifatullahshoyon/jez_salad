import React from "react";
import Container from "../Shared/Container";
import Slider from "../Slider";

const AboutUs = () => {
  return (
    <section className="py-[100px]">
      <div className="bg-gradient-to-r from-[#FFF6EA] to-[#FFE8C7]">
        <Container>
          <div className="flex flex-row  items-center h-[682px]">
            <div>
              <h1 className="text-5xl text-[#333333] font-semibold">
                What Are People <br />
                Saying <span>About Us</span>
              </h1>
              <p className="my-8 text-balance text-base text-[#999999] font-normal">
                We are very happy if you are satisfied with our <br /> service
                and products, let&apos;s read pure reviews from <br /> customers
                who bought our products.
              </p>
              <p className="mt-6 text-[#333333] text-5xl font-bold">
              02<small className="text-base text-[#CCCCCC]">/05</small>
            </p>
            </div>
            {/* Arrow Icon */}
            <div>
                {/* TODO: Slider work not finished */}
              {/* <Slider></Slider> */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutUs;
