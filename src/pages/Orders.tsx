import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../components/ProductCard";

type OrdersTab = "orders" | "vehicles";

interface MockOrder {
  id: string;
  productId: string;
  status: string;
  date: string;
}

const MOCK_ORDERS: MockOrder[] = [
  { id: "IDG-40213", productId: "iphone-17-pro", status: "Delivered", date: "Aug 12" },
  { id: "IDG-40198", productId: "apple-watch-ultra-1", status: "Out for delivery", date: "Aug 20" },
  { id: "IDG-40166", productId: "hp-elitebook-840-g6", status: "Processing", date: "Aug 27" },
];

const MOCK_VEHICLES: MockOrder[] = [
  { id: "IDG-30071", productId: "honda-civic-sport-2023", status: "Pickup scheduled", date: "Aug 25" },
];

export default function Orders() {
  const [tab, setTab] = useState<OrdersTab>("orders");
  const [query, setQuery] = useState("");

  const list = tab === "orders" ? MOCK_ORDERS : MOCK_VEHICLES;
  const items = list
    .map((order) => {
      const product = products.find((p) => p.id === order.productId);
      return product ? { order, product } : null;
    })
    .filter((x): x is { order: MockOrder; product: (typeof products)[number] } => Boolean(x));

  return (
    <div style={styles.wrap}>
      <h1 style={styles.heading}>My Orders</h1>
      <p style={styles.subheading}>Track all your orders in one place</p>

      <div style={styles.tabRow}>
        <button
          style={{
            ...styles.tab,
            ...(tab === "orders" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>
        <button
          style={{
            ...styles.tab,
            ...(tab === "vehicles" ? styles.tabActive : {}),
          }}
          onClick={() => setTab("vehicles")}
        >
          Vehicles
        </button>
      </div>

      <div style={styles.searchRow}>
        <div style={styles.searchInputWrap}>
          <SearchGlyph />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by order ID, tracking..."
            style={styles.searchInput}
          />
        </div>
        <button style={styles.searchBtn}>Search</button>
        <button aria-label="Filter" style={styles.filterBtn}>
          <FilterGlyph />
        </button>
      </div>

      {items.length === 0 ? (
        <div style={styles.emptyState}>
          <p style={styles.emptyTitle}>No {tab === "orders" ? "orders" : "vehicles"} yet</p>
          <p style={styles.emptyText}>
            Your {tab === "orders" ? "orders and shipments" : "vehicle purchases"} will
            appear here.
          </p>
          <Link to="/shop" style={styles.startBtn}>
            Start Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.orderList}>
          {items.map(({ order, product }) => (
            <div key={order.id} style={styles.orderCard}>
              <div style={styles.orderImageWrap}>
                {product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    style={styles.orderImage}
                  />
                ) : (
                  <div style={styles.orderImagePlaceholder} />
                )}
              </div>
              <div style={styles.orderBody}>
                <p style={styles.orderName}>{product.name}</p>
                <p style={styles.orderId}>{order.id}</p>
                <div style={styles.orderFoot}>
                  <span style={styles.orderStatus}>{order.status}</span>
                  <span style={styles.orderDate}>{order.date}</span>
                </div>
              </div>
              <span style={styles.orderPrice}>{formatPrice(product.price)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SearchGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="#8A96A0" strokeWidth="2" />
      <line
        x1="21"
        y1="21"
        x2="16.65"
        y2="16.65"
        stroke="#8A96A0"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilterGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 6h16M7 12h10M10 18h4"
        stroke="var(--color-text-dark)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "20px 16px 32px",
  },
  heading: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "var(--color-text-dark)",
  },
  subheading: {
    margin: "4px 0 18px",
    fontSize: "0.82rem",
    color: "var(--color-text-muted)",
  },
  tabRow: {
    display: "flex",
    background: "#EDE9DD",
    borderRadius: "var(--radius-sm)",
    padding: 4,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    padding: "9px 0",
    border: "none",
    background: "transparent",
    borderRadius: "var(--radius-sm)",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--color-text-muted)",
  },
  tabActive: {
    background: "var(--color-navy)",
    color: "white",
  },
  searchRow: {
    display: "flex",
    gap: 8,
    marginBottom: 22,
  },
  searchInputWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: "0 10px",
    background: "var(--color-card)",
  },
  searchInput: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px 0",
    fontSize: "0.8rem",
    background: "transparent",
    color: "var(--color-text-dark)",
  },
  searchBtn: {
    background: "var(--color-navy)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-sm)",
    padding: "0 16px",
    fontSize: "0.82rem",
    fontWeight: 600,
  },
  filterBtn: {
    width: 40,
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    background: "var(--color-card)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyState: {
    textAlign: "center",
    padding: "36px 12px",
  },
  emptyTitle: {
    margin: "0 0 6px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.98rem",
    color: "var(--color-text-dark)",
  },
  emptyText: {
    margin: "0 0 22px",
    fontSize: "0.82rem",
    color: "var(--color-text-muted)",
  },
  startBtn: {
    display: "inline-block",
    background: "var(--color-navy)",
    color: "white",
    fontWeight: 600,
    fontSize: "0.88rem",
    padding: "12px 28px",
    borderRadius: "var(--radius-sm)",
  },
  orderList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  orderCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: 10,
  },
  orderImageWrap: {
    width: 56,
    height: 56,
    borderRadius: "var(--radius-sm)",
    overflow: "hidden",
    background: "#F1EEE6",
    flexShrink: 0,
  },
  orderImage: { width: "100%", height: "100%", objectFit: "cover" },
  orderImagePlaceholder: { width: "100%", height: "100%" },
  orderBody: { flex: 1, minWidth: 0 },
  orderName: {
    margin: 0,
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#10202B",
    lineHeight: 1.3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  orderId: {
    margin: "2px 0 4px",
    fontSize: "0.68rem",
    color: "var(--color-text-muted)",
  },
  orderFoot: { display: "flex", gap: 8, alignItems: "center" },
  orderStatus: {
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "var(--color-navy)",
    background: "#E9F0F4",
    padding: "2px 8px",
    borderRadius: "999px",
  },
  orderDate: { fontSize: "0.68rem", color: "var(--color-text-muted)" },
  orderPrice: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.82rem",
    color: "#10202B",
    flexShrink: 0,
  },
};
