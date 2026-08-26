interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.text}>This page is coming soon.</p>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "40px 20px",
    textAlign: "center",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.3rem",
    color: "var(--color-text-dark)",
    marginBottom: 8,
  },
  text: {
    color: "var(--color-text-muted)",
    fontSize: "0.9rem",
  },
};
