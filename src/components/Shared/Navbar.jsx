"use client";
import { useState, useRef, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import BtnPrimary from "./Buttons/BtnPrimary";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <div className="sticky top-0 z-50 w-full">
      <Container>
        <nav className="h-24 pt-10 flex items-center justify-between bg-white px-4 pb-5 text-black mb-24">
          {/* logo */}
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110">
            <Link href="/">
              <p className="text-2xl text-primary-color font-bold text-balance">
                JEZ <span className="text-dark-two-color">SALAD</span>
              </p>
            </Link>
          </div>
          {/* Menu */}
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <Link href="/">
              <li className="group flex  cursor-pointer flex-col accent-color font-semibold text-lg">
                Home
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary-color transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
            <li className="group flex  cursor-pointer flex-col accent-color font-semibold text-lg">
              Menu
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary-color transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col accent-color font-semibold text-lg">
              Contact
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary-color transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col accent-color font-semibold text-lg">
              About Us
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-primary-color transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          {/* Search Items */}
          <div className="hidden items-center justify-between gap-10 md:flex">
            <Link href="/login">
              <BtnPrimary
                width="w-[130px]"
                height="h-[54px]"
                fontSize="text-base"
              >
                Sign
              </BtnPrimary>
            </Link>
          </div>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <div className="z-50  gap-2 bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col rounded-lg text-base">
                <ul className="  ">
                  <Link href="/">
                    <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-primary-color ">
                      Home
                    </li>
                  </Link>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-primary-color ">
                    Menu
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-primary-color ">
                    Contact
                  </li>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-primary-color">
                    About Us
                  </li>
                </ul>
                <div className="cursor-pointer  px-6 py-2 text-white flex flex-col space-y-4 ">
                  <Link href="/login">
                    <BtnPrimary
                      width="w-[130px]"
                      height="h-[54px]"
                      fontSize="text-base"
                    >
                      Sign
                    </BtnPrimary>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
