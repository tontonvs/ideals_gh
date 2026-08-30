import { Link } from "react-router-dom";
import { categoryShortcuts, CIRCLE_FILTER_MAP } from "../data/products";

const imageByCategory: Record<string, string> = {
  phones: "/categories/phones.jpg",
  laptops: "/categories/laptop.jpg",
  cars: "/categories/car.jpg",
  accessories: "/categories/watch.jpg",
  consoles: "/categories/console.jpg",
};

export default function CategoryCircles() {
  return (
    <section style={styles.wrap}>
      <h2 style={styles.heading}>Browse Top Category</h2>
      <div style={styles.row} className="hide-scrollbar">
        {categoryShortcuts.map((shortcut) => (
          <Link
            key={shortcut.id}
            to={`/shop?filter=${CIRCLE_FILTER_MAP[shortcut.category] ?? "all"}`}
            style={styles.item}
          >
            <div style={styles.circle}>
              <img
                src={imageByCategory[shortcut.category]}
                alt={shortcut.label}
                style={styles.circleImage}
              />
            </div>
            <span style={styles.label}>{shortcut.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "18px 0 4px",
  },
  heading: {
    margin: "0 0 14px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "var(--color-text-dark)",
    padding: "0 16px",
  },
  row: {
    display: "flex",
    justifyContent: "flex-start",
    gap: 14,
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    scrollbarWidth: "none",
    padding: "0 16px 4px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    flex: "0 0 auto",
  },
  circle: {
    width: 69,
    height: 69,
    borderRadius: "50%",
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(14,42,61,0.08)",
  },
  circleImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  label: {
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "var(--color-text-muted)",
  },
};
