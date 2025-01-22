import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const CompLatest = () => {
  return (
    <div className="pt-8 md:pt-28 sm:px-28 px-8 text-left">
      <div className="sm:flex justify-between items-center ">
        <div>
          <h1 className="md:text-4xl text-sm font-semibold sm:block hidden">
            The latest from Ableton
          </h1>
        </div>
        <nav className="hidden lg:block">
          <ul className="text-[#0000FF] flex text-[20px] font-semibold gap-4">
            <NavLink to="allposts">All posts</NavLink>
            <NavLink to="artists">Artists</NavLink>
            <NavLink to="news">News</NavLink>
            <NavLink to="downloads">Downloads</NavLink>
            <NavLink to="tutorials">Tutorials</NavLink>
            <NavLink to="videos">Videos</NavLink>
            <NavLink to="loop">Loop</NavLink>
          </ul>
        </nav>
        <div className="text-center mx-auto lg:hidden">
          <div className=" items-center gap-2 hidden sm:block ">
            <div className="flex items-center">
              <h1 className="text-[#0000FF] text-semibold">See all Posts</h1>
              <span>
                <AiOutlineRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompLatest;
