export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.logoRow}>
        <span style={styles.recycle}>&#9851;</span>
        <span style={styles.logoText}>iDeals_gh</span>
      </div>

      <p style={styles.tagline}>
        Closing the distance between Ghanaian buyers and verified, honestly
        graded phones, laptops and cars, at prices that make sense.
      </p>

      <div style={styles.columns}>
        <div style={styles.column}>
          <h4 style={styles.colHeading}>Company</h4>
          <p style={styles.colText}>Landing Page</p>
          <p style={styles.colText}>About Us</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Services</h4>
          <p style={styles.colText}>Shop</p>
          <p style={styles.colText}>Sell / Trade-In</p>
          <p style={styles.colText}>Delivery</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Contacts</h4>
          <p style={styles.colText}>Accra</p>
          <p style={styles.colText}>Kumasi</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.colHeading}>Support</h4>
          <p style={styles.colText}>Help Center</p>
          <p style={styles.colText}>Shipping Policy</p>
          <p style={styles.colText}>Refund Policy</p>
          <p style={styles.colText}>Privacy Policy</p>
          <p style={styles.colText}>Terms of Service</p>
        </div>
      </div>

      <div style={styles.divider} />

      <p style={styles.copyright}>
        &copy; 2026 iDeals GH. All rights reserved.
      </p>

      <div style={styles.paymentRow}>
        <span style={styles.paymentBadge}>Visa</span>
        <span style={styles.paymentBadge}>Mastercard</span>
        <span style={styles.paymentBadge}>Mobile Money</span>
        <span style={styles.paymentBadge}>Bank Transfer</span>
      </div>
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
  tagline: {
    margin: "0 0 24px",
    fontSize: "0.8rem",
    lineHeight: 1.6,
    color: "#C9D3D8",
    maxWidth: 340,
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: 16,
    rowGap: 22,
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
    margin: "0 0 6px",
    fontSize: "0.76rem",
    lineHeight: 1.6,
    color: "#AEBCC3",
  },
  divider: {
    height: 1,
    background: "rgba(255,255,255,0.12)",
    margin: "24px 0 14px",
  },
  copyright: {
    margin: "0 0 16px",
    fontSize: "0.7rem",
    color: "#8FA0A8",
    textAlign: "center",
  },
  paymentRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
  },
  paymentBadge: {
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: "var(--radius-sm)",
    padding: "6px 12px",
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "#DCE4E8",
  },
};
