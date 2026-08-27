import type { ProductCondition } from "../types";

interface ConditionBadgeProps {
  condition: ProductCondition;
  size?: "sm" | "lg";
}

const INSTA_GRADIENT = "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)";

export default function ConditionBadge({
  condition,
  size = "sm",
}: ConditionBadgeProps) {
  const padding = size === "lg" ? "3px 9px" : "2px 6px";
  const fontSize = size === "lg" ? "0.7rem" : "0.58rem";

  return (
    <span
      style={{
        display: "inline-block",
        background: INSTA_GRADIENT,
        borderRadius: "var(--radius-sm)",
        padding: 3,
      }}
    >
      <span
        style={{
          display: "block",
          fontWeight: 700,
          color: "#10202B",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "calc(var(--radius-sm) - 1px)",
          padding,
          fontSize,
        }}
      >
        {condition}
      </span>
    </span>
  );
}
