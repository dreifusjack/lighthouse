import CenteredBox from "../ui/CenteredBox";
import PartnerContent from "../ui/PartnerContent";
export default function Partner() {
  return (
    <section id="partner">
      <div className="w-full h-screen flex items-center justify-center ">
        <CenteredBox children={<PartnerContent />} />
      </div>
    </section>
  );
}
