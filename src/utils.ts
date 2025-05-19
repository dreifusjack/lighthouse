export type SectionName = "home" | "about" | "partner" | "mission" | "contact";

export const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };