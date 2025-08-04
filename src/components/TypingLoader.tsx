"use client";
import React, { useEffect, useState } from "react";

const messages = [
  "NOT JUST DIGITAL CHARACTERS.",
  "THIS IS YOUR WAY OF CONTRIBUTING TO THE LIVES OF THOSE IN NEED."
];

export default function TypingLoader() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>(["", ""]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (currentLine >= messages.length) {
      // All lines typed, show loading after a pause
      setTimeout(() => setShowLoading(true), 600);
      return;
    }

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
        typingTimeout = setTimeout(typeChar, 40);
      } else {
        // Move to next line after short pause
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 500);
      }
    };

    typingTimeout = setTimeout(typeChar, 300);

    return () => clearTimeout(typingTimeout);
  }, [currentLine]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black text-white px-4">
      <div className="flex flex-col items-center space-y-6 text-center max-w-4xl">
        {/* Line 1 */}
        <p className="text-2xl md:text-4xl font-bold tracking-wide">
          {displayedLines[0]}
          {currentLine === 0 && <span className="animate-blink">|</span>}
        </p>
        {/* Line 2 */}
        <p className="text-lg md:text-2xl font-medium text-gray-300">
          {displayedLines[1]}
          {currentLine === 1 && <span className="animate-blink">|</span>}
        </p>
        {/* Loading */}
        {showLoading && (
          <p className="text-xl md:text-2xl font-semibold text-yellow-400 animate-pulse">
            LOADING<span className="dot-animate">.</span>
          </p>
        )}
      </div>
    </div>
  );
}
