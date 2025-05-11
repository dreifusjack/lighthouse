import CTAButton from "../ui/CTAButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-250 bg-[linear-gradient(to_top,#fcf6d7_1%,#e2dab3_25%,#709be5_60%)]"
    >
      <div className="h-200 flex flex-col justify-center items-center space-y-6 px-4 text-center">
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
