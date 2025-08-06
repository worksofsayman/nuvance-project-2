"use client";
import { useState } from "react";
import TypingLoader from "@/components/TypingLoader";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 3000);
  return loading ? <TypingLoader /> : <LandingPage />;
}
