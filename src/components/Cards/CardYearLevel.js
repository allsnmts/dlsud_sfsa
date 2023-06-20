import React from "react";
import Image from "next/image"; // Import the Image component from next/image
import img from "../../../results/images/sections.png";

export default function CardSections() {
  return (
    <div className="bg-lightComponents shadow-lg dark:bg-darkComponents dark:text-light dark:border-light p-8 relative rounded-xl">
      <Image
        src={img}
        alt="profilePic"
        className="w-full h-auto lg:w-full md:inline-block md:w-full"
        priority
      />
    </div>
  );
}
