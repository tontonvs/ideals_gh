import { categoryShortcuts } from "../data/products";

const emojiByCategory: Record<string, string> = {
  phones: "\u{1F4F1}",
  laptops: "\u{1F4BB}",
  cars: "\u{1F697}",
  accessories: "\u231A",
  consoles: "\u{1F3AE}",
};

export default function CategoryCircles() {
  return (
    <section style={styles.wrap}>
      <h2 style={styles.heading}>Browse Top Category</h2>
      <div style={styles.row}>
        {categoryShortcuts.map((shortcut) => (
          <button key={shortcut.id} style={styles.item}>
            <div style={styles.circle}>
              <span style={styles.emoji}>
                {emojiByCategory[shortcut.category] ?? "\u{1F6D2}"}
              </span>
            </div>
            <span style={styles.label}>{shortcut.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "18px 16px 4px",
  },
  heading: {
    margin: "0 0 14px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "var(--color-text-dark)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    flex: 1,
  },
  circle: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(14,42,61,0.08)",
  },
  emoji: {
    fontSize: "1.3rem",
  },
  label: {
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "var(--color-text-muted)",
  },
};
