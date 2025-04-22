import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

function Footer() {
  return (
    <section 
    id="links" className="relative bg-gradient-to-t from-p_red to-p_yellow overflow-hidden mt-10 py-28 text-p_white">
      <div className="w-full bottom-0 absolute ">
        <img
          src="/svg/wave.svg"
          width={1000}
          height={1000}
          alt="wave-svg"
          className="w-full h-full"
        />
      </div>

      <div className="relative   md:flex-row bg-orane-400 textp_white  md:px-28 flex flex-col justify-between *:max-w-[340px]">
        {/* 1 */}
        <div>
          <h2 className="heading text-[24px]"> About Us</h2>
          <ul className="list-disc list-inside">
            <li className="para">
              Bright Beginnings Preschool is a nurturing space for children from
              Pre-Nursery to Grade 2.
            </li>
            <li className="para">
              Our mission is to provide a joyful, safe, and creative learning
              environment.
            </li>
            <li className="para">
              We focus on emotional, social, and intellectual development in
              early childhood.
            </li>
          </ul>
        </div>
        {/* 2 */}
        <div className="">
          <h2 className="heading text-[24px]"> Contact Information</h2>
          <div className="space-y-2 *:space-x-2 para">
            <p>
              <PhoneIcon />
              <span>+91-9876543210</span>
            </p>
            <p>
              <EmailIcon />
              <span> info@brightbeginningschool.com</span>
            </p>
            <p>
              <SchoolIcon />
              <span>123 Learning Lane, Sunshine City, Haryana</span>
            </p>
            <p>
              <WatchLaterIcon />
              <span>Office Hours: Mon–Fri, 9 AM – 3 PM</span>
            </p>
          </div>
        </div>
        {/* 3 */}
        <div className="">
          <h2 className="heading text-[24px]"> Quick Links</h2>
          <div className="space-y-1 para flex flex-col capitalize *:space-x-2">
            <a href="#home">home</a>
            <a href="#about">About</a>
            <a href="#programms">Programms</a>
            <a href="#form">form</a>
            <a href="#faq">faqs</a>
          </div>
        </div>
        {/* 4 */}
        <div className="para">
          <h2 className="heading text-[24px]">Stay Connected</h2>
          <div className="space-y-1 flex flex-col capitalize *:space-x-2">
            <a href="/">
              <FacebookIcon />
              <span>facebook</span>
            </a>
            <a href="/">
              <YouTubeIcon />
              <span>YouTube</span>
            </a>
            <a href="/">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href="/">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
