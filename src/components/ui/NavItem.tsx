import { SectionName } from "@/utils";
import React from "react";

interface NavItemProps {
  sectionName: SectionName;
  label: string;
  activeSection: SectionName;
  ref: React.Ref<HTMLLIElement>;
  onMouseEnter: (section: SectionName) => void;
  onClick: (section: SectionName) => void;
}

export default function NavItem({
  sectionName,
  label,
  activeSection,
  ref,
  onMouseEnter,
  onClick,
}: NavItemProps) {
  return (
    <li
      ref={ref}
      className={`text-xl font-medium cursor-pointer transition-all px-4 py-1.5 rounded-2xl ${
        activeSection === sectionName ? "font-bold" : ""
      }`}
      onMouseEnter={() => onMouseEnter(sectionName)}
      onClick={() => onClick(sectionName)}
    >
      {label}
    </li>
  );
}
