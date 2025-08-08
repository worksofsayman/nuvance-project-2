"use client";

import React, { useState, useEffect } from "react";
import TypingLoader from "@/components/TypingLoader";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const [phase, setPhase] = useState<"typing" | "svg" | "bunny" | "hero" | "menu">("typing");

  useEffect(() => {
    if (phase === "svg") {
      const svgTimer = setTimeout(() => {
        setPhase("bunny");
      }, 4000); // 4s SVG animation duration
      return () => clearTimeout(svgTimer);
    }
    if (phase === "bunny") {
      const bunnyTimer = setTimeout(() => {
        setPhase("hero");
      }, 1000); // 1s delay before hero
      return () => clearTimeout(bunnyTimer);
    }
  }, [phase]);

  return (
    <>
      {phase === "typing" && (
        <TypingLoader onFinish={() => setPhase("svg")} />
      )}

      {phase === "svg" && (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
          <svg
            viewBox="0 0 800 200"
            className="w-[80%] h-auto"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="100"
              fill="none"
              stroke="#ff69b4"
              strokeWidth="3"
            >
              <textPath href="#path">
                HOOLIGAN
              </textPath>
              <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="4s"
                fill="freeze"
              />
            </text>
            <path
              id="path"
              d="M100,150 L700,150"
              stroke="transparent"
              fill="none"
            />
          </svg>
        </div>
      )}

      {phase === "bunny" && (
        <div className="relative w-full h-screen bg-black flex items-center justify-center">
          {/* SVG stays visible */}
          <svg
            viewBox="0 0 800 200"
            className="w-[80%] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="100"
              fill="none"
              stroke="#ff69b4"
              strokeWidth="3"
            >
              HOOLIGAN
            </text>
          </svg>
          <Image
            src="/bunny.png"
            alt="bunny"
            width={300}
            height={300}
            className="animate-fadein"
          />
        </div>
      )}

      {phase === "hero" && (
        <main className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center">
          {/* Background text */}
          <h1 className="text-[10vw] font-extrabold opacity-10 absolute top-1/4">
            MY PET
          </h1>
          {/* HOOLIGAN text */}
          <h2 className="text-pink-500 text-8xl font-bold z-10">
            HOOLIGAN
          </h2>
          {/* Bunny */}
          <Image
            src="/bunny.png"
            alt="bunny"
            width={300}
            height={300}
            className="z-10"
          />
          {/* Subtext */}
          <p className="mt-4 text-sm text-center max-w-md">
            Become a part of an exclusive community of cool.
          </p>
          {/* Button */}
          <button className="mt-6 px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition">
            GET YOUR OWN HOOLIGAN
          </button>
          {/* MENU */}
          <button
            className="absolute top-5 right-5 text-white text-lg"
            onClick={() => setPhase("menu")}
          >
            MENU
          </button>
        </main>
      )}

      {phase === "menu" && <Navbar />}
    </>
  );
}
