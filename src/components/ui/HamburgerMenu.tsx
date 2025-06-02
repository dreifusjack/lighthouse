import React from "react";

interface HamburgerIconProps {
  isOpen: boolean;
  toggleOpen: () => void;
  className?: string;
  color: string;
}

export default function HamburgerIcon({
  isOpen,
  toggleOpen,
  className = "",
  color,
}: HamburgerIconProps) {
  return (
    <div
      className={`cursor-pointer z-50 ${className} mr-[20px]`}
      onClick={toggleOpen}
    >
      <div className="relative w-7 h-6 flex flex-col justify-center items-center">
        <span
          className={`absolute h-0.5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${
            isOpen ? "w-7 rotate-45" : "w-7 -translate-y-2"
          }`}
          style={{ backgroundColor: color }}
        ></span>

        <span
          className={`absolute h-0.5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 w-0" : "opacity-100 w-7"
          }`}
          style={{ backgroundColor: color }}
        ></span>

        <span
          className={`absolute h-0.5 bg-white rounded-sm transform transition-all duration-300 ease-in-out ${
            isOpen ? "w-7 -rotate-45" : "w-7 translate-y-2"
          }`}
          style={{ backgroundColor: color }}
        ></span>
      </div>
    </div>
  );
}
