import React from "react";
import Container from "./Container";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-5 mt-[100px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* col 1 */}
          <div>
            <Link href="/">
              <p className="text-2xl text-primary-color font-bold text-balance">
                JEZ <span className="text-dark-two-color">SALAD</span>
              </p>
            </Link>
            <p className="mt-5 mb-16 font-normal text-base text-balance text-accent-color">
              Jez Salad is the pioneer of <br />
              healthy fruit salad with <br />
              high nutrition.
            </p>
            <p className="text-balance text-base font-normal text-[#2B2B2B]">
              &copy;Copyright Jez Salad
            </p>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="text-base text-primary-color font-semibold">
              Feature
            </h4>
            <ul>
              <li className="text-base text-accent-color font-normal mt-6">
                Menu
              </li>
              <li className="text-base text-accent-color font-normal mt-6">
                Promo
              </li>
              <li className="text-base text-accent-color font-normal mt-6">
                Contact
              </li>
              <li className="text-base text-accent-color font-normal mt-6">
                About Us
              </li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="text-base text-primary-color font-semibold">
              Get in Touch
            </h4>
            <div>
              <div className="flex flex-row items-center gap-5 mt-6">
                <IoLocationOutline className="text-primary-color text-lg font-bold" />
                <p className="text-base text-accent-color font-normal">
                  8819 Ohio St. South Gate, CA 90280
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 mt-6">
                <FaEnvelope className="text-primary-color text-lg font-bold" />
                <p className="text-base text-accent-color font-normal">
                  Ourstudio@hello.com
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 mt-6">
                <FaPhone className="text-primary-color text-lg font-bold" />
                <p className="text-base text-accent-color font-normal">
                  +1 386-688-3295
                </p>
              </div>
            </div>
          </div>
          {/* Col 4 */}
          <div>
            <div className="flex gap-8">
              <FaTwitter className="text-xl text-primary-color cursor-pointer" />
              <FaLinkedin className="text-xl text-primary-color cursor-pointer" />
              <FaInstagram className="text-xl text-primary-color cursor-pointer" />
            </div>
            <p className="text-base text-accent-color font-normal mt-5">
              Follow our social media.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
