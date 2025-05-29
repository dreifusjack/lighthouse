"use client";
import { useState, useEffect } from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="h-250 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png"
          alt="Lighthouse on cliff"
          fill
          style={{
            objectFit: "cover",
            transform: isLoaded ? "scale(1)" : "scale(1.05)",
            transition: "transform 1.2s ease-out",
          }}
          priority
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#fcf6d7] opacity-100"></div>
      <div className="relative z-20 h-200 flex flex-col justify-center items-center space-y-6 px-4 text-center">
        <div
          className="max-w-2xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <h1 className="text-[var(--light)] text-[48px]">
            We Buy & Build Software Tools For Entreprenuers
          </h1>
        </div>
        <p
          className="text-[var(--light)] max-w-xl"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            transitionDelay: "0.6s",
          }}
        >
          We work with founders to grow products. By partnering with Lighthouse
          you can skip managing a team and focus on what you enjoy, building.{" "}
        </p>
        <div
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
