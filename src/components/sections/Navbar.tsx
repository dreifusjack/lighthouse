// components/sections/Navbar.tsx
"use client";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

type SectionName = "home" | "about" | "partner" | "mission" | "contact";

export default function Navbar() {
  const [lighthouseTextColor, setLighthouseTextColor] =
    useState("var(--background)");
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const navRefs = {
    home: useRef<HTMLLIElement>(null),
    about: useRef<HTMLLIElement>(null),
    partner: useRef<HTMLLIElement>(null),
    mission: useRef<HTMLLIElement>(null),
    contact: useRef<HTMLLIElement>(null),
  };

  // Update indicator position when active section changes
  useEffect(() => {
    if (navRefs[activeSection]?.current) {
      const el = navRefs[activeSection].current;
      const rect = el.getBoundingClientRect();
      const offset = 20;

      setIndicatorStyle({
        left: el.offsetLeft + offset,
        width: rect.width - offset / 2,
        height: rect.height,
      });
    }
  }, [activeSection]);

  // Your scroll logic can remain the same
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosn = window.scrollY;

      // Lighthouse text color logic
      if (
        (scrollPosn >= 0 && scrollPosn < 950) ||
        (scrollPosn >= 1950 && scrollPosn < 2850) ||
        scrollPosn >= 3450
      ) {
        setLighthouseTextColor("var(--background)");
      } else {
        setLighthouseTextColor("var(--charcoal)");
      }

      // Active section based on scroll position
      if (scrollPosn < 950) {
        setActiveSection("home");
      } else if (scrollPosn < 1950) {
        setActiveSection("about");
      } else if (scrollPosn < 2850) {
        setActiveSection("partner");
      } else if (scrollPosn < 3450) {
        setActiveSection("mission");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Update on resize too
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Handle smooth scrolling when clicking a nav item
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between bg-transparent items-center fixed top-5 left-0 w-full z-50 px-4 py-2">
      <div className="flex items-center">
        <Image src="/lighthouse_logo.png" alt="" width={50} height={50} />
        <h1
          className="text-4xl transition-colors duration-300"
          style={{ color: lighthouseTextColor }}
        >
          Lighthouse
        </h1>
      </div>
      <Box
        width="35%"
        height="65px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: `rgba(254, 250, 240, 0.27)`,
          backdropFilter: `blur(10px)`,
          WebkitBackdropFilter: `blur(10px)`,
          zIndex: 500,
          border: "1px solid black",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute bg-white/30 rounded-2xl transition-all duration-300 ease-in-out"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            height: indicatorStyle.height,
            zIndex: 0,
          }}
        />

        <ul className="flex flex-row space-x-3 relative z-10">
          <li
            ref={navRefs.home}
            className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
              activeSection === "home" ? "font-bold" : ""
            }`}
            onMouseEnter={() => setActiveSection("home")}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            ref={navRefs.about}
            className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
              activeSection === "about" ? "font-bold" : ""
            }`}
            onMouseEnter={() => setActiveSection("about")}
            onClick={() => scrollToSection("about")}
          >
            About Us
          </li>
          <li
            ref={navRefs.partner}
            className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
              activeSection === "partner" ? "font-bold" : ""
            }`}
            onMouseEnter={() => setActiveSection("partner")}
            onClick={() => scrollToSection("partner")}
          >
            Partner
          </li>
          <li
            ref={navRefs.mission}
            className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
              activeSection === "mission" ? "font-bold" : ""
            }`}
            onMouseEnter={() => setActiveSection("mission")}
            onClick={() => scrollToSection("mission")}
          >
            Our Mission
          </li>
          <li
            ref={navRefs.contact}
            className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
              activeSection === "contact" ? "font-bold" : ""
            }`}
            onMouseEnter={() => setActiveSection("contact")}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </Box>
      <CTAButton />
    </nav>
  );
}
