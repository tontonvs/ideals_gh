import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/", icon: HomeIcon },
  { label: "Shop", path: "/shop", icon: ShopIcon },
  { label: "Orders", path: "/orders", icon: OrdersIcon },
  { label: "Contact", path: "/contact", icon: ContactIcon },
];

const STROKE = 2.4;
const ICON_SIZE = 27;

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map(({ label, path, icon: Icon }) => {
        const active = location.pathname === path;
        return (
          <Link key={path} to={path} style={styles.item}>
            <Icon active={active} />
            <span
              style={{
                ...styles.label,
                color: active ? "var(--color-navy)" : "#8A96A0",
              }}
            >
              {label}
            </span>
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
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
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
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
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

function ContactIcon({ active }: IconProps) {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2c-8 0-15-7-15-15a2 2 0 012-2z"
        stroke={iconColor(active)}
        strokeWidth={STROKE}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OrdersIcon({ active }: IconProps) {
  return (
    <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="none">
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

const styles: Record<string, React.CSSProperties> = {
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  label: {
    fontSize: "0.63rem",
    fontWeight: 600,
  },
};
