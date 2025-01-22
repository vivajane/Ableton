import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-bgimg sm:px-24 px-8 bg-center bg-cover h-max sm:h-screen  bg-no-repeat text-white">
      <NavLink to="move">
      <h1 className="md:pt-28 pt-10 text-[20px] text-left sm:text-[45px] lg:text-[85px]  font-semibold leading-snug">
        Create faster than you can overthink
      </h1>
      <div className="flex items-center gap-2">
        <a className="underline text-[14px] sm:text-3xl pb-60 sm:pb-0 " href="# ">
          Get Move{" "}
        </a>
        <span>
          <AiOutlineRight />
        </span>
      </div>
      </NavLink>
    </div>
  );
};

export default Hero;
