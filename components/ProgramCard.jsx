import Image from "next/image";
import React from "react";

function ProgramCard({ card, id }) {
  return (
    <div
      key={id}
      className="text-dark_text hover:-translate-y-3 transition duration-150 hover:shadow-md ease-in-out bg-p_white shadow md:max-w-[310px] rounded-lg flex flex-col overflow-hidden"
    >
      <Image
        src={card.image}
        width={"300"}
        height={"300"}
        alt="img"
        className="w-full max-sm:h-[180px] object-cover object-center"
      />
      <div className="bg-p_white mx-auto -mt-10 w-32 h-32 rounded-full">
        <Image
          src={card.icon}
          width={"40"}
          height={"20"}
          alt="img"
          className="mx-auto py-2"
        />
      </div>
      <div className="flex-1 -mt-20 text-start p-3 ">
        <h2 className="sub-heading text-[18px]">{card.title}</h2>
        <h2 className="para text-light_text text-[15px]">{card.dec}</h2>
        <h4 className="bg-p_green text-white px-2.5 py-1 w-fit text-sm my-2 rounded-full">
          <span>{card.age} yrs</span>
        </h4>
      </div>
        <button className=" px-6 py-2 mb-3 mx-2 bg-p_yello bg-blue-400 hover:bg-blue-500 text-p_white font-semibold rounded-xl transition">
          Read more
        </button>
    </div>
  );
}

export default ProgramCard;
