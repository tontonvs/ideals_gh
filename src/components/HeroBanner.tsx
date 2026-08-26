import { useEffect, useState } from "react";

interface Slide {
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    title: "Hello, Customer!",
    subtitle: "Discover amazing products at prices you'll love, all in one place.",
  },
  {
    title: "Shop at Affordable Prices",
    subtitle: "Get iPhones, MacBooks, cars and more, all verified and ready to ship.",
  },
];

export default function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          style={{
            ...styles.slide,
            opacity: index === activeIndex ? 1 : 0,
            pointerEvents: index === activeIndex ? "auto" : "none",
          }}
        >
          <h1 style={styles.title}>{slide.title}</h1>
          <p style={styles.subtitle}>{slide.subtitle}</p>
        </div>
      ))}
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    position: "relative",
    height: 88, // ~2.3cm, right below top-nav with no gap
    background: "#D7E8F0", // light blue
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    overflow: "hidden",
  },
  slide: {
    position: "absolute",
    left: 18,
    right: 18,
    transition: "opacity 0.6s ease",
  },
  title: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "var(--color-navy)",
  },
  subtitle: {
    margin: "4px 0 0",
    fontFamily: "var(--font-body)",
    fontSize: "0.78rem",
    color: "#1C3A4D",
    lineHeight: 1.35,
  },
};
