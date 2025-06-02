"use client";
import { useState, useEffect } from "react";
import { PartnerStep } from "./PartnerStep";
import { Polygon } from "./Polygon";

export default function PartnerContent() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isWideScreenThreshold, setIsWideScreenThreshold] = useState(true);

  const LAYOUT_BREAKPOINT = 1475;

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreenThreshold(window.innerWidth >= LAYOUT_BREAKPOINT);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let count = 1;
  const steps = [
    {
      num: count++,
      title: "Sell",
      description: "A full acquisition with an upfront offer for your SaaS.",
      label: "01. Sell",
    },
    {
      num: count++,
      title: "Scale",
      description:
        "Stay involved and earn from your product while we help it grow.",
      label: "02. Revenue",
    },
    {
      num: count,
      title: "What We Like",
      description:
        "We're passionate about scalable SaaS tools, AI-first products that harness the power of automation and machine learning, and building solutions designed for entrepreneurs.",
      label: "03. Accelerators",
    },
  ];
  const reverseSteps = [...steps].reverse();

  // Calculate spacing based on polygon size
  const getPolygonSpacing = () => {
    return isWideScreenThreshold ? 130 : 100;
  };

  return (
    <div
      className={`w-full ${
        isWideScreenThreshold ? "flex" : "block"
      } px-4 sm:px-6 lg:px-8 py-6`}
    >
      <div
        className={`${
          isWideScreenThreshold ? "w-1/2" : "w-full"
        } pl-0 sm:pl-4 lg:pl-[60px]`}
      >
        <h1 className="text-[color:var(--light)] text-3xl md:text-4xl lg:text-[48px] pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]">
          Partner With Us!
        </h1>
        <hr className="border-t-2 border-[var(--light)] w-full max-w-[700px]" />
        {steps.map((step, index) => (
          <div
            key={index}
            className={hoveredStep === step.num ? "highlight-container" : ""}
          >
            <PartnerStep
              {...step}
              onHover={() => setHoveredStep(step.num)}
              onLeave={() => setHoveredStep(null)}
              isHighlighted={hoveredStep === step.num}
            />
          </div>
        ))}
      </div>

      {isWideScreenThreshold ? (
        <div className="relative w-1/2 ml-[15%] mt-[10%]">
          {reverseSteps.map((step, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${index * getPolygonSpacing()}px`,
                zIndex: steps.length - index,
              }}
              onMouseEnter={() => setHoveredStep(step.num)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <Polygon
                isFilled={hoveredStep === step.num}
                label={step.label}
                size="wide"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-12 mb-8">
          <div
            className="relative mx-auto"
            style={{
              height: `${reverseSteps.length * getPolygonSpacing() + 65}px`,
              width: "100%",
            }}
          >
            {reverseSteps.map((step, index) => (
              <div
                key={index}
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{
                  top: `${index * getPolygonSpacing()}px`,
                  zIndex: steps.length - index,
                }}
                onMouseEnter={() => setHoveredStep(step.num)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <Polygon
                  isFilled={hoveredStep === step.num}
                  label={step.label}
                  size="slim"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
