"use client";
import { scrollToContact } from "@/utils";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function CTAButton() {
  return (
    <div>
      <a>
        <button
          className="px-4 py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300
                  hover:shadow-lg hover:transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: "var(--red)", color: "var(--light)" }}
          onClick={scrollToContact}
        >
          Get an offer in 30 seconds
          <ArrowRightAltIcon />
        </button>
      </a>
    </div>
  );
}
