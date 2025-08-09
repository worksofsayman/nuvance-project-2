"use client";
import React, { useState } from "react";
import { Rock_Salt } from "next/font/google";
import JOC from "../components/JoinOurCommunity";


const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const pink = "#bd027b";
  const lime = "#C6FF5F";
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        'IS IT POSSIBLE TO GET A PHYSICAL COPY OF THE NFT "MY PET HOOLIGAN"?',
      answer:
        "Currently, our NFTs exist as digital assets on the blockchain. However, we are exploring options for physical merchandise and collectibles for NFT holders.",
    },
    {
      id: 2,
      question: "CAN I EXCHANGE OR SELL MY NFTS?",
      answer:
        "Absolutely! Your NFTs are fully owned by you and can be traded on any compatible NFT marketplace.",
    },
    {
      id: 3,
      question:
        "IS IT POSSIBLE TO SEE THE RESULTS OF YOUR PROJECT'S ASSISTANCE TO SHELTERS?",
      answer:
        "Yes! We regularly publish reports showing how funds from NFT sales are being used to support animal shelters.",
    },
    {
      id: 4,
      question:
        "HOW DO YOU PROVIDE ASSISTANCE TO SHELTERS THROUGH YOUR PROJECT?",
      answer:
        "We partner with shelters and provide them with financial support, supplies, and promotion through our community.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <>
      <section className="min-h-screen bg-black text-white py-20 px-6 relative flex flex-col items-center">
        {/* Large faded background text */}
        <div
          className="absolute top-3 text-gray-700 opacity-30 font-extrabold tracking-widest text-center pointer-events-none select-none"
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            zIndex: 0,
          }}
        >
          FREQUENTLY<br />ASKED
        </div>

        {/* Pink Rock Salt title */}
        <span
          className={`${rockSalt.className} text-[5rem] !mt-36 !font-extrabold text-[${pink}] z-10`}
          style={{ color: pink }}
        >
          QUESTIONS
        </span>

        {/* FAQ List */}
        <div className="!mt-12 w-full max-w-3xl z-10">
          {faqData.map((item, idx) => (
            <div key={item.id} className="border-t border-gray-600 !py-3">
              <div
                className="flex items-center py-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <span
                  className="text-3xl font-bold !mr-6 select-none"
                  style={{ color: lime }}
                >
                  {isOpen(item.id) ? "-" : "+"}
                </span>

                {/* Question Text */}
                <span className="font-extrabold tracking-wide text-white text-lg md:text-xl uppercase">
                  {item.question}
                </span>
              </div>

              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out max-w-2xl !pl-[40%] ${isOpen(item.id) ? "max-h-40 opacity-100 mb-6" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-gray-400 text-sm !font-bold">
                  {item.answer}
                </p>
              </div>

              {/* Last Divider */}
              {idx === faqData.length - 1 && (
                <div className="border-t border-gray-600"></div>
              )}
              <hr className="!mt-3" />
            </div>

          ))}
        </div>
      </section>
      {/* Join Our Community Section */}
      <JOC />
    </>
  );
};

export default FAQ;