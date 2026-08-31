import { useEffect, useState } from "react";

interface SplashScreenProps {
  onFinish: () => void;
}

const TOTAL_DURATION_MS = 2200;

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), TOTAL_DURATION_MS - 350);
    const finishTimer = setTimeout(onFinish, TOTAL_DURATION_MS);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div style={{ ...styles.backdrop, opacity: exiting ? 0 : 1 }}>
      <div style={styles.circle} />
      <div style={styles.contentWrap}>
        <span style={styles.logoText}>iDeals_gh</span>
        <span style={styles.recycle}>&#9851;</span>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    transition: "opacity 0.35s ease",
    pointerEvents: "none",
  },
  circle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "40px",
    height: "40px",
    marginTop: "-20px",
    marginLeft: "-20px",
    borderRadius: "50%",
    background: "var(--color-navy)",
    animation: "splashCircleExpand 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
  },
  contentWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: 8,
    zIndex: 1,
  },
  logoText: {
    color: "white",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.7rem",
    letterSpacing: "-0.01em",
    opacity: 0,
    animation: "splashTextBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards",
  },
  recycle: {
    color: "white",
    fontSize: "1.9rem",
    lineHeight: 1,
    opacity: 0,
    animation: "splashFadeIn 0.5s ease 1s forwards",
  },
};
