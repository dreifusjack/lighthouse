import CTAButton from "../ui/CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="h-250 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.png"
          alt="Lighthouse on cliff"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#fcf6d7] opacity-100"></div>
      <div className="relative z-20 h-200 flex flex-col justify-center items-center space-y-6 px-4 text-center">
        <div className="max-w-2xl">
          <h1 className="text-[color:var(--light)] text-[48px]">
            We Buy & Build Software Tools For Entreprenuers
          </h1>
        </div>
        <p className="text-[color:var(--light)] max-w-xl">
          We work with founders to grow products. By partnering with Lighthouse
          you can skip managing a team and focus on what you enjoy, building.{" "}
        </p>
        <CTAButton />
      </div>
    </section>
  );
}
