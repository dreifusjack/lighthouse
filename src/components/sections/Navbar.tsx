"use client";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [textColor, setTextColor] = useState("var(--background)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // TODO: when layout is complete
      if (
        (scrollPosition >= 0 && scrollPosition < 950) ||
        (scrollPosition >= 1950 && scrollPosition < 2850) ||
        scrollPosition >= 3450
      ) {
        setTextColor("var(--background)");
      } else {
        setTextColor("var(--charcoal)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between bg-transparent items-center fixed top-0 left-0 w-full z-50 px-4 py-2">
      <div className="flex items-center">
        <Image src="/lighthouse_logo.png" alt="" width={50} height={50} />
        <h1
          className="text-4xl transition-colors duration-300"
          style={{ color: textColor }}
        >
          Lighthouse
        </h1>
      </div>
      <div>nav bar</div>
      <CTAButton />
    </nav>
  );
}
