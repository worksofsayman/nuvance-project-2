import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
});

export default function HooliganUI() {
  const pink = "#bd027b";
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background text */}
      <div className="absolute text-gray-800 text-[12vw] font-bold opacity-30 select-none">
        <span className="block leading-none">JOIN</span>
        <span className="block leading-none">OUR</span>
        <span className="block leading-none">COMMUNITY</span>
      </div>

      {/* Bunny outline - more realistic */}
      <div className="absolute top-10 right-10 opacity-10 select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-64 h-64"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M70 20 C60 0, 40 0, 35 25 C30 50, 50 90, 65 70" />
          <path d="M130 20 C140 0, 160 0, 165 25 C170 50, 150 90, 135 70" />
          <circle cx="100" cy="110" r="50" />
          <line x1="75" y1="95" x2="85" y2="105" />
          <line x1="85" y1="95" x2="75" y2="105" />
          <line x1="115" y1="95" x2="125" y2="105" />
          <line x1="125" y1="95" x2="115" y2="105" />
          <circle cx="100" cy="115" r="3" fill="currentColor" />
          <path d="M95 125 Q100 135 105 125" />
        </svg>
      </div>

      {/* Main HOOLIGAN text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <span
          className={`${rockSalt.className} text-[8rem] !font-extrabold`}
          style={{ color: pink }}
        >
          HOOLIGAN
        </span>
      </div>

      {/* Green dot */}
      <div className="w-3 h-3 bg-lime-400 rounded-full mt-6 z-10"></div>

      {/* Bottom left paragraph */}
      <div className="absolute bottom-20 left-10 text-gray-300">
        <p className="text-sm max-w-sm">
          Stay up to date with the latest news and updates by following us on social media. Join our mission to support the livestock industry and the NFT community.
        </p>
        <p className="!mt-2 font-bold text-white text-3xl tracking-wider">
          WE CAN DO MORE TOGETHER!
        </p>
      </div>

      {/* Bottom right links */}
      <div className="absolute bottom-20 right-4 flex gap-8 text-lime-400">
        <a href="#" className={`hover:underline ${rockSalt.className}`}>
          DISCORD
        </a>
        <a href="#" className={`hover:underline ${rockSalt.className}`}>
          TWITTER
        </a>
        <a href="#" className={`hover:underline ${rockSalt.className}`}>
          INSTAGRAM
        </a>
      </div>

      {/* Separator line */}
      <hr className="absolute bottom-14 left-16 w-[90%] border-gray-700" />

      {/* Footer with smaller SVG and legal links */}
      <div className="absolute bottom-4 w-full flex items-center justify-between px-6 text-xs text-gray-500">
        <div className="flex items-center gap-2 opacity-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M70 20 C60 0, 40 0, 35 25 C30 50, 50 90, 65 70" />
            <path d="M130 20 C140 0, 160 0, 165 25 C170 50, 150 90, 135 70" />
            <circle cx="100" cy="110" r="50" />
            <line x1="75" y1="95" x2="85" y2="105" />
            <line x1="85" y1="95" x2="75" y2="105" />
            <line x1="115" y1="95" x2="125" y2="105" />
            <line x1="125" y1="95" x2="115" y2="105" />
            <circle cx="100" cy="115" r="3" fill="currentColor" />
            <path d="M95 125 Q100 135 105 125" />
          </svg>
        </div>
        <div className="">
          <a href="#" className="hover:underline relative left-0">Terms & Conditions</a>
          <a href="#" className="hover:underline relative left">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}