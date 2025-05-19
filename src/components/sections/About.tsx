import AboutModule from "../ui/AboutModule";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="h-250 bg-gradient-to-t from-[#ebf6fe] to-[#fcf6d7]"
    >
      <div className="h-250  flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl">
          <p className="text-[40px] font-bold">
            Lighthouse is a <span className="font-extrabold">Launch Fund</span>
          </p>
          <p className="text-[35px] font-semibold pt-15">
            We help founders turn their projects into lasting businesses—without
            the headaches of running a company.
          </p>
        </div>
        <div className="flex justify-between pt-40 gap-[200px] px-6">
          <AboutModule
            icon={<Image src="/buy.png" alt="" width={50} height={50} />}
            title="Buy"
            content="If you love to build but don’t enjoy everything else that comes along with running a business like admin tasks & management - then partner with us!"
            refrencesExternalLink={false}
          />
          <AboutModule
            icon={<Image src="/build.png" alt="" width={50} height={50} />}
            title="Build"
            content="Have a Great Idea? We help bring great ideas to life. Apply to have your idea built by our Studio. From concept to completion."
            refrencesExternalLink={true}
          />
          <AboutModule
            icon={<Image src="/invest.png" alt="" width={50} height={50} />}
            title="Invest"
            content="Not your traditional capital. We invest in companies that can thrive off a single round of investment. Coming soon..."
            refrencesExternalLink={false}
          />
        </div>
      </div>
    </section>
  );
}
