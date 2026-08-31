export default function SkeletonBlock({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-sm)",
        background:
          "linear-gradient(90deg, #ECECEC 25%, #F6F6F6 37%, #ECECEC 63%)",
        backgroundSize: "400% 100%",
        animation: "shimmer 1.4s ease infinite",
        ...style,
      }}
    />
  );
}
