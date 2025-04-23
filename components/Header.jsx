"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuComp from "./Menu";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const handleScrollToSection = (id, offset = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -offset;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="py-4 relative z-50 ">
      <div className="md:px-20 px-4 flex relative justify-start gap-56 items-center">
        {/* Logo */}
        <div className="text-nowrap">
          <p className="heading md:text-[44px] text-[24px] relative -rotate-2">
            Rising Star{" "}
            <span className="absolute text-p_yellow -z-10 left-2 text-nowrap ">
              Rising star
            </span>
          </p>
        </div>

        {/* TABS */}
        <div className="text-white max-sm:hidden   flex justify-center items-center gap-5">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("home", 100);
            }}
            className="hover:bg-white hover:text-dark_text text-phover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Home</span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("about", 100);
            }}
            className="hover:bg-white rounded-full hover:text-dark_text px-3 py-2 "
          >
            {/* <MenuComp text="About us" /> */}
            About us
            <ArrowDropDownIcon />
          </a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("cta", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2 "
          >
            {/* <MenuComp text="Admissions" /> */}
            Admissions
            <ArrowDropDownIcon />
          </a>
          <a
            href="#programms"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("programms", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Programms</span>
          </a>
          <a
            href="#form"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("form", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Contact Us</span>
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("faq", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">FAQs</span>
          </a>
          <a
            href="#why"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("why", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Facilities</span>
          </a>
          <a
            href="#links"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("links", 100); // 100px offset (e.g., navbar height)
            }}
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Links</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
