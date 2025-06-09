"use client";
import { useState, useEffect } from "react";
import { PartnerStep } from "./PartnerStep";
import { Polygon } from "./Polygon";

export default function PartnerContent() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isWideScreenThreshold, setIsWideScreenThreshold] = useState(true);
  const [isSmallScreenThreshold, setIsSmallScreenThreshold] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const MEDIUM_BREAKPOINT = 1475;
  const SMALL_BREAKPOINT = 480;

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreenThreshold(window.innerWidth >= MEDIUM_BREAKPOINT);
      setIsSmallScreenThreshold(window.innerWidth <= SMALL_BREAKPOINT);

      if (!hasInitialized) {
        setHasInitialized(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasInitialized]);

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

  const getPolygonSpacing = () => {
    if (isWideScreenThreshold) return 130;
    if (isSmallScreenThreshold) return 70;
    return 100;
  };

  const getPolygonSize = (): "small" | "medium" | "large" => {
    if (isWideScreenThreshold) return "large";
    if (isSmallScreenThreshold) return "small";
    return "medium";
  };

  const getContainerHeightAdjustment = () => {
    if (isWideScreenThreshold) return 0;
    if (isSmallScreenThreshold) return 40;
    return 65;
  };

  if (!hasInitialized) {
    return (
      <div className="w-full pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8 py-6">
        <div className="w-full pl-0 sm:pl-2 lg:pl-[20px]">
          <h1 className="text-[color:var(--light)] text-2xl md:text-4xl pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]">
            Lighthouse
          </h1>
          <hr className="border-t-2 border-[var(--light)] w-full max-w-[700px]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full ${
        isWideScreenThreshold ? "flex" : "block"
      } pl-2 sm:pl-4 lg:pl-6 pr-4 sm:pr-6 lg:pr-8 py-6`}
    >
      <div
        className={`${
          isWideScreenThreshold ? "w-1/2" : "w-full"
        } pl-0 sm:pl-2 lg:pl-[20px]`}
      >
        <h1 className="text-[color:var(--light)] text-2xl md:text-4xl pt-[10px] lg:pt-[20px] pb-[10px] lg:pb-[20px]">
          Lighthouse
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
        <div className="relative w-1/2 ml-[8%] mt-[10%]">
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
              <Polygon isFilled={hoveredStep === step.num} label={step.label} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-12 mb-8">
          <div
            className="relative mx-auto"
            style={{
              height: `${
                reverseSteps.length * getPolygonSpacing() +
                getContainerHeightAdjustment()
              }px`,
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
                  size={getPolygonSize()}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
