import Form from "@/components/Form";
import ProgramCard from "@/components/ProgramCard";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <section id="#home" className="relative -mt-24 pt-48 pb-10  ">
    {/* WAVES nd svgs */}
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
      <div className="-rotate-12 top-[330px] left-[25vw]  absolute">
        <img
          src="/svg/Bus.svg"
          width={120}
          height={200}
          alt="wave-svg"
          className="w- -full opacity-70" // Increased height
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

      {/* Hero */}

      <div className="max-w-[85vw]  mx-28 relative  flex flex-col md:flex-row justify-between gap-16">
        {/* Text Content */}
        <div className="max-w-[550px] text-p_white text-center md:text-left">
          <h1 className="heading text-5xl">
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
      <div className="flex flex-row-reverse justify-center gap-32 mx-40 my-24 relative">
        <Image
          src={"/svg/PaintBrush.svg"}
          width={"70"}
          height={"100"}
          alt="paintbrush"
          className="absolute right-0 rotate-12 bottom-12 opacity-65"
        />
        <Image
          src={"/svg/cookies.svg"}
          width={"80"}
          height={"100"}
          alt="paintbrush"
          className="absolute  -left-16 top-10 opacity-70"
        />

        <div className="w-[800px]">
          <h1 className="heading pb-3 text-p_red text-5xl">About us</h1>
          <div>
            <h2 className="sub-heading text-2xl py-2">
              Welcome to{" "}
              <span className="font-[700px] text-[20px] text-p_yello outlin py-0.5 px-1 rounded text-white bg-p_yellow rotate-6">
                Rising Stars
              </span>{" "}
              – Where Little Minds Shine Bright!
            </h2>
            <h3 className="para font-[500] text-[19px] pb-8">
              To foster a <span className="text-p_red">love for learning,</span>{" "}
              spark imagination, and help every child become kind,{" "}
              <span className="text-p_blue">confident </span>
              and <span className="text-p_green">capable.</span>
            </h3>
            <ul className="para text-[18px] space-y-3">
              <li>
                📚 A well-rounded curriculum blending academics, arts, and play
              </li>
              <li>
                🧠 Focus on social-emotional development and confidence-building{" "}
              </li>
              <li>
                🏃 Engaging indoor and outdoor activities for physical growth{" "}
              </li>
              <li>🧩 Small class sizes for personalized attention </li>
            </ul>
          </div>
        </div>

        <div className="relative bg-green-20 flex items-center justify-center">
          <img src={"/images/aboutimg.png"} className="w-[500px] " />
          <Image
            width={"900"}
            height={"400"}
            alt="svg"
            src={"/svg/blob1.svg"}
            className="w-[550px] -z-10 absolute top-4"
          />
        </div>
      </div>

      {/* PROGRAMMS */}
      <div className="my-28 relative text-p_red text-center">
        <h1 className="heading pb-3 text-5xl">Programms</h1>
        <Image
          src={"/svg/Park Swing.svg"}
          width={"80"}
          height={"100"}
          alt="paintbrush"
          className="absolute left-10 bottom-12 opacity-65"
        />
        <Image
          src={"/svg/Basketball.svg"}
          width={"120"}
          height={"100"}
          alt="paintbrush"
          className="absolute right-[450px] top-8 opacity-65"
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

        <div className="flex relative w-fit my-12 gap-10 mx-auto">
          {[
            {
              id: 1,
              title: "Pre-Nursery – A Joyful Start to Learning",
              icon: "/svg/Kids.svg",
              dec: "Introduce your little one to a world of wonder and discovery! Our Pre-Nursery program encourages play-based learning, language development, and social interaction in a safe, loving environment.",
              age: "Age 2–3",
              image: "/images/reading.png",
            },
            {
              id: 2,
              title: "Pre-Nursery – A Joyful Start to Learning",
              icon: "/svg/Kids.svg",
              dec: "Introduce your little one to a world of wonder and discovery! Our Pre-Nursery program encourages play-based learning, language development, and social interaction in a safe, loving environment.",
              age: "Age 2–3",
              image: "/images/reading.png",
            },
            {
              id: 3,
              title: "Pre-Nursery – A Joyful Start to Learning",
              icon: "/svg/Kids.svg",
              dec: "Introduce your little one to a world of wonder and discovery! Our Pre-Nursery program encourages play-based learning, language development, and social interaction in a safe, loving environment.",
              age: "Age 2–3",
              image: "/images/reading.png",
            },
            {
              id: 4,
              title: "Pre-Nursery – A Joyful Start to Learning",
              icon: "/svg/Kids.svg",
              dec: "Introduce your little one to a world of wonder and discovery! Our Pre-Nursery program encourages play-based learning, language development, and social interaction in a safe, loving environment.",
              age: "Age 2–3",
              image: "/images/reading.png",
            },
          ].map((card) => (
            <ProgramCard key={card.id} card={card} id={card.id} />
          ))}
        </div>
      </div>

      {/* WHY */}

      <div className="my-20 relative text-p_red text-center">
        <h1 className="heading pb-3 text-5xl capitalize">why choose us</h1>
        <h2 className="sub-heading text-lg ">
          A nurturing start makes all the difference. Here’s why parents trust
          us with their child’s early learning journey:
        </h2>
        <Image
          src={"/svg/Maths Learning.svg"}
          width={"300"}
          height={"200"}
          alt="paintbrush"
          className="absolute left-10 top-12 opacity-65"
        />

        <div className="flex items-baseline relative w-fit my-12 gap-16 mx-auto">
          {/* D1 */}
          <div className="max-w-[250px]">
            <div className="bg-p_yellow  outline-offset-8 rotate-6 outline-dashed outline-p_yellow p-2">
              <Image
                src={"/images/lib.png"}
                width={200}
                height={200}
                alt="w1"
                className="w-full"
              />
            </div>
            <div className="my-4 ">
              <h2 className="sub-heading text-lg text-dark_text">
                Experienced & Caring Educators
              </h2>
              <p className="text-dark_text/80 para">
                Our certified teachers specialize in early childhood education,
                creating engaging, loving classrooms that feel like home.
              </p>
            </div>
          </div>
          {/* D2 */}
          <div className="max-w-[250px]">
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
                Experienced & Caring Educators
              </h2>
              <p className="text-dark_text/80 para">
                Our certified teachers specialize in early childhood education,
                creating engaging, loving classrooms that feel like home.
              </p>
            </div>
          </div>
          {/* D3 */}
          <div className="max-w-[250px]">
            <div className="bg-p_blue h-[190px]  outline-offset-8 -rotate-6 outline-dashed outline-p_blue p-2">
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
                Experienced & Caring Educators
              </h2>
              <p className="text-dark_text/80 para">
                Our certified teachers specialize in early childhood education,
                creating engaging, loving classrooms that feel like home.
              </p>
            </div>
          </div>
          {/* D4 */}
          <div className="max-w-[250px]">
            <div
              className="px-4 relative py-2  rotate-6 bg-p_yellow"
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
                Experienced & Caring Educators
              </h2>
              <p className="text-dark_text/80 para">
                Our certified teachers specialize in early childhood education,
                creating engaging, loving classrooms that feel like home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative flex flex-col items-center min-h-96 my-20 bg-green-5">
        <Image
          src={"/svg/3wave.svg"}
          // src={"/svg/bottom-wave.svg"}
          width={"600"}
          height={"200"}
          alt="paintbrush"
          className="absolute w-full left-0 bottom-29 opacity-65"
        />
        <div className="absolute top-28 left-48  para text-xl text-white bg-p_yellow p-4 rounded-2xl -rotate-12">Call Us: +91-9876543210</div>
        <div className="absolute top-28 right-48 heading text-6xl bg-white rounded-full p-6 w-[90px] flex justify-center items-center h-[90px] text-p_blue font-bold">+</div>
        <Image
          src={"/images/grp.png"}
          width={"700"}
          height={"200"}
          alt="paintbrush"
          className="relative z-10"
        />

        <div className="sub-heading text-xl max-w-3xl text-center relative">
          <h2>
            Give your little one the perfect start with fun-filled activities,
            caring educators, and a nurturing environment that feels like home.
          </h2>
          <button className="px-6 py-3 my-3 bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition">
            Apply for Admission
          </button>
        </div>
      </div>

      {/* FORM */}
      <Form />
    </section>
  );
}
