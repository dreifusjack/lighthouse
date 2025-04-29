"use client";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function CTAButton() {
  return (
    <div>
      <button
        className="px-4 py-2 rounded-3xl cursor-pointer"
        style={{ backgroundColor: "var(--red)", color: "var(--background)" }}
        onClick={() => console.log("cta clicked")}
      >
        Get an offer in 30 seconds
        <ArrowRightAltIcon />
      </button>
    </div>
  );
}
