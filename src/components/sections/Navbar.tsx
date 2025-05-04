"use client";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import NavItem from "../ui/NavItem";
import { SectionName } from "@/types";

export default function Navbar() {
  const [lighthouseTextColor, setLighthouseTextColor] =
    useState("var(--background)");
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [scrollActiveSection, setScrollActiveSection] =
    useState<SectionName>("home");
  const [activeIndicator, setActiveIndicator] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const isClickScrollRef = useRef(false); // checks for programattic scrolling
  const navRefs = {
    home: useRef<HTMLLIElement>(null),
    about: useRef<HTMLLIElement>(null),
    partner: useRef<HTMLLIElement>(null),
    mission: useRef<HTMLLIElement>(null),
    contact: useRef<HTMLLIElement>(null),
  };

  useEffect(() => {
    if (navRefs[activeSection]?.current) {
      const activeNavItem = navRefs[activeSection].current;
      const activeNavDims = activeNavItem.getBoundingClientRect();
      const highlighterPadding = 20;

      setActiveIndicator({
        left: activeNavItem.offsetLeft + highlighterPadding,
        width: activeNavDims.width - highlighterPadding / 2,
        height: activeNavDims.height,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrollRef.current) return; // omit updating active section in this case

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
      let newSection: SectionName = "home";
      if (scrollPosn < 950) {
        newSection = "home";
      } else if (scrollPosn < 1950) {
        newSection = "about";
      } else if (scrollPosn < 2850) {
        newSection = "partner";
      } else if (scrollPosn < 3450) {
        newSection = "mission";
      } else {
        newSection = "contact";
      }

      setScrollActiveSection(newSection);
      setActiveSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: SectionName) => {
    setActiveSection(sectionId);
    isClickScrollRef.current = true;

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // timeout to reduce over indication on click scroll
      setTimeout(() => {
        isClickScrollRef.current = false;
        setScrollActiveSection(sectionId);
      }, 1000);
    }
  };

  const handleNavItemMouseEnter = (section: SectionName) => {
    setActiveSection(section);
  };

  const handleNavItemClick = (section: SectionName) => {
    scrollToSection(section);
  };

  const navItems: Array<{ name: SectionName; label: string }> = [
    { name: "home", label: "Home" },
    { name: "about", label: "About Us" },
    { name: "partner", label: "Partner" },
    { name: "mission", label: "Our Mission" },
    { name: "contact", label: "Contact" },
  ];

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
        onMouseLeave={() => setActiveSection(scrollActiveSection)}
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
            left: activeIndicator.left,
            width: activeIndicator.width,
            height: activeIndicator.height,
            zIndex: 0,
          }}
        />

        <ul className="flex flex-row space-x-3 relative z-10">
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              sectionName={item.name}
              label={item.label}
              activeSection={activeSection}
              ref={navRefs[item.name]}
              onMouseEnter={handleNavItemMouseEnter}
              onClick={handleNavItemClick}
            />
          ))}
        </ul>
      </Box>
      <CTAButton />
    </nav>
  );
}
