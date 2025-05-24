"use client";
import { useState } from "react";
import { PartnerStep } from "./PartnerStep";
import { Polygon } from "./Polygon";

export default function PartnerContent() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

  return (
    <div className="flex">
      <div className="ps-[60px]">
        <h1 className="text-[color:var(--light)] text-[48px] pt-[20px] pb-[20px]">
          Partner With Us!
        </h1>
        <hr className="border-t-2 border-[var(--light)] w-[700px]" />
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
      <div className="relative ml-[15%] mt-[10%]">
        {reverseSteps.map((step, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${index * 130}px`,
              zIndex: steps.length - index,
            }}
            onMouseEnter={() => setHoveredStep(step.num)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <Polygon isFilled={hoveredStep === step.num} label={step.label} />
          </div>
        ))}
      </div>
    </div>
  );
}
