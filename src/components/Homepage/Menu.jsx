import React from "react";
import MenuCard from "../Cards/MenuCard";

const Menu = () => {
  return (
    <section className="pl-5 mb-[100px]">
      <p className="text-primary-color text-base lg:text-xl mb-3 text-center">
        MENU YANG MEMBUATMU JATUH CINTA
      </p>
      <h1 className="text-2xl lg:text-5xl text-dark-two-color font-semibold text-center leading-normal">
        ENJOY THE BEST MENU AND GET <br />
        <span className="text-primary-color">DISCOUNTS</span> AVAILABLE
      </h1>
      <MenuCard></MenuCard>
    </section>
  );
};

export default Menu;
