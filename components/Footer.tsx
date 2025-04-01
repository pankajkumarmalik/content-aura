import React from "react";

interface FooterProps {
  footerColor?: string;
}

const Footer: React.FC<FooterProps> = ({ footerColor = "bg-black" }) => {
  return (
    <footer
      className={`w-full text-center py-4 relative ${footerColor} overflow-hidden`}
    >
      {/* Silk-like thin top border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-gray-500 to-blue-500 opacity-30"></div>

      {/* Ultra-thin, small text with a silky feel */}
      <p className="text-xs sm:text-sm font-extralight italic text-gray-400 tracking-wider">
        © 2025{" "}
        <span className="font-light text-gray-200">Crafted by Pankaj</span>
      </p>
    </footer>
  );
};

export default Footer;
