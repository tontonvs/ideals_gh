import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navItems = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Shop", path: "/shop", icon: ShopIcon },
  { label: "Cart", path: "/cart", icon: CartIcon },
  { label: "Orders", path: "/orders", icon: OrdersIcon },
  { label: "About Us", path: "/about", icon: AboutIcon },
];

const STROKE = 2.6;

export default function BottomNav() {
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <nav className="bottom-nav">
      {navItems.map(({ label, path, icon: Icon }) => {
        const active = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            style={{
              ...styles.item,
              color: active ? "var(--color-navy)" : "var(--color-text-muted)",
            }}
          >
            <div style={styles.iconWrap}>
              <Icon active={active} />
              {path === "/cart" && itemCount > 0 && (
                <span style={styles.badge}>{itemCount}</span>
              )}
            </div>
            <span style={styles.label}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

interface IconProps {
  active: boolean;
}

function iconColor(active: boolean) {
  return active ? "var(--color-navy)" : "#8A96A0";
}

function HomeIcon({ active }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 11l8-7 8 7v8a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1v-8z"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopIcon({ active }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 8l1.5-4h13L20 8"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="8"
        width="16"
        height="12"
        rx="1"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
      />
    </svg>
  );
}

function CartIcon({ active }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3h2l2.4 12.4a2 2 0 002 1.6h7.2a2 2 0 002-1.6L20 7H6"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="21" r="1.4" fill={iconColor(active)} />
      <circle cx="17" cy="21" r="1.4" fill={iconColor(active)} />
    </svg>
  );
}

function OrdersIcon({ active }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <rect
        x="5"
        y="4"
        width="14"
        height="17"
        rx="1"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
      />
      <line
        x1="8"
        y1="9"
        x2="16"
        y2="9"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="13"
        x2="16"
        y2="13"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

function AboutIcon({ active }: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
      />
      <line
        x1="12"
        y1="11"
        x2="12"
        y2="16"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="1.1" fill={iconColor(active)} />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
  },
  iconWrap: {
    position: "relative",
    display: "flex",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -7,
    background: "var(--color-badge)",
    color: "white",
    fontSize: "0.58rem",
    fontWeight: 700,
    borderRadius: "999px",
    minWidth: 14,
    height: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 3px",
  },
  label: {
    fontSize: "0.63rem",
    fontWeight: 600,
  },
};
