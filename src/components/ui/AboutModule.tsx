"use client";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

interface AboutModuleProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  color: string;
  //href: TBD
}

export default function AboutModule({
  icon,
  title,
  content,
  color,
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
