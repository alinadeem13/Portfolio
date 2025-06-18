"use client";
import React from "react";
import { FaComment } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Collaboration() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-28 px-4 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 font-smooch-sans">
        Interested in collaborating with me?
      </h1>
      <p className="text-base md:text-lg max-w-md mx-auto">
        I&apos;m always open to discussing work or partnership opportunities.
      </p>
      <button
        className="bg-white text-[#42f584] px-4 md:px-6 py-3 md:py-4 rounded-full transition duration-300 ease-in-out border-2 border-[#42f584] hover:bg-[#42f584] hover:text-white flex items-center gap-2 my-6 md:my-8"
        onClick={() => router.push("/Contact")}
      >
        <FaComment className="inline-block" />
        <span>Start a conversation</span>
      </button>
    </div>
  );
}
