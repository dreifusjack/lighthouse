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
    <div className="flex flex-col items-center justify-between w-100 h-75">
      {icon}
      <h1>{title}</h1>
      <p>{content}</p>
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
          console.log("h");
        }}
      >
        <p className={isHovering ? "text-md font-medium" : "text-sm"}>
          {linkTitle}
        </p>
        <KeyboardArrowRightIcon
          className={isHovering ? "transform translate-x-1" : ""}
        />
      </div>
    </div>
  );
}
