interface PolygonProps {
  isFilled: boolean;
  label: string;
  size?: "small" | "medium" | "large";
}

export function Polygon({ isFilled, label, size = "large" }: PolygonProps) {
  const getSvgDimensions = () => {
    switch (size) {
      case "small":
        return {
          width: 300,
          height: 110,
          points: "110.25,5 225,55 110.25,105 0,55",
        };
      case "medium":
        return {
          width: 450,
          height: 165,
          points: "165.4,7.5 337.5,82.5 165.4,157.5 0,82.5",
        };
      case "large":
      default:
        return {
          width: 600,
          height: 220,
          points: "220.5,10 450,110 220.5,210 0,110",
        };
    }
  };

  const { width, height, points } = getSvgDimensions();

  const getTextPosition = () => {
    const x = "90%";
    switch (size) {
      case "small":
        return { x, fontSize: "8px" };
      case "medium":
        return { x, fontSize: "12px" };
      case "large":
      default:
        return { x, fontSize: "18px" };
    }
  };

  const { x, fontSize } = getTextPosition();

  return (
    <svg width={width} height={height} className="duration-300">
      <polygon
        points={points}
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
        x={x}
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="var(--light)"
        style={{ fontSize }}
      >
        {label}
      </text>
    </svg>
  );
}
