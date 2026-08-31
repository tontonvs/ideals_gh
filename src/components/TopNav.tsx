import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchOverlay from "./SearchOverlay";

const NOTIFICATIONS = [
  { id: "n1", text: "Your order IDG-40198 is out for delivery", time: "2h ago" },
  { id: "n2", text: "Price drop: iPhone 17 Pro now GH₵13,500", time: "1d ago" },
  { id: "n3", text: "New arrival: Honda Civic Sport (2023)", time: "3d ago" },
];

export default function TopNav() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);
  const { itemCount } = useCart();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target as Node)
      ) {
        setNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header style={styles.nav}>
        <Link to="/" style={styles.logoWrap}>
          <span style={styles.recycle}>&#9851;</span>
          <span style={styles.logoText}>iDeals_gh</span>
        </Link>

        <div style={styles.icons}>
          <button
            aria-label="Search"
            style={styles.iconBtn}
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>

          <Link to="/cart" aria-label="Cart" style={styles.iconBtn}>
            <CartIcon />
            {itemCount > 0 && <span style={styles.badge}>{itemCount}</span>}
          </Link>

          <div ref={notifRef} style={{ position: "relative" }}>
            <button
              aria-label="Notifications"
              style={styles.iconBtn}
              onClick={() => setNotifOpen((v) => !v)}
            >
              <BellIcon />
              {NOTIFICATIONS.length > 0 && (
                <span style={styles.badge}>{NOTIFICATIONS.length}</span>
              )}
            </button>

            {notifOpen && (
              <div style={styles.notifDropdown}>
                <p style={styles.notifHeading}>Notifications</p>
                {NOTIFICATIONS.map((n) => (
                  <div key={n.id} style={styles.notifItem}>
                    <p style={styles.notifText}>{n.text}</p>
                    <p style={styles.notifTime}>{n.time}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              aria-label="Profile menu"
              style={styles.iconBtn}
              onClick={() => setProfileOpen((v) => !v)}
            >
              <ProfileIcon />
              <ChevronIcon open={profileOpen} />
            </button>

            {profileOpen && (
              <div style={styles.dropdown}>
                <Link
                  to="/profile"
                  style={styles.dropdownItem}
                  onClick={() => setProfileOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  style={styles.dropdownItem}
                  onClick={() => setProfileOpen(false)}
                >
                  My Orders
                </Link>
                <div style={styles.dropdownDivider} />
                <button
                  style={{ ...styles.dropdownItem, ...styles.logoutItem }}
                  onClick={() => setProfileOpen(false)}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" />
      <line
        x1="21"
        y1="21"
        x2="16.65"
        y2="16.65"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3h2l2.4 12.4a2 2 0 002 1.6h7.2a2 2 0 002-1.6L20 7H6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="21" r="1.4" fill="white" />
      <circle cx="17" cy="21" r="1.4" fill="white" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9a6 6 0 0112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 13 6 9z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 17a2.5 2.5 0 005 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="white" strokeWidth="2" />
      <path
        d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      style={{
        marginLeft: 2,
        transition: "transform 0.2s",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    height: 60, // ~1.6cm
    background: "var(--color-navy)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    position: "sticky",
    top: 0,
    zIndex: 40,
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  recycle: {
    color: "white",
    fontSize: "1.3rem",
    lineHeight: 1,
  },
  logoText: {
    color: "white",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.15rem",
    letterSpacing: "-0.01em",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  iconBtn: {
    position: "relative",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    padding: 4,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -6,
    background: "var(--color-badge)",
    color: "white",
    fontSize: "0.62rem",
    fontWeight: 700,
    borderRadius: "999px",
    minWidth: 15,
    height: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 3px",
  },
  dropdown: {
    position: "absolute",
    top: "calc(100% + 10px)",
    right: 0,
    background: "white",
    borderRadius: "var(--radius-md)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
    minWidth: 170,
    overflow: "hidden",
    zIndex: 50,
  },
  dropdownItem: {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "12px 16px",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "var(--color-text-dark)",
    background: "none",
    border: "none",
  },
  dropdownDivider: {
    height: 1,
    background: "#EEE",
  },
  logoutItem: {
    color: "var(--color-accent-red)",
  },
  notifDropdown: {
    position: "absolute",
    top: "calc(100% + 10px)",
    right: 0,
    background: "white",
    borderRadius: "var(--radius-md)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
    width: 260,
    overflow: "hidden",
    zIndex: 50,
  },
  notifHeading: {
    margin: 0,
    padding: "12px 16px 8px",
    fontSize: "0.78rem",
    fontWeight: 700,
    color: "var(--color-text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  },
  notifItem: {
    padding: "10px 16px",
    borderTop: "1px solid #F0EDE4",
  },
  notifText: {
    margin: 0,
    fontSize: "0.82rem",
    color: "var(--color-text-dark)",
    lineHeight: 1.4,
  },
  notifTime: {
    margin: "3px 0 0",
    fontSize: "0.68rem",
    color: "var(--color-text-muted)",
  },
};
