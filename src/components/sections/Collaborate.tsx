"use client";
import { ContactContent } from "./../ui/ContactContent";
import CenteredBox from "../ui/CenteredBox";
import { useState, useEffect } from "react";

export default function Collaborate() {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.getElementById("contact"));
  }, []);

  return (
    <section id="contact">
      <div className="w-full h-screen flex items-center justify-center ">
        <CenteredBox children={<ContactContent root={root} />} />
      </div>
    </section>
  );
}
