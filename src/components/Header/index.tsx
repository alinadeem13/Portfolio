"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-6 md:px-30 my-4 md:my-15">
        <div className="logo-container relative">
          <h1 className="font-smooch-sans text-6xl font-bold tracking-wider">
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300 opacity-90">
              L
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300 opacity-95">
              I
            </span>
            <span className="inline-block w-4">
              {/* Add a space with width */}
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300 opacity-90">
              N
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              A
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              D
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              E
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              E
            </span>
            <span className="text-[#42f584] inline-block transform hover:scale-105 transition-transform duration-300">
              M
            </span>
          </h1>

          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#42f584] to-transparent rounded-full opacity-70"></div>
          <div className="absolute -top-1 right-5 w-2 h-2 rounded-full bg-[#42f584] opacity-75"></div>
        </div>

        <button
          className="hidden md:block bg-white text-[#42f584] px-6 py-2 rounded-full transition duration-300 ease-in-out border-2 border-[#42f584] hover:bg-[#42f584] hover:text-white font-medium"
          onClick={() => router.push(path === "/Contact" ? "/" : "/Contact")}
        >
          {path === "/Contact" ? "Home" : "Say Hello "}
        </button>

        <button
          className="md:hidden text-[#42f584] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={24} className="transition-all duration-300" />
          ) : (
            <Menu size={24} className="transition-all duration-300" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 flex flex-col items-center bg-white py-4 shadow-lg z-10">
          <button
            className="bg-white text-[#42f584] px-6 py-2 rounded-full transition duration-300 ease-in-out border-2 border-[#42f584] hover:bg-[#42f584] hover:text-white my-2 font-medium"
            onClick={() => {
              router.push(path === "/Contact" ? "/" : "/Contact");
              setIsMenuOpen(false);
            }}
          >
            {path === "/Contact" ? "Home" : "Say Hello "}
          </button>
        </div>
      )}
    </div>
  );
}
