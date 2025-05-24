interface PolygonProps {
  isFilled: boolean;
  label: string;
}

export function Polygon({ isFilled, label }: PolygonProps) {
  const diamondPoints = "220.5,10 450,110 220.5,210 0,110";

  return (
    <div className="flex">
      <svg width="600" height="220" className=" duration-300">
        <polygon
          points={diamondPoints}
          className="transition-all duration-300 cursor-pointer"
          style={
            isFilled
              ? { fill: "var(--red)", stroke: "var(--light)", strokeWidth: 2 }
              : {
                  fill: "transparent",
                  stroke: "var(--light)",
                  strokeWidth: 1.5,
                }
          }
        />
        <text
          x="90%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--light)"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}
