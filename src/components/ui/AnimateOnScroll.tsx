"use client";
import { useIntersectionAnimation } from "@/utils";
import { ReactNode, CSSProperties } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-in";
  delay?: number;
  options?: {
    threshold?: number;
    rootMargin?: string;
  };
  className?: string;
  style?: CSSProperties;
  [key: string]: any;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  options = {},
  className = "",
  style = {},
  ...props
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useIntersectionAnimation(options);

  const animations = {
    "fade-up": {
      initial: "translate-y-16 opacity-0",
      animate: "translate-y-0 opacity-100",
      transition: "transition-all duration-700",
    },
    "fade-in": {
      initial: "opacity-0",
      animate: "opacity-100",
      transition: "transition-all duration-700",
    },
    "scale-in": {
      initial: "scale-95 opacity-0",
      animate: "scale-100 opacity-100",
      transition: "transition-all duration-700",
    },
  };

  const selectedAnimation = animations[animation] || animations["fade-up"];

  return (
    <div
      ref={ref}
      className={`${selectedAnimation.transition} ${
        isVisible ? selectedAnimation.animate : selectedAnimation.initial
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
