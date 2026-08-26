import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

function formatPrice(value: number): string {
  return `GH₵${value.toLocaleString("en-GH")}`;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isCar = product.category === "cars";

  return (
    <div style={styles.card}>
      <div style={styles.imageWrap}>
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            style={styles.image}
          />
        ) : (
          <div style={styles.imagePlaceholder}>Image coming soon</div>
        )}
        <span
          style={{
            ...styles.conditionTag,
            color:
              product.condition === "Brand New"
                ? "var(--color-accent-green)"
                : "#B8860B",
          }}
        >
          {product.condition}
        </span>
      </div>

      <div style={styles.body}>
        <p style={styles.name}>{product.name}</p>

        <div style={styles.priceRow}>
          <span style={styles.price}>{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span style={styles.originalPrice}>
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <p style={styles.stockLine}>
          {isCar ? "One time deal" : `${product.stock} in stock`}
        </p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    width: "100%",
    // ~2.7cm x 4.8cm scaled up for legibility, ratio preserved
    aspectRatio: "2.7 / 4.8",
    background: "var(--color-card)",
    borderRadius: "var(--radius-sm)",
    border: "none",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 1px 4px rgba(14,42,61,0.06)",
  },
  imageWrap: {
    position: "relative",
    flex: "0 0 58%",
    background: "#F1EEE6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imagePlaceholder: {
    fontSize: "0.68rem",
    color: "#A9A297",
  },
  conditionTag: {
    position: "absolute",
    top: 8,
    left: 8,
    fontSize: "0.62rem",
    fontWeight: 700,
    background: "rgba(255,255,255,0.92)",
    padding: "2px 7px",
    borderRadius: "var(--radius-sm)",
  },
  body: {
    padding: "10px 10px 12px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    margin: 0,
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "var(--color-text-dark)",
    lineHeight: 1.3,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 6,
    marginTop: 6,
    flexWrap: "wrap",
  },
  price: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "var(--color-accent-green)",
  },
  originalPrice: {
    fontSize: "0.68rem",
    color: "var(--color-text-muted)",
    textDecoration: "line-through",
  },
  stockLine: {
    margin: "6px 0 0",
    fontSize: "0.68rem",
    color: "var(--color-text-muted)",
  },
};
