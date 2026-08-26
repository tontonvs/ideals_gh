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
        <span style={styles.conditionTag}>{product.condition}</span>
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
    aspectRatio: "2.7 / 3.9",
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
    flex: "0 0 56%",
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
    fontSize: "0.64rem",
    color: "#A9A297",
  },
  conditionTag: {
    position: "absolute",
    top: 6,
    left: 6,
    fontSize: "0.58rem",
    fontWeight: 700,
    color: "#10202B",
    background: "rgba(255,255,255,0.92)",
    padding: "2px 6px",
    borderRadius: "var(--radius-sm)",
  },
  body: {
    padding: "6px 7px 7px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    gap: 2,
  },
  name: {
    margin: 0,
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#10202B",
    lineHeight: 1.25,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 5,
    marginTop: 3,
    flexWrap: "wrap",
  },
  price: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.8rem",
    color: "#10202B",
  },
  originalPrice: {
    fontSize: "0.64rem",
    fontWeight: 300,
    color: "#10202B",
    textDecoration: "line-through",
  },
  stockLine: {
    margin: "2px 0 0",
    fontSize: "0.64rem",
    fontWeight: 300,
    color: "#10202B",
  },
};
