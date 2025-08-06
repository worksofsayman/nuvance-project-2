"use client";
import React from "react";

const navItems = [
  "MAIN",
  "ABOUT",
  "COLLECTION",
  "ROADMAP",
  "FAQ",
  "CONTACT US"
];

export default function Navbar() {
  return (
    <div className="relative w-full h-screen bg-black text-gray-500 overflow-hidden">
      {/* Menu Button */}
      <div className="absolute top-4 left-4 text-white font-semibold tracking-wider cursor-pointer">
        MENU
      </div>

      {/* Close Icon */}
      <div className="absolute top-4 right-4 text-white font-bold text-xl cursor-pointer">
        ×
      </div>

      {/* Center Active Section */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-extrabold text-lime-400 tracking-widest">
          COLLECTION
        </h1>
      </div>

      {/* Nav Links (Right) */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 text-2xl font-semibold">
        {navItems.map((item) => (
          <p
            key={item}
            className={
              item === "COLLECTION"
                ? "text-lime-400"
                : "text-gray-600 hover:text-gray-400 transition"
            }
          >
            {item}
          </p>
        ))}
      </div>

      {/* Social Links (Bottom Left) */}
      <div className="absolute bottom-8 left-8 space-y-2 font-semibold text-sm">
        <p className="text-lime-400 cursor-pointer">DISCORD</p>
        <p className="text-lime-400 cursor-pointer">TWITTER</p>
        <p className="text-lime-400 cursor-pointer">INSTAGRAM</p>
      </div>
    </div>
  );
}
