import React from "react";

const Roadmap: React.FC = () => {
  const roadmapData = [
    {
      quarter: "2024 Q1",
      title: "Foundation & Community",
      description:
        "Hosting contests and virtual events while offering exclusive benefits like discounts and early access to new releases for current NFT holders.",
      status: "completed",
    },
    {
      quarter: "2024 Q2",
      title: "NFT Ecosystem Expansion",
      description:
        "Involving NFT owners in decision-making through polls and surveys; planning collaborations to create unique content and expand the reach of the project.",
      status: "completed",
    },
    {
      quarter: "2024 Q3",
      title: "Interactive Content & Gaming",
      description:
        "Offering NFT holders exclusive content like videos and music; and developing a game where owners can use their characters and interact with part of the proceeds supporting a shelter.",
      status: "current",
    },
    {
      quarter: "2024 Q4",
      title: "Owner Portal & Monetization",
      description:
        "Creating an owner portal for NFT owners to share experiences, create content, and engage with the community, along with monetizing opportunities that align them for project development and promotion with proceeds supporting a shelter.",
      status: "upcoming",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-lime-400";
      case "current":
        return "text-pink-400";
      case "upcoming":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅";
      case "current":
        return "🔥";
      case "upcoming":
        return "⏳";
      default:
        return "📅";
    }
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

      {/* Large Background Hooligan Silhouettes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-gray-700 rounded-full"
          style={{
            clipPath:
              "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gray-700 rounded-full"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h1
            className="text-pink-400 font-black mb-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
            style={{
              fontSize: "clamp(4rem, 15vw, 10rem)",
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: `
                4px 4px 0px rgba(0, 0, 0, 0.8),
                8px 8px 0px rgba(255, 105, 180, 0.3),
                12px 12px 0px rgba(255, 105, 180, 0.1)
              `,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              WebkitTextStroke: "4px rgba(255, 105, 180, 0.8)",
            }}
          >
            ROADMAP
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Our journey through 2024 - Building the ultimate Hooligan universe
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lime-400 via-pink-400 to-gray-600 rounded-full"></div>

          {/* Roadmap Items */}
          <div className="space-y-24">
            {roadmapData.map((item, index) => (
              <div
                key={item.quarter}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8`}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-8 hover:border-pink-400 transition-all duration-300 transform hover:scale-105">
                    {/* Quarter Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-4 py-2 rounded-full font-bold text-sm bg-gray-800 ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.quarter}
                      </span>
                      <span className="text-2xl">
                        {getStatusIcon(item.status)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-pink-400 font-bold text-2xl mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-base">
                      {item.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-6 flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.status === "completed"
                            ? "bg-lime-400"
                            : item.status === "current"
                            ? "bg-pink-400"
                            : "bg-gray-600"
                        } mr-3`}
                      ></div>
                      <span
                        className={`text-sm font-semibold capitalize ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status === "current"
                          ? "In Progress"
                          : item.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20">
                  <div
                    className={`w-8 h-8 rounded-full border-4 ${
                      item.status === "completed"
                        ? "bg-lime-400 border-lime-400"
                        : item.status === "current"
                        ? "bg-pink-400 border-pink-400 animate-pulse"
                        : "bg-gray-600 border-gray-600"
                    } shadow-lg`}
                  ></div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 max-w-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gray-900 border border-pink-400 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-pink-400 font-bold text-2xl mb-4">
              🚀 Join Our Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Be part of the Hooligan revolution and help shape our future
              milestones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-400 text-black px-8 py-3 font-bold uppercase tracking-wide rounded-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105">
                GET INVOLVED
              </button>
              <button className="bg-transparent border-2 border-pink-400 text-pink-400 px-8 py-3 font-bold uppercase tracking-wide rounded-lg hover:bg-pink-400 hover:text-black transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-70" />
      <div className="absolute top-1/2 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-1/3 right-28 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-2/3 left-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse opacity-55" />
    </section>
  );
};

export default Roadmap;
