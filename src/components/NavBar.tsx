"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex px-5 justify-between items-center   border-[1px] border-[#ffffff1d] p-2.5 relative">
      <Link href="/" className="flex relative h-8 items-center ">
        <p className="text-md text-center flex items-center h-full">D o t a</p>
        <p className="absolute flex h-full items-center top-0 left-4 text-gray-500 -z-10 text-3xl">
          2
        </p>
      </Link>

      <div className="hidden md:flex gap-6">
        <Link
          href="/rankings"
          className="hover:text-yellow-400 transition-colors"
        >
          Rankings
        </Link>
        <Link href="/teams" className="hover:text-yellow-400 transition-colors">
          Teams
        </Link>
      </div>

      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-.5" : "mb-1.5"
          }`}
        ></span>
        <span
          className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : "mb-1.5"
          }`}
        ></span>
        <span
          className={`bg-white h-0.5 w-6 rounded-full transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : ""
          }`}
        ></span>
      </button>

      <div
        className={`
        md:hidden absolute z-40 top-full left-0 w-full backdrop-blur-[10px] bg-[#000000a8]  border-t border-[#ffffff1d]
        overflow-hidden transition-all duration-300 ease-in-out rounded-b-[5px]
        ${isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="flex flex-col ]  w-full  items-center py-4 gap-4 ">
          <Link
            href="/rankings"
            className="w-full text-center py-2 hover:bg-[#ffffff15] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Rankings
          </Link>
          <Link
            href="/teams"
            className="w-full text-center py-2 hover:bg-[#ffffff15] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Teams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
