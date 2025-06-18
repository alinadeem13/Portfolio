import React from "react";

export default function HeroText({
  titleText,
  description,
}: {
  titleText: string;
  description?: string;
}) {
  return (
    <div className="flex justify-center md:items-center flex-col gap-4 w-full h-full bg-[#42f584] w-full pt-20 pb-35 xs:pb-20">
      <h1 className="font-smooch-sans text-bold text-center text-6xl text-[#ffffff] xs:text-5xl">
        {titleText}
      </h1>
      <p className="xs:max-w-[95vw] md:max-w-[50vw] w-full text-center font-roboto text-2xl text-[#ffffff] xs:text-xl xs:justify-start">
        {description}
      </p>
    </div>
  );
}
