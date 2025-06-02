import AboutModule from "../ui/AboutModule";
import Image from "next/image";
import AnimateOnScroll from "../ui/AnimateOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:h-250 bg-gradient-to-t from-[var(--light)] to-[#fcf6d7]"
    >
      <div className="h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <div className="max-w-xl md:max-w-2xl mb-8 md:mb-12">
          <AnimateOnScroll animation="fade-up" delay={150}>
            <p className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-bold">
              Lighthouse is a{" "}
              <span className="font-extrabold">Launch Fund</span>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <p className="text-xl sm:text-2xl md:text-[28px] lg:text-[35px] font-semibold pt-4 md:pt-15">
              We help founders turn their projects into lasting
              businesses—without the headaches of running a company.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Module container - changes from row to column on smaller screens */}
        <div className="flex flex-col md:flex-row md:justify-between pt-8 md:pt-16 lg:pt-40 gap-12 md:gap-8 lg:gap-[200px] px-6">
          <AnimateOnScroll animation="fade-up" delay={450}>
            <AboutModule
              icon={<Image src="/buy.png" alt="" width={50} height={50} />}
              title="Buy"
              content="If you love to build but don't enjoy everything else that comes along with running a business like admin tasks - then partner with us!"
              refrencesExternalLink={false}
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <AboutModule
              icon={<Image src="/build.png" alt="" width={50} height={50} />}
              title="Build"
              content="Have a Great Idea? We help bring great ideas to life. Apply to have your idea built by our Studio. From concept to completion."
              refrencesExternalLink={true}
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={750}>
            <AboutModule
              icon={<Image src="/invest.png" alt="" width={50} height={50} />}
              title="Invest"
              content="Not your traditional capital. We invest in companies that can thrive off a single round of investment. Coming soon..."
              refrencesExternalLink={false}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
