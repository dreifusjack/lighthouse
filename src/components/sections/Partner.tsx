import CenteredBox from "../ui/CenteredBox";
import PartnerContent from "../ui/PartnerContent";
export default function Partner() {
  return (
    <section id="partner" className="min-h-screen py-8 md:py-0">
      <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
        <CenteredBox children={<PartnerContent />} />
      </div>
    </section>
  );
}
