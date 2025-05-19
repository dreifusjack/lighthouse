"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[250px] pt-[75px]">
      <div className="ms-[10%] max-w-[80%] flex flex-col">
        <div className="flex flex-row justify-between items-end mb-4">
          <Image src="/lighthouse_logo.png" alt="" width={50} height={50} />
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/lighthouse-search-fund/",
                "_blank"
              )
            }
            className="cursor-pointer hover:text-[var(--blue)] transition-colors"
          >
            <LinkedInIcon fontSize="large" />
          </div>
        </div>
        <hr className="border-t border-[var(--charcoal)] w-full" />
        <div className="flex flex-row items-center mt-4 self-center">
          <CopyrightIcon fontSize="small" />
          <p className="ml-1">2025 Lighthouse. All Rights Reserved.</p>
        </div>
        <p className="text-center mt-2">
          Design & Development:{" "}
          <span
            className="underline cursor-pointer hover:text-[var(--blue)] transition-colors"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jack-dreifus/",
                "_blank"
              );
            }}
          >
            Jack Dreifus
          </span>
        </p>
      </div>
    </div>
  );
}
