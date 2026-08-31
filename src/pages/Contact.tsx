import Footer from "../components/Footer";

const WHATSAPP_NUMBER = "0261669206";
const LOCATION = "Madina Zongo Junction, Opposite the Old Assembly";

export default function Contact() {
  return (
    <div>
      <div style={styles.wrap}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.subheading}>
          Reach out any time, most messages get a reply within the hour.
          Whether it's a question about a listing, a delivery update, or you
          just want to negotiate a price, we're a message away.
        </p>

        <div style={styles.rowList}>
          <div style={styles.row}>
            <WhatsAppIcon />
            <div>
              <p style={styles.rowLabel}>WhatsApp</p>
              <a
                href={`https://wa.me/233${WHATSAPP_NUMBER.slice(1)}`}
                target="_blank"
                rel="noreferrer"
                style={styles.rowValueLink}
              >
                {WHATSAPP_NUMBER}
              </a>
            </div>
          </div>

          <div style={styles.row}>
            <PhoneIcon />
            <div>
              <p style={styles.rowLabel}>Call</p>
              <a href={`tel:${WHATSAPP_NUMBER}`} style={styles.rowValueLink}>
                {WHATSAPP_NUMBER}
              </a>
            </div>
          </div>

          <div style={styles.row}>
            <PinIcon />
            <div>
              <p style={styles.rowLabel}>Location</p>
              <p style={styles.rowValue}>{LOCATION}</p>
            </div>
          </div>

          <div style={styles.row}>
            <ClockIcon />
            <div>
              <p style={styles.rowLabel}>Hours</p>
              <p style={styles.rowValue}>Mon – Sat, 9:00 AM – 7:00 PM</p>
            </div>
          </div>

          <div style={styles.row}>
            <InstagramIcon />
            <div>
              <p style={styles.rowLabel}>Instagram</p>
              <a
                href="https://instagram.com/ideals_gh"
                target="_blank"
                rel="noreferrer"
                style={styles.rowValueLink}
              >
                @ideals_gh
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
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

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="var(--color-navy)" strokeWidth="2" />
      <path
        d="M12 7.5V12l3 2"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="var(--color-navy)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="var(--color-navy)" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="var(--color-navy)" />
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
    margin: "6px 0 22px",
    fontSize: "0.84rem",
    lineHeight: 1.6,
    color: "var(--color-text-muted)",
  },
  rowList: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    padding: "14px 0",
    borderBottom: "1px solid #EFEAE0",
  },
  rowLabel: {
    margin: 0,
    fontSize: "0.7rem",
    color: "var(--color-text-muted)",
  },
  rowValue: {
    margin: "2px 0 0",
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "var(--color-text-dark)",
  },
  rowValueLink: {
    display: "block",
    marginTop: 2,
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "var(--color-navy)",
  },
};
