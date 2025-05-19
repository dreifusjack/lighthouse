import PartnerStep from "./PartnerStep";
import Polygon from "./Polygon";

export default function PartnerContent() {
  let count = 1;
  const steps = [
    {
      num: count++,
      title: "Sell",
      description: "A full acquisition with an upfront offer for your SaaS.",
    },
    {
      num: count++,
      title: "Scale",
      description:
        "Stay involved and earn from your product while we help it grow.",
    },
    {
      num: count,
      title: "What We Like",
      description:
        "We're passionate about scalable SaaS tools, AI-first products that harness the power of automation and machine learning, and building solutions designed for entrepreneurs.",
    },
  ];
  return (
    <div className="flex">
      <div className="ps-[60px]">
        <h1 className="text-[color:var(--light)] text-[48px] pt-[20px] pb-[20px]">
          Partner With Us!
        </h1>
        <hr className="border-t-2 border-[var(--light)] w-[700px]" />
        {steps.map((step, index) => (
          <PartnerStep key={index} {...step} />
        ))}
      </div>
      <Polygon isFilled={false} />
    </div>
  );
}
