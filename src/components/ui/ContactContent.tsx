import React from "react";
import { PopupButton } from "react-calendly";
import EmailIcon from "@mui/icons-material/Email";
import EmailForm from "./EmailForm";

interface ContactContentProps {
  root: HTMLElement | null;
}

export function ContactContent({ root }: ContactContentProps) {
  return (
    <div className="pt-[40px] ps-[50px] text-center">
      <h1 className="text-[color:var(--light)] text-[48px]">
        Let's Collaborate
      </h1>
      <div className="flex flex-row items-center mt-4 justify-center">
        <EmailIcon />
        <p className="ml-1 text-[color:var(--light)] text-[24px]">
          lighthouse@gmail.com
        </p>
      </div>
      {root && (
        <div className="mt-6 flex justify-center">
          <PopupButton
            url="https://calendly.com/dreifusjack"
            rootElement={root}
            text="Schedule a call!"
            className="bg-[var(--red)] text-[var(--light)] px-4 py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300
                hover:shadow-lg hover:transform hover:scale-105 active:scale-95"
          />
        </div>
      )}
      <EmailForm />
    </div>
  );
}
