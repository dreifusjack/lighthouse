import { ReactNode } from "react";

interface CenteredBoxProps {
  children?: ReactNode;
}

export default function CenteredBox({ children }: CenteredBoxProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--blue)",
      }}
      className="w-full md:w-22/23 h-auto md:h-11/12 min-h-[80vh] md:min-h-0 "
    >
      {children}
    </div>
  );
}
