"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuComp from "./Menu";
import Image from "next/image";

function Header() {
  // const [anchorEl, setAnchorEl] = useState(null);
  //      const open = Boolean(anchorEl);
  //      const handleClick = (event) => {
  //        setAnchorEl(event.currentTarget);
  //      };
  //      const handleClose = () => {
  //        setAnchorEl(null);
  //      };

  return (
    <nav className="py-4 relative z-50 ">
    

      <div className="px-20 flex relative justify-start gap-56 items-center">
        {/* Logo */}
        <div className="text-nowrap">
          <p className="heading text-[44px] relative -rotate-2">
            Rising Star{" "}
            <span className="absolute text-p_yellow -z-10 left-2 text-nowrap ">
              Rising star
            </span>
          </p>
        </div>

        {/* TABS */}
        <div className="text-white  flex justify-center items-center gap-5">
          <a
            href="home"
            className="hover:bg-white hover:text-dark_text text-phover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Home</span>
          </a>
          <a className="hover:bg-white rounded-full hover:text-dark_text px-3 py-2 ">
            <MenuComp text="About us" />
          </a>
          <a
            href="home"
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2 "
          >
            <MenuComp text="Admissions" />
          </a>
          <a
            href="home"
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Opportunities</span>
          </a>
          <a
            href="home"
            className="hover:bg-white hover:text-dark_text rounded-full px-3 py-2"
          >
            <span className="">Contact us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

