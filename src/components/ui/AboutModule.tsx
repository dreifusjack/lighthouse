"use client";
import { scrollToContact } from "@/utils";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

interface AboutModuleProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  refrencesExternalLink: boolean;
}

export default function AboutModule({
  icon,
  title,
  content,
  refrencesExternalLink,
}: AboutModuleProps) {
  const [isHovering, setIsHovering] = useState(false);
  const linkTitle = title === "Invest" ? "Incubate" : title;

  return (
    <div className="flex flex-col items-center justify-between w-[90%]">
      <div className="mb-4">{icon}</div>
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center">
        {title}
      </h1>
      <p className="text-sm md:text-base text-center leading-relaxed mb-4 md:mb-6 flex-grow">
        {content}
      </p>
      <div
        className="flex cursor-pointer items-center transition-all duration-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (refrencesExternalLink) {
            window.open("https://www.builtwithatlas.com/", "_blank");
          } else {
            scrollToContact();
          }
        }}
      >
        <p
          className={`${
            isHovering ? "text-md font-medium" : "text-sm"
          } transition-all duration-200`}
        >
          {linkTitle}
        </p>
        <KeyboardArrowRightIcon
          className={`${
            isHovering ? "transform translate-x-1" : ""
          } transition-transform duration-200`}
        />
      </div>
    </div>
  );
}
