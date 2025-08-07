"use client";
import React, { useState } from "react";
import TypingLoader from "@/components/TypingLoader";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && (
        <TypingLoader onFinish={() => setLoadingComplete(true)} />
      )}
      {loadingComplete && <Navbar />}
    </>
  );
}
