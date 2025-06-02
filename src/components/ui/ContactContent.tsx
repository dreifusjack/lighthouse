import React from "react";
import { PopupButton } from "react-calendly";
import EmailIcon from "@mui/icons-material/Email";
import EmailForm from "./EmailForm";

interface ContactContentProps {
  root: HTMLElement | null;
}

export function ContactContent({ root }: ContactContentProps) {
  return (
    <div className="pt-8 md:pt-[40px] px-4 md:ps-[50px] text-center w-full">
      <h1 className="text-[color:var(--light)] text-2xl md:text-3xl lg:text-[48px] responsive-title mb-6">
        Let's Collaborate
      </h1>
      <div className="flex flex-col md:flex-row items-center mt-4 justify-center gap-2 md:gap-1">
        <EmailIcon className="text-[var(--light)]" />
        <p className="text-[color:var(--light)] text-lg md:text-xl lg:text-[24px] responsive-text break-all md:break-normal">
          hey@builtwithatlas.com
        </p>
      </div>
      {root && (
        <div className="mt-6 flex justify-center">
          <PopupButton
            url="https://calendly.com/dimitri-builtwithatlas/intro"
            rootElement={root}
            text="Schedule a call!"
            className="bg-[var(--red)] text-[var(--light)] px-6 md:px-4 py-3 md:py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300 text-sm md:text-base
                hover:shadow-lg hover:transform hover:scale-105 active:scale-95"
          />
        </div>
      )}
      <div className="mt-6">
        <EmailForm />
      </div>
    </div>
  );
}
