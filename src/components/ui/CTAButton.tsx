"use client";
import { scrollToContact } from "@/utils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function CTAButton() {
  return (
    <div>
      <button
        className="px-3 md:px-4 py-3 md:py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300 text-sm md:text-base
                hover:shadow-lg hover:transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: "var(--red)", color: "var(--light)" }}
        onClick={scrollToContact}
      >
        <span className="hidden sm:inline">Get an offer in 30 seconds</span>
        <span className="sm:hidden">Get Offer</span>
        <ArrowRightAltIcon className="ml-1" />
      </button>
    </div>
  );
}
