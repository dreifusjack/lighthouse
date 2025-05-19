import React from "react";

interface PolygonProps {
  isFilled: boolean;
}

export default function Polygon({ isFilled }: PolygonProps) {
  return (
    <svg width="343" height="200">
      <polygon
        points="100,10 40,198 190,78 10,78 "
        style={{ fill: "black", stroke: "var(--light)", strokeWidth: 2 }}
      />
    </svg>
  );
}
