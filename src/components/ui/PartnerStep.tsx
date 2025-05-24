interface PartnerStepProps {
  num: number;
  title: string;
  description: string;
  onHover: () => void;
  onLeave: () => void;
  isHighlighted: boolean;
}

export function PartnerStep({
  num,
  title,
  description,
  onHover,
  onLeave,
  isHighlighted,
}: PartnerStepProps) {
  const textColorClass = isHighlighted
    ? "text-[var(--light)]"
    : "text-[#e2e6e9]";
  const borderColorClass = isHighlighted
    ? "border-[var(--light)]"
    : "border-[#e2e6e9]";

  return (
    <div
      className={`max-w-[700px] my-8 group hover:cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <p
        className={`text-[18px] mb-3 ${textColorClass} transition-colors duration-300`}
      >
        0{num}
      </p>
      <p
        className={`text-[40px] mb-7 ${textColorClass} transition-colors duration-300`}
      >
        {title}
      </p>
      <p
        className={`text-[16px] mb-7 ${textColorClass} transition-colors duration-300`}
      >
        {description}
      </p>
      <hr
        className={`border-t-2 ${borderColorClass} transition-colors duration-300`}
      />
    </div>
  );
}
