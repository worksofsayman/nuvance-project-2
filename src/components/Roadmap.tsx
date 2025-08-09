"use client";
import React from "react";
import { Rock_Salt } from "next/font/google";
import { motion } from "framer-motion";

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

const Roadmap: React.FC = () => {
  const pink = "#bd027b";

  const roadmapData: {
    quarter: string;
    description: string;
    style: React.CSSProperties;
  }[] = [
    {
      quarter: "2024 Q1",
      description:
        "Hosting contests and virtual events while offering exclusive benefits like discounts and early access to new releases for current NFT holders.",
      style: {
        top: "15%",
        left: "5%",
        textAlign: "left",
        maxWidth: "260px",
      },
    },
    {
      quarter: "2024 Q2",
      description:
        "Involving NFT owners in decision-making through polls and surveys; planning collaborations to create unique content and expand reach.",
      style: {
        top: "15%",
        left: "40%",
        textAlign: "left",
        maxWidth: "260px",
      },
    },
    {
      quarter: "2024 Q3",
      description:
        "Offering NFT holders exclusive content like videos and music; developing a game with interactive character use and charity support.",
      style: {
        bottom: "15%",
        left: "20%",
        textAlign: "left",
        maxWidth: "260px",
      },
    },
    {
      quarter: "2024 Q4",
      description:
        "Creating an owner portal for NFT owners to share experiences, create content, and monetize while supporting a shelter.",
      style: {
        bottom: "15%",
        right: "15%",
        textAlign: "left",
        maxWidth: "260px",
      },
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/your-background-image.png')",
        }}
      />

      {roadmapData.map((item, index) => (
        <motion.div
          key={item.quarter}
          className="absolute"
          style={item.style}
          initial={{ opacity: 0, x: 100, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            delay: index * 0.3, // stagger effect
            ease: "easeOut",
          }}
        >
          <p className="text-lime-400 font-bold text-2xl mb-2">
            {item.quarter}
          </p>
          <p className="text-gray-300 text-sm leading-snug">
            {item.description}
          </p>
        </motion.div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span
          className={`${rockSalt.className} text-[8rem] !font-extrabold`}
          style={{ color: pink }}
        >
          ROADMAP
        </span>
      </div>

      {/* Decorative dot */}
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-70" />
    </section>
  );
};

export default Roadmap;