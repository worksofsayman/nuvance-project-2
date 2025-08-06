"use client";

import { useEffect } from "react";

const navItems = [
  "MAIN",
  "ABOUT",
  "COLLECTION",
  "ROADMAP",
  "FAQ",
  "CONTACT US",
];

const socialItems = ["DISCORD", "TWITTER", "INSTAGRAM"];

export default function Navbar() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const addHover = () => cursor.classList.add("hovered");
    const removeHover = () => cursor.classList.remove("hovered");

    window.addEventListener("mousemove", move);

    // Only target .cursor-target spans for cursor hover effect
    const targets = document.querySelectorAll(".cursor-target");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white custom-cursor-root">
      {/* MENU (top-left) */}
      <div className="absolute top-4 left-4 font-semibold tracking-widest cursor-pointer hover:scale-105 transition-transform duration-200">
        MENU
      </div>
      <div className="absolute top-4 right-4 font-bold text-2xl cursor-pointer hover:scale-105 transition-transform duration-200">
        ×
      </div>

      {/* Right nav links */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-5 text-[90px] font-semibold text-right leading-snug">
        {navItems.map((item) => (
          <p key={item} className="pointer-events-none">
            <span
              className="cursor-target inline-block pointer-events-auto transition-all duration-300 hover:scale-110 hover:-translate-x-32 text-[#888888] hover:text-[#B3FF00]"
            >
              {item}
            </span>
          </p>
        ))}
      </div>

      {/* Bottom-left Socials */}
      <div className="absolute bottom-8 left-8 space-y-2 font-semibold text-sm">
        {socialItems.map((item) => (
          <p
            key={item}
            className="text-[#B3FF00] customunderline cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
