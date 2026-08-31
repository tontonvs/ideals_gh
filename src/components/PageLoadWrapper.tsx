import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

const LOAD_DURATION_MS = 2000;

export default function PageLoadWrapper({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), LOAD_DURATION_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return (
      <div style={styles.wrap}>
        <div style={{ ...styles.block, width: "45%", height: 20 }} />
        <div style={{ ...styles.block, width: "75%", height: 12 }} />

        <div style={styles.row}>
          <div style={{ ...styles.block, flex: 1, height: 90 }} />
          <div style={{ ...styles.block, flex: 1, height: 90 }} />
        </div>

        <div style={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ ...styles.block, height: 150 }} />
          ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  block: {
    borderRadius: "var(--radius-sm)",
    background:
      "linear-gradient(90deg, #ECECEC 25%, #F6F6F6 37%, #ECECEC 63%)",
    backgroundSize: "400% 100%",
    animation: "shimmer 1.4s ease infinite",
  },
  row: {
    display: "flex",
    gap: 12,
    margin: "6px 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: 12,
  },
};
