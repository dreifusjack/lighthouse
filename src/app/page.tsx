import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Partner from "@/components/sections/Partner";
import Mission from "@/components/sections/Mission";
import Collaborate from "@/components/sections/Collaborate";
import Footer from "@/components/sections/Footer";
import BuiltByWidget from "@/components/ui/BuiltByWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Partner />
      <Mission />
      <Collaborate />
      <Footer />
      <BuiltByWidget />
    </main>
  );
}
