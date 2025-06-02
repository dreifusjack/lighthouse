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
    <section id="contact" className="min-h-screen py-8 md:py-0">
      <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-0">
        <CenteredBox children={<ContactContent root={root} />} />
      </div>
    </section>
  );
}
