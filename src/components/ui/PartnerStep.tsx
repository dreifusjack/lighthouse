interface PartnerStepProps {
  num: number;
  title: string;
  description: string;
}

export default function PartnerStep({
  num,
  title,
  description,
}: PartnerStepProps) {
  return (
    <div className="max-w-[700px] my-8 group hover:cursor-pointer">
      {/* Changed from fixed text-[var(--light)] to group-hover effect */}
      <p className="text-[18px] mb-3 text-[#e2e6e9] group-hover:text-[var(--light)] transition-colors duration-300">
        0{num}
      </p>
      <p className="text-[40px] mb-7 text-[#e2e6e9] group-hover:text-[var(--light)] transition-colors duration-300">
        {title}
      </p>
      <p className="text-[16px] mb-7 text-[#e2e6e9] group-hover:text-[var(--light)] transition-colors duration-300">
        {description}
      </p>
      <hr className="border-t-2 border-[#e2e6e9] group-hover:border-[var(--light)] transition-colors duration-300" />
    </div>
  );
}
