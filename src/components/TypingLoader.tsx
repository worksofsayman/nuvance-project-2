"use client";
import React, { useEffect, useState } from "react";

const messages = [
  "NOT JUST DIGITAL CHARACTERS.",
  "THIS IS YOUR WAY OF CONTRIBUTING TO THE LIVES OF THOSE IN NEED.",
  "LOADING.."
];

export default function TypingLoader() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", "", ""]);

  useEffect(() => {
    if (currentLine >= messages.length) return;

    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;

    const typeChar = () => {
      setDisplayedLines((prev) => {
        const updated = [...prev];
        updated[currentLine] = messages[currentLine].slice(0, charIndex + 1);
        return updated;
      });

      charIndex++;

      if (charIndex < messages[currentLine].length) {
        typingTimeout = setTimeout(typeChar, 50);
      } else {
        // Move to next line after pause
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 600);
      }
    };

    typingTimeout = setTimeout(typeChar, 300);

    return () => clearTimeout(typingTimeout);
  }, [currentLine]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black text-white px-4">
      <div className="flex flex-col items-center space-y-6 text-center max-w-4xl">
        <p className="text-2xl md:text-4xl font-bold tracking-wide">
          {displayedLines[0]}
          {currentLine === 0 && <span className="animate-blink">|</span>}
        </p>
        <p className="text-lg md:text-2xl font-medium text-gray-300">
          {displayedLines[1]}
          {currentLine === 1 && <span className="animate-blink">|</span>}
        </p>
        <p className="text-xl md:text-2xl font-semibold text-green-400">
          {displayedLines[2]}
          {currentLine === 2 && <span className="animate-blink">|</span>}
        </p>
      </div>
    </div>
  );
}
