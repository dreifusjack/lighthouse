import React, { useEffect } from "react";
import CTAButton from "../ui/CTAButton";
import { SectionName } from "@/utils";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ name: SectionName; label: string }>;
  activeSection: SectionName;
  onNavItemClick: (section: SectionName) => void;
}

export default function MobileMenu({
  isOpen,
  navItems,
  activeSection,
  onNavItemClick,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 backdrop-blur-lg z-40 transition-all duration-500 flex flex-col items-center justify-center ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="w-full max-w-md px-8">
        <ul className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`text-2xl font-medium cursor-pointer transition-all px-4 py-2 text-[var(--charcoal)]  ${
                activeSection === item.name ? "underline font-bold" : ""
              }`}
              onClick={() => onNavItemClick(item.name)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
