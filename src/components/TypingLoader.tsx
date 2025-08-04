"use client";

import { useEffect, useState, useRef } from "react";

const textToType = "Loading your experience...";
const typingSpeed = 100; // milliseconds

export default function TypingLoader() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/typing.mp3");
    audioRef.current.volume = 0.5;

    const interval = setInterval(() => {
      if (index < textToType.length) {
        setText((prev) => prev + textToType[index]);
        setIndex((prev) => prev + 1);

        // Play typing sound
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl md:text-4xl font-mono">
      <span>{text}</span>
      <span className="animate-blink">|</span>
    </div>
  );
}
