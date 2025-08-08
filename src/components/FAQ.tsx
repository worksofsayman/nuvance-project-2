import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question:
        'IS IT POSSIBLE TO GET A PHYSICAL COPY OF THE NFT "MY PET HOOLIGAN"?',
      answer:
        "Currently, our NFTs exist as digital assets on the blockchain. However, we are exploring options for physical merchandise and collectibles for NFT holders. Stay tuned for announcements about exclusive physical items that may be available to our community members in the future.",
    },
    {
      id: 2,
      question: "CAN I EXCHANGE OR SELL MY NFTS?",
      answer:
        "Absolutely! Your NFTs are fully owned by you and can be traded on any compatible NFT marketplace such as OpenSea, Rarible, or other platforms that support our blockchain. You have complete control over buying, selling, or transferring your Hooligan NFTs to other collectors.",
    },
    {
      id: 3,
      question:
        "IS IT POSSIBLE TO SEE THE RESULTS OF YOUR PROJECT'S ASSISTANCE TO SHELTERS?",
      answer:
        "Yes! Transparency is very important to us. We regularly publish reports showing how funds from NFT sales are being used to support animal shelters. You can find detailed breakdowns of donations, shelter partnerships, and impact reports in our community Discord and on our website's transparency page.",
    },
    {
      id: 4,
      question: "WHAT BENEFITS DO NFT HOLDERS GET?",
      answer:
        "NFT holders enjoy exclusive benefits including early access to new releases, discounts on future drops, access to holder-only Discord channels, voting rights on community decisions, exclusive content like behind-the-scenes videos, and special events. Plus, you're directly contributing to animal welfare with every purchase.",
    },
    {
      id: 5,
      question: "HOW DO I KNOW MY NFT IS AUTHENTIC?",
      answer:
        "All our NFTs are minted on the blockchain with verifiable smart contracts. You can verify authenticity by checking the contract address and token ID on blockchain explorers. We only sell through official channels, and each NFT has unique metadata that proves its authenticity and ownership history.",
    },
    {
      id: 6,
      question: "WHAT WALLET DO I NEED TO STORE MY HOOLIGAN NFTS?",
      answer:
        "You can use any compatible wallet such as MetaMask, Trust Wallet, Coinbase Wallet, or hardware wallets like Ledger. Make sure your wallet supports the blockchain our NFTs are minted on. We recommend MetaMask for beginners as it's user-friendly and widely supported.",
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

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
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-gray-800 opacity-10 font-black tracking-wider z-0"
        style={{
          fontSize: "clamp(6rem, 15vw, 12rem)",
          fontFamily: "Arial Black, sans-serif",
        }}
      >
        FREQUENTLY ASKED
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1
            className="text-pink-400 font-black mb-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
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
            QUESTIONS
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to the most common questions about My Pet Hooligan NFTs
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-pink-400 transition-colors duration-300"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:bg-gray-800"
              >
                <div className="flex items-center space-x-4">
                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 flex items-center justify-center transition-all duration-300 ${
                        isOpen(item.id) ? "transform rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-lime-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Question Text */}
                  <h3 className="text-white font-bold text-lg md:text-xl leading-tight">
                    {item.question}
                  </h3>
                </div>

                {/* Status Indicator */}
                <div className="flex-shrink-0 ml-4">
                  <div
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      isOpen(item.id) ? "bg-lime-400" : "bg-gray-600"
                    }`}
                  />
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="pl-10 border-l-2 border-pink-400 ml-3">
                    <p className="text-gray-300 leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 border border-lime-400 rounded-xl p-8">
            <h3 className="text-lime-400 font-bold text-2xl mb-4">
              🤔 Still Have Questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find what you&apos;re looking for? Join our community
              and ask directly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-400 text-black px-8 py-3 font-bold uppercase tracking-wide rounded-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105">
                💬 JOIN DISCORD
              </button>
              <button className="bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-3 font-bold uppercase tracking-wide rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
                📧 CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-1/4 right-28 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-1/2 left-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse opacity-55" />
    </section>
  );
};

export default FAQ;
