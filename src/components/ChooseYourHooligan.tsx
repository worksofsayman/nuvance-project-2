import React, { useState } from "react";
import Image from "next/image";

interface HooliganNFT {
  id: string;
  price: string;
  image: string;
  name: string;
}

const ChooseYourHooligan: React.FC = () => {
  const [selectedHooligan, setSelectedHooligan] = useState<string | null>(null);

  // Sample data - you can replace these with actual NFT data
  const hooligans: HooliganNFT[] = [
    {
      id: "#1059",
      price: "0.433 WETH",
      image: "/images/photo_1_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #1059",
    },
    {
      id: "#4721",
      price: "0.956 ETH",
      image: "/images/photo_2_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #4721",
    },
    {
      id: "#4569",
      price: "15.6459 ETH",
      image: "/images/photo_3_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #4569",
    },
    {
      id: "#2845",
      price: "2.156 ETH",
      image: "/images/photo_4_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #2845",
    },
    {
      id: "#7392",
      price: "0.892 WETH",
      image: "/images/photo_5_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #7392",
    },
    {
      id: "#3671",
      price: "3.245 ETH",
      image: "/images/photo_6_2025-08-01_23-23-17.jpg",
      name: "HOOLIGAN #3671",
    },
  ];

  const handleHooliganSelect = (id: string) => {
    setSelectedHooligan(id);
  };

  return (
    <section className="min-h-screen bg-black text-white py-16 px-8 relative overflow-hidden">
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
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-pink-400 font-bold text-xl">
                      HOOLIGAN {hooligan.id}
                    </h3>
                    <span className="text-gray-400 text-sm font-mono">
                      {hooligan.id}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Price</span>
                    <span className="text-lime-400 font-bold text-lg">
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
            <h3 className="text-pink-400 font-bold text-2xl mb-2">8,456</h3>
            <p className="text-gray-400">Owners</p>
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
};

export default ChooseYourHooligan;
