"use client";
import { useState, useEffect } from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPositionStyles = () => {
    if (windowWidth >= 1024) {
      return { objectPosition: "center center" };
    } else {
      return { objectPosition: "40% center" };
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen h-auto md:h-250 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png"
          alt="Lighthouse on cliff"
          fill
          priority
          style={{
            objectFit: "cover",
            transform: isLoaded ? "scale(1)" : "scale(1.05)",
            transition:
              "transform 1.2s ease-out, object-position 0.5s ease-out",
            ...getPositionStyles(),
          }}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#fcf6d7] opacity-100"></div>
      <div className="relative z-20 min-h-screen md:h-200 flex flex-col justify-center items-center space-y-4 md:space-y-6 px-4 md:px-8 text-center responsive-section">
        <div
          className="max-w-4xl w-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <h1 className="text-[var(--light)] responsive-title text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We Buy & Build Software Tools For Entrepreneurs
          </h1>
        </div>
        <p
          className="text-[var(--light)] max-w-2xl responsive-text text-lg md:text-xl leading-relaxed"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.6s",
          }}
        >
          We work with founders to grow products. By partnering with Lighthouse
          you can skip managing a team and focus on what you enjoy, building.
        </p>
        <div
          className="mt-6 md:mt-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.9s",
          }}
        >
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
