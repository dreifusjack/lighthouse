"use client";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import NavItem from "../ui/NavItem";
import { SectionName } from "@/utils";
import HamburgerIcon from "../ui/HamburgerIcon";
import HamburgerMenu from "../ui/HamburgerMenu";

export default function Navbar() {
  const [lighthouseTextColor, setLighthouseTextColor] =
    useState("var(--light)");
  const [activeSection, setActiveSection] = useState<SectionName>("home");
  const [scrollActiveSection, setScrollActiveSection] =
    useState<SectionName>("home");
  const [isHovering, setIsHovering] = useState(false);
  const [isPartnerHovered, setIsPartnerHovered] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  // Layout detection
  const [isDesktopView, setIsDesktopView] = useState<boolean | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAVBAR_BREAKPOINT = 1245;

  const navRefs = {
    home: useRef<HTMLLIElement>(null),
    about: useRef<HTMLLIElement>(null),
    partner: useRef<HTMLLIElement>(null),
    mission: useRef<HTMLLIElement>(null),
    contact: useRef<HTMLLIElement>(null),
  };

  // Initialize layout detection
  useEffect(() => {
    if (isDesktopView === null) {
      const width = window.innerWidth;
      setIsDesktopView(width >= NAVBAR_BREAKPOINT);
    }
  }, [isDesktopView]);

  // Active indicator calculation
  useEffect(() => {
    if (navRefs[activeSection]?.current && isDesktopView) {
      const activeNavItem = navRefs[activeSection].current;
      const activeNavDims = activeNavItem.getBoundingClientRect();
      const highlighterPadding = 20;

      setActiveIndicator({
        left: activeNavItem.offsetLeft + highlighterPadding,
        width: activeNavDims.width - highlighterPadding / 2,
        height: activeNavDims.height,
      });
    }
  }, [activeSection, isDesktopView]);

  // Resize and scroll handling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isDesktop = width >= NAVBAR_BREAKPOINT;
      setIsDesktopView(isDesktop);

      if (isDesktop && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosn = window.scrollY;

      // Lighthouse text color logic
      if ((scrollPosn >= 0 && scrollPosn < 650) || scrollPosn >= 3500) {
        setLighthouseTextColor("var(--light)");
      } else {
        setLighthouseTextColor("var(--charcoal)");
      }

      // Active section based on scroll position
      let newSection: SectionName = "home";
      if (scrollPosn < 650) {
        newSection = "home";
      } else if (scrollPosn < 1650) {
        newSection = "about";
      } else if (scrollPosn < 2500) {
        newSection = "partner";
      } else if (scrollPosn < 3500) {
        newSection = "mission";
      } else {
        newSection = "contact";
      }

      checkPartnerHovering(scrollPosn);

      setScrollActiveSection(newSection);

      if (!isHovering) {
        setActiveSection(newSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isHovering, mobileMenuOpen]);

  const checkPartnerHovering = (scrollPosn: number) => {
    if (scrollPosn > 1650 && scrollPosn < 2500) {
      setIsPartnerHovered(true);
    } else {
      setIsPartnerHovered(false);
    }
  };

  const scrollToSection = (sectionId: SectionName) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setScrollActiveSection(sectionId);

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const handleNavMouseEnter = (section: SectionName) => {
    setIsHovering(true);
    setActiveSection(section);
  };

  const handleNavMouseLeave = () => {
    setIsHovering(false);
    setActiveSection(scrollActiveSection);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems: Array<{ name: SectionName; label: string }> = [
    { name: "home", label: "Home" },
    { name: "about", label: "About Us" },
    { name: "partner", label: "Partner" },
    { name: "mission", label: "Our Mission" },
    { name: "contact", label: "Contact" },
  ];

  // Wait for desktop or mobile view to be set
  if (isDesktopView === null) {
    return (
      <nav className="flex justify-between bg-transparent items-center fixed top-2 md:top-5 left-0 w-full z-50 px-2 md:px-4 py-2">
        <div className="flex items-center">
          <Image src="/lighthouse_logo.png" alt="" width={50} height={50} />
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="flex justify-between bg-transparent items-center fixed top-2 md:top-5 left-0 w-full z-50 px-2 md:px-4 py-2">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image src="/lighthouse_logo.png" alt="" width={50} height={50} />
          <h1
            className={`text-2xl md:text-4xl transition-all duration-300 ml-2 ${
              isPartnerHovered || !isDesktopView ? "opacity-0" : "opacity-100"
            }`}
            style={{ color: lighthouseTextColor }}
          >
            Lighthouse
          </h1>
        </div>

        {isDesktopView ? (
          <>
            <Box
              width="650px"
              height="55px"
              sx={{
                backgroundColor: `rgba(254, 250, 240, 0.27)`,
                backdropFilter: `blur(10px)`,
                WebkitBackdropFilter: `blur(10px)`,
                zIndex: 500,
                border: "1px solid black",
                borderRadius: "10px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseLeave={handleNavMouseLeave}
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
                    onMouseEnter={handleNavMouseEnter}
                    onClick={scrollToSection}
                  />
                ))}
              </ul>
            </Box>
            <div className="block">
              <CTAButton />
            </div>
          </>
        ) : (
          <HamburgerIcon
            isOpen={mobileMenuOpen}
            toggleOpen={toggleMobileMenu}
            className="ml-auto"
          />
        )}
      </nav>

      <HamburgerMenu
        isOpen={mobileMenuOpen && !isDesktopView}
        navItems={navItems}
        activeSection={scrollActiveSection}
        onNavItemClick={scrollToSection}
      />
    </>
  );
}
