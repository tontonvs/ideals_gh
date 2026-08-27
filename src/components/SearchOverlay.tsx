import { useState } from "react";

interface SearchOverlayProps {
  onClose: () => void;
}

const TRENDING_SEARCHES = [
  "iPhone 17 Pro",
  "Range Rover Sport",
  "MacBook Pro M4",
  "PlayStation 5",
];

const RECENT_SEARCHES = ["iPad Air", "HP EliteBook 840", "Galaxy S26 Ultra"];

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  return (
    <div style={styles.backdrop}>
      <div style={styles.sheet}>
        <div style={styles.searchRow}>
          <div style={styles.inputWrap}>
            <SearchIcon />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for what you need"
              style={styles.input}
            />
          </div>
          <button style={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>

        <div style={styles.scrollArea}>
          <div style={styles.section}>
            <h2 style={styles.sectionHeading}>Trending Searches</h2>
            <div style={styles.list}>
              {TRENDING_SEARCHES.map((term) => (
                <button key={term} style={styles.row}>
                  <TrendUpIcon />
                  <span style={styles.rowText}>{term}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionHeading}>Recent Searches</h2>
            <div style={styles.list}>
              {RECENT_SEARCHES.map((term) => (
                <button key={term} style={styles.row}>
                  <ClockIcon />
                  <span style={styles.rowText}>{term}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="#8A96A0" strokeWidth="2" />
      <path
        d="M12 7.5V12l3 2"
        stroke="#8A96A0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 16l6-6 4 4 8-9"
        stroke="var(--color-accent-green)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5h6v6"
        stroke="var(--color-accent-green)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "var(--color-bg)",
    zIndex: 110,
    display: "flex",
    justifyContent: "center",
  },
  sheet: {
    width: "100%",
    maxWidth: 480,
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "16px",
    borderBottom: "1px solid #E7E1D3",
  },
  inputWrap: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: "0 12px",
    background: "var(--color-card)",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px 0",
    fontSize: "0.85rem",
    background: "transparent",
    color: "var(--color-text-dark)",
  },
  cancelBtn: {
    background: "none",
    border: "none",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "var(--color-navy)",
    whiteSpace: "nowrap",
  },
  scrollArea: {
    flex: 1,
    overflowY: "auto",
    padding: "20px 16px",
  },
  section: {
    marginBottom: 26,
  },
  sectionHeading: {
    margin: "0 0 12px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.92rem",
    color: "var(--color-text-dark)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 4px",
    background: "none",
    border: "none",
    textAlign: "left",
    borderBottom: "1px solid #EFEAE0",
  },
  rowText: {
    fontSize: "0.85rem",
    fontWeight: 500,
    color: "var(--color-text-dark)",
  },
};
