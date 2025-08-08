"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";

interface HooliganNFT {
  id: string;
  price: string;
  image: string;
  name: string;
}

export default function ChooseYourHooligan() {
  const [selectedHooligan, setSelectedHooligan] = useState<string | null>(null);

  // Generate random prices for variety
  const generateRandomPrice = () => {
    const priceTypes = ["ETH", "WETH"];
    const priceType = priceTypes[Math.floor(Math.random() * priceTypes.length)];
    const price = (Math.random() * 20).toFixed(3); // Random price between 0-20
    return `${price} ${priceType}`;
  };

  // Generate random ID numbers
  const generateRandomId = () => {
    return Math.floor(Math.random() * 9999) + 1;
  };

  // Dynamically create Hooligan NFTs from available images
  const hooligans: HooliganNFT[] = useMemo(() => {
    const imageFiles = [
      "photo_1_2025-08-01_23-23-17.jpg",
      "photo_2_2025-08-01_23-23-17.jpg",
      "photo_3_2025-08-01_23-23-17.jpg",
      "photo_4_2025-08-01_23-23-17.jpg",
      "photo_5_2025-08-01_23-23-17.jpg",
      "photo_6_2025-08-01_23-23-17.jpg",
      "photo_7_2025-08-01_23-23-17.jpg",
      "photo_8_2025-08-01_23-23-17.jpg",
      "photo_9_2025-08-01_23-23-17.jpg",
      "photo_10_2025-08-01_23-23-17.jpg",
      "photo_11_2025-08-01_23-23-17.jpg",
      "photo_12_2025-08-01_23-23-17.jpg",
      "photo_13_2025-08-01_23-23-17.jpg",
      "photo_14_2025-08-01_23-23-17.jpg",
      "photo_15_2025-08-01_23-23-17.jpg",
      "photo_16_2025-08-01_23-23-17.jpg",
      "photo_17_2025-08-01_23-23-17.jpg",
      "photo_18_2025-08-01_23-23-17.jpg",
    ];

    return imageFiles.map((imageFile) => ({
      id: `#${generateRandomId()}`,
      price: generateRandomPrice(),
      image: `/images/${imageFile}`,
      name: `HOOLIGAN #${generateRandomId()}`,
    }));
  }, []);

  const handleHooliganSelect = (id: string) => {
    setSelectedHooligan(id);
  };

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 150px 150px, 200px 200px",
        }}
      />

      {/* Large Background Text */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-gray-800 opacity-20 font-black tracking-wider z-0"
        style={{
          fontSize: "clamp(8rem, 20vw, 15rem)",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        CHOOSE YOUR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1
            className="text-pink-400 font-black mb-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: `
                4px 4px 0px rgba(0, 0, 0, 0.8),
                8px 8px 0px rgba(255, 105, 180, 0.3)
              `,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              WebkitTextStroke: "3px rgba(255, 105, 180, 0.8)",
            }}
          >
            HOOLIGAN
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select your perfect digital companion from our exclusive collection
            of unique Hooligans
          </p>
          <p className="text-lime-400 text-sm mt-2 font-bold">
            {hooligans.length} Unique NFTs Available
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {hooligans.map((hooligan) => (
            <div
              key={hooligan.id}
              className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedHooligan === hooligan.id
                  ? "ring-4 ring-pink-400 ring-opacity-80"
                  : ""
              }`}
              onClick={() => handleHooliganSelect(hooligan.id)}
            >
              {/* NFT Card */}
              <div className="bg-gray-900 border-2 border-gray-700 rounded-xl overflow-hidden hover:border-pink-400 transition-colors duration-300">
                {/* NFT Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={hooligan.image}
                    alt={hooligan.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Selected indicator */}
                  {selectedHooligan === hooligan.id && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* NFT Info */}
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-pink-400 font-bold text-lg">
                      HOOLIGAN {hooligan.id}
                    </h3>
                    <span className="text-gray-400 text-xs font-mono">
                      {hooligan.id}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Price</span>
                    <span className="text-lime-400 font-bold text-base">
                      {hooligan.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-lime-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          {selectedHooligan && (
            <div className="mb-8 p-4 bg-gray-900 border border-pink-400 rounded-lg inline-block">
              <p className="text-pink-400 font-bold mb-2">
                Selected: HOOLIGAN {selectedHooligan}
              </p>
              <p className="text-gray-300 text-sm">
                Ready to make this Hooligan yours?
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`px-8 py-4 font-bold uppercase tracking-wide rounded-xl transition-all duration-300 transform hover:scale-105 ${
                selectedHooligan
                  ? "bg-lime-400 text-black hover:bg-lime-300 shadow-lg hover:shadow-xl"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!selectedHooligan}
            >
              🎭 BUY NOW 🎭
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-pink-400 text-pink-400 font-bold uppercase tracking-wide rounded-xl hover:bg-pink-400 hover:text-black transition-all duration-300 transform hover:scale-105">
              VIEW ALL COLLECTION
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
            <h3 className="text-pink-400 font-bold text-2xl mb-2">10,000</h3>
            <p className="text-gray-400">Total Supply</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
            <h3 className="text-lime-400 font-bold text-2xl mb-2">2.5 ETH</h3>
            <p className="text-gray-400">Floor Price</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
            <h3 className="text-pink-400 font-bold text-2xl mb-2">
              {hooligans.length}
            </h3>
            <p className="text-gray-400">Available Now</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-1/4 right-28 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40" />
    </section>
  );
}
