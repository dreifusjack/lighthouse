import React from "react";
import Link from "next/link";

export default function BuiltByWidget() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-[rgba(0,0,0,0.7)] text-white px-2 py-1 md:px-3 md:py-2 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-[rgba(0,0,0,0.85)] cursor-pointer text-xs md:text-sm">
      <Link
        href="https://www.linkedin.com/in/jack-dreifus/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 no-underline text-white"
      >
        <span className="font-medium hidden sm:inline">
          Built by Jack Dreifus
        </span>
        <span className="font-medium sm:hidden">Built by</span>
        <div className="w-5 h-5 md:w-6 md:h-6 relative rounded-full overflow-hidden bg-[radial-gradient(at_50%_75%,_#bae6fd,_#60a5fa,_#312e81_90%)]">
          <span className="absolute inset-0 flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
            JD
          </span>
        </div>
      </Link>
    </div>
  );
}
