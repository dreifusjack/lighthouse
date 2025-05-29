"use client";
import { useState, useEffect, useRef } from "react";

/**
 * Type representing various section names throughout site
 */
export type SectionName = "home" | "about" | "partner" | "mission" | "contact";

/**
 * Logic for scrolling to the contact section
 */
export const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

/**
 * Custom hook to handle intersection-based animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0 to 1)
 * @param {string} options.rootMargin - Root margin string (CSS format)
 * @returns {Object} - Reference object and visibility state
 */
export function useIntersectionAnimation({ 
  threshold = 0.2, 
  rootMargin = "0px" 
} = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}