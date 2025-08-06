"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordian";

import Image from "next/image";

export default function Home() {
  const hooligans = [
    { name: "OG Hooligan", image: "/hooligans/h1.png" },
    { name: "Pink Mask", image: "/hooligans/h2.png" },
    { name: "Hooligan OG #2", image: "/hooligans/h3.png" },
    { name: "Hooligan OG #3", image: "/hooligans/h4.png" },
    { name: "Hooligan OG #4", image: "/hooligans/h5.png" },
    { name: "Hooligan OG #5", image: "/hooligans/h6.png" },
    { name: "Hooligan OG #6", image: "/hooligans/h7.png" },
    { name: "Hooligan OG #7", image: "/hooligans/h8.png" },
  ];

  const faqs = [
    {
      question:
        "Is it possible to get a physical copy of the NFT My Pet Hooligan?",
      answer:
        "Currently, physical copies are not available but may be in future drops.",
    },
    {
      question: "Can I exchange or sell my NFTs?",
      answer: "Yes, you can trade them on supported marketplaces like OpenSea.",
    },
    {
      question:
        "Is it possible to see the results of your assistance to shelters?",
      answer: "Yes, we will publish transparency reports every quarter.",
    },
    {
      question:
        "How do you provide assistance to shelters through your project?",
      answer: "A part of each sale goes to our partnered shelters.",
    },
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Large Background "MEET" Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="font-black text-gray-500 opacity-30 tracking-[0.2em] select-none"
            style={{
              fontSize: "clamp(8rem, 25vw, 18rem)",
              fontFamily: "Arial Black, sans-serif",
              fontWeight: 900,
            }}
          >
            MEET
          </h1>
        </div>

        {/* Main Character Image */}
        <div className="relative w-fit mx-auto mb-6">
          {/* Hooligan Image */}
          <Image
            src="/images/photo_1_2025-08-01_23-23-17.jpg"
            alt="Hooligan Hero"
            width={500}
            height={500}
            className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl z-30"
            priority
          />

          {/* Graffiti Text Positioned Over Image */}
          <h1
            className="absolute bottom-0 left-1/2 -translate-x-1/2 transform -rotate-3 text-pink-400 font-black tracking-wide"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontFamily: "Arial Black, sans-serif",
              fontWeight: 900,
              textShadow:
                "0 0 10px rgba(244, 114, 182, 0.5), 0 0 20px rgba(244, 114, 182, 0.3)",
              filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
            }}
          >
            #HOOLIGAN
          </h1>
        </div>

        <p className="mt-2 max-w-xl text-gray-300 relative z-30 mb-6">
          Enter the world of My Pet Hooligan, where digital rebellion meets
          ownership.
        </p>

        <Button
          className="mt-4 relative z-30 border-2 border-green-400 text-green-400 bg-transparent hover:bg-green-400 hover:text-black transition-all duration-300"
          style={{
            boxShadow: "0 0 10px rgba(16, 185, 129, 0.3)",
          }}
        >
          Get Your Own Hooligan
        </Button>
      </section>

      {/* Contributing Section */}
      <section className="p-10 bg-neutral-900 text-center">
        <h2 className="text-3xl graffiti-text mb-2">Way of Contributing</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          The creators of our project have built this universe to reward
          participation. Join us in Discord and follow on Twitter to stay
          engaged.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <Button variant="secondary">Discord</Button>
          <Button variant="secondary">Twitter</Button>
        </div>
      </section>

      {/* Create Vote Own */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold graffiti-text mb-2">
          Create. Vote. Own.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Empower your creativity, decide the future of the Hooligan world, and
          own a part of it forever.
        </p>
      </section>

      {/* NFT Grid Section */}
      <section className="py-12 px-4">
        <h2 className="text-center text-3xl font-bold graffiti-text mb-4">
          Choose Your Hooligan
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {hooligans.map((hooligan, index) => (
            <Card key={index} className="bg-zinc-800">
              <CardContent className="p-2">
                <Image
                  src={hooligan.image}
                  alt={hooligan.name}
                  width={300}
                  height={300}
                  className="w-full rounded"
                />
                <p className="text-center mt-2 text-sm">{hooligan.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button variant="outline">View on OpenSea</Button>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-neutral-900 text-center">
        <h2 className="text-3xl graffiti-text mb-8">Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="font-bold text-lg">2024 Q1</h3>
            <p className="text-gray-400">
              Launch of initial NFT collection & community growth.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2024 Q2</h3>
            <p className="text-gray-400">
              DAO voting system, creative toolset release.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2024 Q3</h3>
            <p className="text-gray-400">
              Partnerships with shelters & real-world events.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg">2024 Q4</h3>
            <p className="text-gray-400">
              Physical drops & expanded utility for NFT holders.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl text-center graffiti-text mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <div className="text-left text-white">
                  <p className="font-semibold">{faq.question}</p>
                  <p className="text-sm text-gray-400 mt-1">{faq.answer}</p>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center">
        <h2 className="text-4xl graffiti-text mb-2">
          Join Our Hooligan Community
        </h2>
        <div className="flex justify-center gap-4">
          <Button variant="secondary">Discord</Button>
          <Button variant="secondary">Twitter</Button>
          <Button variant="secondary">Instagram</Button>
        </div>
        <p className="text-xs text-gray-500 mt-4">We can do more together!</p>
      </footer>
    </div>
  );
}
