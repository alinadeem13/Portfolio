import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full h-full bg-[#42f584] min-h-[50vh]">
      <div className="logo-container relative">
        <h1 className="font-smooch-sans text-6xl font-bold tracking-wider">
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            A
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300 opacity-90">
            L
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300 opacity-95">
            I
          </span>
          <span className="inline-block w-4">
            {/* Add a space with width */}
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300 opacity-90">
            N
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            A
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            D
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            E
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            E
          </span>
          <span className="text-[#ffffff] inline-block transform hover:scale-105 transition-transform duration-300">
            M
          </span>
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ffffff] to-transparent rounded-full opacity-70"></div>
        <div className="absolute -top-1 right-5 w-2 h-2 rounded-full bg-[#42f584] opacity-75"></div>
      </div>
      <div className="min-w-[20vh] max-w-[20vh]">
        <p className=" text-[#ffffff] text-center text-3xl font-smooch-sans">
          Living, learning, & leveling up one day at a time.
        </p>
      </div>
      <p className="text-[#ffffff] text-center text-3xl font-smooch-sans">
        Created by me &copy; 2025
      </p>
    </div>
  );
}
