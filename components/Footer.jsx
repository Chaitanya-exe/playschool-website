import React from 'react'
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";

function Footer() {
  return (
    <div className="md:flex-row flex flex-col justify-between *:max-w-[330px]">
      {/* 1 */}
      <div>
        <h2 className="heading text-[22px]"> About Us</h2>
        <ul className="list-disc list-inside">
          <li>
            Bright Beginnings Preschool is a nurturing space for children from
            Pre-Nursery to Grade 2.
          </li>
          <li>
            Our mission is to provide a joyful, safe, and creative learning
            environment.
          </li>
          <li>
            We focus on emotional, social, and intellectual development in early
            childhood.
          </li>
        </ul>
      </div>
      {/* 2 */}
      <div>
        <h2 className="heading text-[22px]"> Contact Information</h2>
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
          <SchoolIcon />
          <span>123 Learning Lane, Sunshine City, Haryana</span>
        </p>
      </div>
    </div>
  );
}

export default Footer
