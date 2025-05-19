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
      className="w-22/23 h-11/12"
    >
      {children}
    </div>
  );
}
