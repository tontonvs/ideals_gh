import { Link } from "react-router-dom";
import { categoryShortcuts, CIRCLE_FILTER_MAP } from "../data/products";

const imageByCategory: Record<string, string> = {
  phones: "/categories/phones.jpg",
  laptops: "/categories/laptop.jpg",
  cars: "/categories/car.jpg",
  accessories: "/categories/watch.jpg",
  consoles: "/categories/console.jpg",
};

// Most circles get the gradient ring (mirrors Instagram's story ring);
// leaving one plain adds a bit of realistic variety. A couple of the
// ringed circles also get three tiny "break" dots cut into the ring.
const RINGED_CATEGORIES = new Set(["phones", "laptops", "cars", "accessories"]);
const BROKEN_RING_CATEGORIES = new Set(["phones", "cars"]);

const INSTA_GRADIENT = "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)";

export default function CategoryCircles() {
  return (
    <section style={styles.wrap}>
      <h2 style={styles.heading}>Browse Top Category</h2>
      <div style={styles.row} className="hide-scrollbar">
        {categoryShortcuts.map((shortcut) => {
          const ringed = RINGED_CATEGORIES.has(shortcut.category);
          const broken = BROKEN_RING_CATEGORIES.has(shortcut.category);

          return (
            <Link
              key={shortcut.id}
              to={`/shop?filter=${CIRCLE_FILTER_MAP[shortcut.category] ?? "all"}`}
              style={styles.item}
            >
              <div
                style={{
                  ...styles.ringOuter,
                  background: ringed ? INSTA_GRADIENT : "transparent",
                  padding: ringed ? 3 : 0,
                }}
              >
                <div
                  style={{
                    ...styles.ringGap,
                    padding: ringed ? 1.3 : 0,
                  }}
                >
                  <div style={styles.circle}>
                    <img
                      src={imageByCategory[shortcut.category]}
                      alt={shortcut.label}
                      style={styles.circleImage}
                    />
                  </div>
                </div>

                {broken && (
                  <>
                    <span style={{ ...styles.breakDot, bottom: 3, right: 12 }} />
                    <span style={{ ...styles.breakDot, bottom: 0, right: 9 }} />
                    <span style={{ ...styles.breakDot, bottom: -3, right: 6 }} />
                  </>
                )}
              </div>
              <span style={styles.label}>{shortcut.label}</span>
            </Link>
          );
        })}
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
  ringOuter: {
    position: "relative",
    borderRadius: "50%",
  },
  ringGap: {
    background: "var(--color-bg)",
    borderRadius: "50%",
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
  breakDot: {
    position: "absolute",
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: "var(--color-bg)",
  },
  label: {
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "var(--color-text-muted)",
  },
};
