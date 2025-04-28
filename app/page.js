"use client";

import AccordionUsage from "@/components/AccordianComp";
import Form from "@/components/Form";
import ProgramCard from "@/components/ProgramCard";
import Image from "next/image";
import React from "react";
import { animate, motion, stagger } from "framer-motion";
import { duration } from "@mui/material";

export const yVariant = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 12,
      mass: 0.8,
      duration: 0.6,
      staggerChildren: 0.2, // applies if used on a parent motion.div
    },
  },
};

export default function Home() {
  return (
    <main className="relative -mt-24 pt-0 md:pt-48 pb-10 overflow-x-hidden  ">
      {/* WAVES nd svgs */}
      <div className="w-full  bg-red-40 rotate-180 -top-8 md:top-0 absolute">
        <img
          src="/svg/wave.svg"
          width={1200}
          height={1200}
          alt="wave-svg"
          className="w-full h-full"
        />
      </div>
      <div className="w-full md:top-36 max-sm:top-0 -z-10 absolute">
        <img
          src="/svg/wave2.svg"
          width={1000}
          height={1200}
          alt="wave-svg"
          className="w-full h-full"
        />
      </div>
      <div className="-rotate-12 top-[400px] md:top-[330px] left-3 md:left-[25vw] absolute">
        <img
          src="/svg/Bus.svg"
          width={120}
          height={200}
          alt="wave-svg"
          className="max-sm:w-[85px] opacity-70 justify-start" // Increased height
        />
      </div>
      <div className="rotate-12 max-sm:hidden md:top-60 md:right-20 absolute">
        <img
          src="/svg/letterF.svg"
          width={100}
          height={200}
          alt="wave-svg"
          className="max-sm:w-[40px]"
        />
      </div>

      {/* Hero */}

      <section
        id="home"
        className="md:max-w-[85vw] max-sm:-z-40 max-sm:py-32 max-sm:bg-orange-400/90  md:mx-28 px-6 relative  flex flex-col md:flex-row justify-between gap-10 md:gap-16"
      >
        {/* Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="max-w-[550px] text-p_white text-center md:text-left"
        >
          <h1 className="heading md:text-5xl max-sm:text-4xl">
            Building Bright Futures
          </h1>
          <p className="mt-3 text-lg sub-heading">
          Welcome to Rising Star Pre-School, where young minds flourish in a secure, nurturing environment. Our CCTV-monitored classrooms give parents peace of mind while their children explore, learn, and grow. Now accepting admissions from Pre-Nursery to 2nd Grade with no admission fee!
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex  flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-p_yello bg-p_blu bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray/40 font-semibold text-gray-800 rounded-xl hover:bg-gray/70 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <div className="max-sm:absolute right-0 top-96 max-sm:-z-20">
          <img src={"/images/heroImg.png"} className="max-sm:w-[250px] " />
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="about"
        className="flex md:flex-row-reverse flex-col justify-center gap-10 md:gap-32 mx-4 md:mx-40 my-24 relative"
      >
        <Image
          src={"/svg/PaintBrush.svg"}
          width={"70"}
          height={"100"}
          alt="paintbrush"
          className="absolute max-sm:w-[50px] right-0 rotate-12 md:bottom-12 bottom-0 opacity-65"
        />
        <Image
          src={"/svg/cookies.svg"}
          width={"80"}
          height={"100"}
          alt="paintbrush"
          className="absolute max-sm:w-[50px] right-0  md:-left-16 md:top-20 top-0 opacity-10 "
        />

        <motion.div
          variants={yVariant}
          initial="initial"
          whileInView="animate"
          className="md:w-[800px]"
        >
          <motion.h1
            variants={yVariant}
            className="heading md:pb-3 text-p_red text-4xl md:text-5xl"
          >
            About us
          </motion.h1>
          <motion.div variants={yVariant}>
            <h2 className="sub-heading text-2xl md:py-2">
              Welcome to{" "}
              <span className="font-[700px] text-[20px] py-0.5 px-1 rounded text-white bg-p_yellow rotate-6">
                Rising Stars
              </span>{" "}
              – Where Little Minds Shine Bright!
            </h2>
            <h3 className="para font-[500] text-[19px] md:pb-8 pb-6">
              To foster a <span className="text-p_red">love for learning,</span>{" "}
              spark imagination, and help every child become kind,{" "}
              <span className="text-p_blue">confident </span>
              and <span className="text-p_green">capable.</span>
            </h3>
            <ul className="para text-[18px] space-y-3">
              <li>
                📚 Foundation for lifelong learning through play-based education and personalized attention
              </li>
              <li>
                🧠 Experienced educators fostering creativity, critical thinking, and social skills{" "}
              </li>
              <li>
                🏃 Balanced curriculum combining academics with engaging extracurricular activities{" "}
              </li>
              <li>🧩 Small class sizes for personalized attention </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}
          className="relative bg-green-20 flex items-center justify-center"
        >
          <img src={"/images/aboutimg.png"} className="w-[500px] " />
          <Image
            width={"900"}
            height={"400"}
            alt="svg"
            src={"/svg/blob1.svg"}
            className="w-[550px] -z-10 absolute top-4"
          />
        </motion.div>
      </section>

      {/* PROGRAMMS */}
      <section
        id="programms"
        className="md:my-28 my-16 relative text-p_red text-center"
      >
        <h1 className="heading md:pb-3 text-4xl md:text-5xl">Programms</h1>
        <Image
          src={"/svg/Park Swing.svg"}
          width={"80"}
          height={"100"}
          alt="paintbrush"
          className="absolute md:left-10 md:bottom-12 bottom-[945px] opacity-65"
        />
        <Image
          src={"/svg/Basketball.svg"}
          width={"120"}
          height={"100"}
          alt="paintbrush"
          className="absolute bottom-[430px] -right-4 md:right-[450px] md:top-8 opacity-65"
        />

        <svg
          className="absolute top-16 -rotate-3 w-[120rem] right-10 -left-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FF6F61"
            fillOpacity="0.3"
            d="M0,192L30,165.3C60,139,120,85,180,80C240,75,300,117,360,160C420,203,480,245,540,261.3C600,277,660,267,720,240C780,213,840,171,900,170.7C960,171,1020,213,1080,208C1140,203,1200,149,1260,122.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>

        <div className="flex md:flex-row max-sm:mx-6 flex-col relative w-fit md:my-12 my-6 gap-4 md:gap-10 mx-auto">
          {[
            {
              id: 1,
              title: "Pre-Nursery",
              icon: "/svg/Kids.svg",
              dec: "Sensory exploration, language development, and social interaction in a playful setting",
              age: "(2-3 years)",
              image: "/images/reading.png",
            },
            {
              id: 2,
              title: "Nursery",
              icon: "/svg/Kids.svg",
              dec: "Enhanced cognitive development through structured play and foundational concepts",
              age: "(3-4 years)",
              image: "/images/reading.png",
            },
            {
              id: 3,
              title: "Kindergarten ",
              icon: "/svg/Kids.svg",
              dec: "Reading readiness, number concepts, and creative expression \n",
              age: "(4-5 years)",
              image: "/images/reading.png",
            },
            {
              id: 4,
              title: "Primary School",
              icon: "/svg/Kids.svg",
              dec: "Curriculum-based learning with personalized attention and activity-based teaching",
              age: "(1st-2nd Grade)",
              image: "/images/reading.png",
            },
          ].map((card) => (
            <ProgramCard key={card.id} card={card} id={card.id} />
          ))}
        </div>
      </section>

      {/* WHY */}

      <section
        id="why"
        className="md:my-20 my-12 relative text-p_red text-center"
      >
        <h1 className="heading max-sm:pb-3 text-4xl md:text-5xl capitalize">
          why choose us
        </h1>
        <h2 className="sub-heading text-lg ">
          A nurturing start makes all the difference. Here’s why parents trust
          us with their child’s early learning journey:
        </h2>
        <Image
          src={"/svg/Maths Learning.svg"}
          width={"300"}
          height={"200"}
          alt="paintbrush"
          className="max-sm:hidden absolute left-10 top-12 opacity-65"
        />

        <div className="flex md:flex-row *:flex *:flex-col *:items-center  flex-col mx-12 justify-center items-center md:items-baseline relative md:w-fit my-12 gap-6 md:gap-16 md:mx-auto">
          {/* D1 */}
          <div className="md:max-w-[250px] ">
            <div className="bg-p_yellow max-sm:max-w-[200px]  outline-offset-8 rotate-6 outline-dashed outline-p_yellow p-2">
              <Image
                src={"/images/lib.png"}
                width={200}
                height={200}
                alt="w1"
                className="w-full max-sm:w-[200px]"
              />
            </div>
            <div className="my-4 ">
              <h2 className="sub-heading text-lg text-dark_text">
                Transparent Caregiving
              </h2>
              <p className="text-dark_text/80 para">
                Live CCTV access for parents to stay connected throughout the day
              </p>
            </div>
          </div>
          {/* D2 */}
          <div className="md:max-w-[250px]">
            <div className="bg-p_green w-[220px] h-[220px] rounded-full overflow-hidden  outline-offset-8 rotate-[23deg] otline-dashed outline-p_green p-2">
              <Image
                src={"/images/lib.png"}
                width={200}
                height={200}
                alt="w1"
                className="w-full h-full rounded-full object-cover object-center"
              />
            </div>
            <div className="my-5 ">
              <h2 className="sub-heading text-lg text-dark_text">
                Comprehensive Facilities
              </h2>
              <p className="text-dark_text/80 para">
                Transportation, air-conditioned classrooms, smart classes, indoor/outdoor play areas
              </p>
            </div>
          </div>
          {/* D3 */}
          <div className="md:max-w-[250px]">
            <div className="bg-p_blue h-[190px]  max-sm:max-w-[200px]   outline-offset-8 -rotate-6 outline-dashed outline-p_blue p-2">
              <Image
                src={"/images/lib.png"}
                width={200}
                height={200}
                alt="w1"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="my-5 ">
              <h2 className="sub-heading text-lg text-dark_text">
                Skill Development
              </h2>
              <p className="text-dark_text/80 para">
                Extracurricular activities including skating, clay pottery, and taekwondo
              </p>
            </div>
          </div>
          {/* D4 */}
          <div className="md:max-w-[250px]">
            <div
              className="px-4 relative py-2  max-sm:max-w-[220px]   rotate-6 bg-p_yellow"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/lib.png"
                  width={200}
                  height={200}
                  alt="w1"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="my-4 ">
              <h2 className="sub-heading text-lg text-dark_text">
                Dedicated Spaces
              </h2>
              <p className="text-dark_text/80 para">
                Caring staff trained in early childhood education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        id="faq"
        className="space-y-4 md:my-20 max-sm:mx-4 my-12 relative"
      >
        <h1 className="heading text-p_red text-center my-3 md:pb-3 text-4xl md:text-5xl capitalize">
          FAQs
        </h1>
        <Image
          src={"/images/family.png"}
          width={200}
          height={200}
          alt="cubes"
          className="absolute md:bottom-10 -top-14 opacity-60 -right-6 max-sm:w-[150px]  md:right-12"
        />

        <AccordionUsage
          ques={"What safety measures does Rising Star implement?"}
          ans={
            "Our comprehensive safety system includes 24/7 CCTV surveillance, trained staff and secure entry protocols"
          }
        />
        <AccordionUsage
          ques={"What are your operating hours?"}
          ans={
            "We operate from 8:00 AM to 3:00 PM, Monday through Friday, with flexible daycare options available."
          }
        />
        <AccordionUsage
          ques={"What is your teacher-to-student ratio?"}
          ans={
            "We maintain low teacher-to-student ratios to ensure personalized attention and care for every child."
          }
        />
        {/* <AccordionUsage
          ques={"Are the educators at Kidzee qualified and experienced?"}
          ans={
            "Yes, Kidzee educators are certified professionals with extensive experience in early childhood education. We maintain a low teacher-student ratio to ensure personalized attention."
          }
        /> */}
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="relative flex flex-col items-center min-h-96 my-20 bg-green-5"
      >
        <Image
          src={"/svg/3wave.svg"}
          // src={"/svg/bottom-wave.svg"}
          width={"600"}
          height={"200"}
          alt="paintbrush"
          className="absolute w-full left-0 md:bottom-29 max-sm:bottom-48 opacity-65"
        />
        <div className="absolute top-5 left-0 md:top-28 md:left-48  para md:text-xl text-white bg-p_yellow md:p-4 p-2 rounded-2xl -rotate-12">
          Call Us: +91-9876543210
        </div>
        <div className="absolute max-sm:hidden top-28 right-48 heading text-6xl bg-white rounded-full p-6 w-[90px] flex justify-center items-center h-[90px] text-p_blue font-bold">
          +
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <Image
            src={"/images/grp.png"}
            width={"700"}
            height={"200"}
            alt="paintbrush"
            className="relative z-10"
          />
        </motion.div>

        <motion.div
          variants={yVariant}
          initial="initial"
          whileInView="animate"
          className="sub-heading md:text-xl max-w-3xl text-center relative"
        >
          <motion.h2 variants={yVariant}>
            Give your little one the perfect start with fun-filled activities,
            caring educators, and a nurturing environment that feels like home.
          </motion.h2>
          <motion.button
            variants={yVariant}
            className="px-6 py-3 my-3 bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition"
          >
            Apply for Admission
          </motion.button>
        </motion.div>
      </section>

      {/* FORM */}
      <section id="form" className="relative md:py-10 max-sm:mx-4">
        <h1 className="heading text-p_red text-center my-3 pb-3 text-4xl md:text-5xl capitalize">
          Ask your queries
        </h1>

        <Form />
        <Image
          src={"/images/Alphabet Cubes.png"}
          width={200}
          height={200}
          alt="cubes"
          className="absolute md:bottom-5 bottom-0 max-sm:w-[100px] opacity-60  left-12"
        />
        <Image
          src={"/images/kids.png"}
          width={200}
          height={200}
          alt="cubes"
          className="absolute md:top-5  -top-20 max-sm:w-[100px] opacity-65  right-0 rotate-6"
        />
      </section>
    </main>
  );
}
