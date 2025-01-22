import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const toggleMore = () => {
    setIsMore((isMore) => !isMore);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className=" font-semibold">
      <div
        className={`flex px-8 justify-between items-center py-3  ${
          isOpen ? "bg-[#0000FF] overflow-hidden h-full" : ""
        }`}
      >
        <div className={`flex gap-4 items-center 4 py-3  `}>
          <NavLink to="/">
          <svg
            className=""
            role="img"
            aria-label="Logo Ableton"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="21"
            viewBox="0 0 45 21"
          >
            <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
          </svg>
          </NavLink>

          <div
            onClick={toggleMenu}
            className="md:hidden flex gap-1 items-center cursor-pointer"
          >
            <div className="flex gap-1 items-center">
              <h1>Menu</h1>
              {isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </div>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex gap-6 text-sm font-semi-bold">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                })}
                to="live"
              >
                Live
              </NavLink>
              <NavLink to="push">Push</NavLink>
              <NavLink to="move">Move</NavLink>
              <NavLink to="note">Note</NavLink>
              <NavLink to="links">Links</NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-600" : "")}
                to="shop"
              >
                Shop
              </NavLink>
              <NavLink to="packs">Packs</NavLink>
              <NavLink to="help">Help</NavLink>
              <NavLink onClick={toggleMore} to="more">
                More <span className="font-bold ">{isMore ? "-" : "+"}</span>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-4 justify-between items-center">
            <div className=" font-bold">
              
              <NavLink className="text-[#0000FF]" to="#">Try Live 12 for free</NavLink>
            </div>
            <nav className="text-sm font-semi-bold">
            <NavLink to="login">Login or register</NavLink>
            </nav>
          </div>
        </div>
      </div>

      {/* for small screens */}
      <nav
        onClick={closeMenu}
        className={` text-white  ease-in-out text-left px-6 transition-all transform duration-500 ${
          isOpen ? "bg-[#0000FF] block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 text-sm font-semi-bold">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "blue" : "" })}
            to="live"
          >
            Live
          </NavLink>
          <NavLink to="push">Push</NavLink>
          <NavLink to="move">Move</NavLink>
          <NavLink to="note">Note</NavLink>
          <NavLink to="links">Links</NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            to="shop"
          >
            Shop
          </NavLink>
          <NavLink to="packs">Packs</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="more">More</NavLink>
          <div className="flex-col md:hidden justify-between items-center">
            <div className=" font-bold pb-2">
            <NavLink className="text-[#0000FF]" to="#">Try Live 12 for free</NavLink>
            </div>
            <nav className="text-sm font-semi-bold">
              
              <NavLink to="login">Login or register</NavLink>
            </nav>
          </div>
          <div className="flex-col justify-between items-center py-4 gap-6">
            <h1>More on Ableton.com:</h1>
            <ul className="flex flex-col gap-3 text-sm font-semi-bold">
              <NavLink to="blog">Blog</NavLink>
              <NavLink>Ableton for the Classroom</NavLink>
              <NavLink>Ableton for Colleges and Universities</NavLink>
              <NavLink>Certified Training</NavLink>
              <NavLink>About Ableton</NavLink>
              <NavLink>Jobs</NavLink>
              <NavLink>Apprenticeships</NavLink>
              <div>
                <h1 className="py-3">More from Ableton:</h1>
                <div className="grid grid-cols-4 gap-6 text-left">
                  <div>
                    <h1>Loop</h1>
                    <p>
                      Watch Talks, Performances and Features from Ableton's
                      Summit for Music Makers
                    </p>
                  </div>
                  <div>
                    <h1>Learning Music</h1>
                    <p>
                      Learn the fundamentals of music making right in your
                      browser.
                    </p>
                  </div>
                  <div>
                    <h1>Learning Synths</h1>
                    <p>
                      Get started with synthesis using a web-based synth and
                      accompanying lessons.
                    </p>
                  </div>
                  <div>
                    <h1>Making Music</h1>
                    <p>
                      Some tips from 74 Creative Strategies for Electronic
                      Producers.
                    </p>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
