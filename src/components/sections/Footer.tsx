"use client";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-auto md:h-[250px] py-8 md:pt-[75px] px-4 md:px-0">
      <div className="mx-auto md:ms-[10%] max-w-full md:max-w-[80%] flex flex-col">
        <div className="flex flex-row justify-between items-center md:items-end mb-4">
          <Image
            src="/lighthouse_logo.png"
            alt=""
            width={40}
            height={40}
            className="md:w-[50px] md:h-[50px]"
          />
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/lighthouse-search-fund/",
                "_blank"
              )
            }
            className="cursor-pointer hover:text-[var(--blue)] transition-colors"
          >
            <LinkedInIcon fontSize="large" className="text-2xl md:text-3xl" />
          </div>
        </div>
        <hr className="border-t border-[var(--charcoal)] w-full" />
        <div className="flex flex-row items-center mt-4 self-center">
          <CopyrightIcon fontSize="small" />
          <p className="ml-1 text-sm md:text-base">
            2025 Lighthouse. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
