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
    : "text-[#b0ddf5]";
  const borderColorClass = isHighlighted
    ? "border-[var(--light)]"
    : "border-[#b0ddf5]";

  return (
    <div
      className={`w-full max-w-[700px] my-4 sm:my-6 md:my-8 group hover:cursor-pointer`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <p
        className={`text-base sm:text-lg md:text-[18px] mb-1 sm:mb-2 md:mb-3 ${textColorClass} transition-colors duration-300`}
      >
        0{num}
      </p>
      <p
        className={`text-2xl sm:text-3xl md:text-[40px] mb-3 sm:mb-5 md:mb-7 ${textColorClass} transition-colors duration-300`}
      >
        {title}
      </p>
      <p
        className={`text-sm sm:text-base md:text-[16px] mb-3 sm:mb-5 md:mb-7 ${textColorClass} transition-colors duration-300`}
      >
        {description}
      </p>
      <hr
        className={`border-t-2 ${borderColorClass} transition-colors duration-300 w-full`}
      />
    </div>
  );
}
