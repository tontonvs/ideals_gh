export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logoRow}>
        <span style={styles.recycle}>&#9851;</span>
        <span style={styles.logoText}>iDeals_gh</span>
      </div>

      <div style={styles.columns}>
        <div style={styles.column}>
          <h4 style={styles.colHeading}>About Us</h4>
          <p style={styles.colText}>
            iDeals GH connects buyers in Ghana to verified, honestly graded
            phones, laptops and cars at fair prices.
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Services</h4>
          <p style={styles.colText}>Buy & Sell</p>
          <p style={styles.colText}>Delivery & Shipping</p>
          <p style={styles.colText}>Trade-In</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Support</h4>
          <p style={styles.colText}>WhatsApp: 024 000 0000</p>
          <p style={styles.colText}>Email: hello@idealsgh.com</p>
          <p style={styles.colText}>Accra, Ghana</p>
        </div>
      </div>

      <div style={styles.divider} />
      <p style={styles.copyright}>
        &copy; 2026 iDeals GH. All rights reserved.
      </p>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "var(--color-navy-dark)",
    color: "#C9D3D8",
    padding: "24px 16px 20px",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 49, // ~1.3cm space below logo row
  },
  recycle: {
    color: "white",
    fontSize: "1.2rem",
  },
  logoText: {
    color: "white",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.05rem",
  },
  columns: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  column: {},
  colHeading: {
    margin: "0 0 8px",
    color: "white",
    fontFamily: "var(--font-display)",
    fontSize: "0.82rem",
    fontWeight: 700,
  },
  colText: {
    margin: "0 0 4px",
    fontSize: "0.76rem",
    lineHeight: 1.6,
    color: "#AEBCC3",
  },
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.12)",
    margin: "20px 0 14px",
  },
  copyright: {
    margin: 0,
    fontSize: "0.7rem",
    color: "#8FA0A8",
    textAlign: "center",
  },
};
