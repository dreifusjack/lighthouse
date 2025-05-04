"use client";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// TODO: add effect on hover
export default function CTAButton() {
  return (
    <div>
      <button
        className="px-4 py-4 rounded-3xl cursor-pointer"
        style={{ backgroundColor: "var(--red)", color: "var(--background)" }}
        onClick={() => console.log("cta clicked")}
      >
        Get an offer in 30 seconds
        <ArrowRightAltIcon />
      </button>
    </div>
  );
}
