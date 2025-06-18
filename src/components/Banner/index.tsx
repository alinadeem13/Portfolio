import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="flex justify-center items-center flex-col gap-2 sm:gap-4 w-full h-full px-4 mt-6 sm:mt-10">
      <h1 className="text-center text-black font-smooch-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl max-w-4xl">
        Passionate Frontend Developer and Technology Enthusiast
      </h1>
      <p className="text-center text-black text-base sm:text-xl md:text-2xl font-roboto max-w-2xl mt-2">
        I code beautifully simple things, bring your ideas to life and I love
        what I do.
      </p>
      <div className="mt-4 sm:mt-6">
        <Image
          src="/assets/images/avatar.png"
          alt="Profile picture"
          width={160}
          height={160}
          className="rounded-full w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]"
          priority
        />
      </div>
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mt-4 sm:mt-6">
        <Image
          src="/assets/images/hero-devices.png"
          alt="Devices showcase"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
