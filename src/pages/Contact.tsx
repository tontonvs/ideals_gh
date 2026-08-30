const WHATSAPP_NUMBER = "0261669206";
const LOCATION = "Madina Zongo Junction, Opposite the Old Assembly";

export default function Contact() {
  return (
    <div style={styles.wrap}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subheading}>
        Reach out any time, most messages get a reply within the hour.
      </p>

      <div style={styles.cardList}>
        <a
          href={`https://wa.me/233${WHATSAPP_NUMBER.slice(1)}`}
          target="_blank"
          rel="noreferrer"
          style={styles.card}
        >
          <div style={styles.iconWrap}>
            <WhatsAppIcon />
          </div>
          <div>
            <p style={styles.cardLabel}>WhatsApp</p>
            <p style={styles.cardValue}>{WHATSAPP_NUMBER}</p>
          </div>
        </a>

        <a href={`tel:${WHATSAPP_NUMBER}`} style={styles.card}>
          <div style={styles.iconWrap}>
            <PhoneIcon />
          </div>
          <div>
            <p style={styles.cardLabel}>Call</p>
            <p style={styles.cardValue}>{WHATSAPP_NUMBER}</p>
          </div>
        </a>

        <div style={styles.card}>
          <div style={styles.iconWrap}>
            <PinIcon />
          </div>
          <div>
            <p style={styles.cardLabel}>Location</p>
            <p style={styles.cardValue}>{LOCATION}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20l1.3-4A8 8 0 1112 20a8 8 0 01-4-1.1L4 20z"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.5c0 3 2.5 5.5 5.5 5.5"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2c-8 0-15-7-15-15a2 2 0 012-2z"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s-7-6.5-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.5 12 21 12 21z"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="var(--color-navy)" strokeWidth="2" />
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
    margin: "4px 0 20px",
    fontSize: "0.85rem",
    color: "var(--color-text-muted)",
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: "14px 16px",
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#E9F0F4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardLabel: {
    margin: 0,
    fontSize: "0.7rem",
    color: "var(--color-text-muted)",
  },
  cardValue: {
    margin: "2px 0 0",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "var(--color-text-dark)",
  },
};
