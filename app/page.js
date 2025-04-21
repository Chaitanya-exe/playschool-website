import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section id="#home" className="relative -mt-24 pt-48 pb-10  ">
      <div className="w-full rotate-180 top-0 absolute">
        <img
          src="/svg/wave.svg"
          width={1200}
          height={1200}
          alt="wave-svg"
          className="w-full h-full" // Increased height
        />
      </div>
      <div className="w-full top-40 -z-10 absolute">
        <img
          src="/svg/wave2.svg"
          width={1000}
          height={1200}
          alt="wave-svg"
          className="w-full h-full" // Increased height
        />
      </div>
      <div className="-rotate-12 top-[350px] left-[25vw]  absolute">
        <img
          src="/svg/Bus.svg"
          width={100}
          height={200}
          alt="wave-svg"
          className="w- -full opacity-65" // Increased height
        />
      </div>
      <div className="rotate-12 top-60 right-20 absolute">
        <img
          src="/svg/letterF.svg"
          width={100}
          height={200}
          alt="wave-svg"
          className="" // Increased height
        />
      </div>

      {/* <svg
        className="absolute bottom-0 w-[120rem] right-10 -left-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          // fill="#ff5500"
          fill="#FF6F61"
          fill-opacity="1"
          d="M0,192L30,165.3C60,139,120,85,180,80C240,75,300,117,360,160C420,203,480,245,540,261.3C600,277,660,267,720,240C780,213,840,171,900,170.7C960,171,1020,213,1080,208C1140,203,1200,149,1260,122.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg> */}

      {/* Hero */}

      <div className="max-w-[85vw]  mx-28 relative  flex flex-col md:flex-row justify-between gap-16">
        {/* Text Content */}
        <div className="max-w-[500px] text-p_white text-center md:text-left">
          <h1 className="heading text-4xl">
            Build Stunning Websites with Ease
          </h1>
          <p className="mt-3 text-lg sub-heading">
            Power up your creativity with modern tools and pre-built components
            that scale with your ideas.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-p_yello bg-p_blu bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray/40 font-semibold text-gray-800 rounded-xl hover:bg-gray/70 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img src={"/images/heroImg.png"} />
        </div>
      </div>

      {/* ABOUT US */}
      <div className="flex flex-row-reverse justify-between mx-40 my-24">
        <div className="max-w-3xl">
          <h1 className="heading text-3xl">About us</h1>
          <div>
            <h2 className="sub-heading">
              At CreativeWorks, we believe in turning bold ideas into reality.
              Founded by a passionate team of developers and designers, our
              mission is to craft beautiful, functional, and impactful digital
              experiences that leave a lasting impression.
            </h2>
          </div>
        </div>

        <div className="relative bg-green-20 flex justify-center w-[520px]">
          <img src={"/images/aboutimg.png"} className="w-[400px] relative -mt-10" />
          <Image width={"700"} height={"400"} alt="svg" src={"/svg/blob1.svg"} className="w-full h-full -z-10 absolute top-4" />
        </div>
      </div>
    </section>
  );
}
