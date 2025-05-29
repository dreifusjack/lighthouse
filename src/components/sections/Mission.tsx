"use client";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function Mission() {
  const missionPoints = [
    {
      title: "The Challenge",
      content:
        "Too many great ideas die before they ever see the light of day—not because the idea was wrong, but because the path to execution was cluttered.",
    },
    {
      title: "Our Experience",
      content:
        "We've been in those shoes. We've built, launched, failed, and succeeded. And along the way, one truth became clear—entrepreneurship doesn't need to be this hard.",
    },
    {
      title: "Our Approach",
      content:
        "A frictionless foundation for anyone bold enough to take the leap. A place where you don't need to be a developer, marketer, or ops expert to get started. Just bring your idea—we'll take care of the rest.",
    },
    {
      title: "Our Mission",
      content:
        "To make starting and scaling a business radically simpler. Not by adding more tools, but by designing better ones. Seamless, integrated, and founder-first.",
    },
  ];

  return (
    <section id="mission" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimateOnScroll animation="fade-in" delay={0}>
          <div className="mb-16">
            <h1 className="text-5xl text-center mb-6">Our Mission</h1>
            <div className="h-1 w-24 bg-[var(--red)] mx-auto"></div>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {missionPoints.map((point, index) => (
            <AnimateOnScroll
              key={index}
              animation="fade-up"
              delay={index * 150}
              style={{
                borderLeft: index === 3 ? "4px solid var(--red)" : "none",
              }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl mb-4">{point.title}</h2>
              <p className="text-lg leading-relaxed">{point.content}</p>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-in" delay={700}>
          <div className="mt-16 text-center">
            <div className="text-xl mb-8">
              We're not just building software. We're building leverage for the
              next generation of creators.
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" delay={800}>
          <div className="text-center">
            <p className="text-xl font-bold">The Lighthouse Team</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
