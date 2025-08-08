import { X } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Close button clicked"); // Debug log
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white font-bold"
      onClick={handleBackgroundClick}
    >
      {/* Background Pattern/Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 150px 150px, 200px 200px",
        }}
      />

      {/* Close Button */}
      <button
        onClick={handleCloseClick}
        className="absolute top-4 right-4 text-white text-2xl hover:text-lime-400 transition-colors duration-300 z-50 p-2 cursor-pointer"
        aria-label="Close menu"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="h-full w-full flex flex-col justify-between p-6">
        {/* Top Left MENU */}
        <div>
          <h2 className="text-lg font-semibold">MENU</h2>
        </div>

        {/* Center NAV LINKS */}
        <div className="flex flex-col items-end space-y-6 text-5xl uppercase tracking-wider text-neutral-400">
          {["Main", "About", "Collection", "Roadmap", "FAQ", "Contact Us"].map(
            (item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <span className="group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
                {item === "Collection" && (
                  <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-lime-400 animate-pulse" />
                )}
              </div>
            )
          )}
        </div>

        {/* Bottom Left SOCIAL LINKS */}
        <div className="flex flex-col gap-3 text-lime-400 font-semibold text-sm">
          {["DISCORD", "TWITTER", "INSTAGRAM"].map((platform, index) => (
            <a
              key={index}
              href="#"
              className="hover:underline w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
