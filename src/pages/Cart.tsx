import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../components/ProductCard";
import { PAYSTACK_PUBLIC_KEY_TEST } from "../config/paystack";

type Step = "cart" | "delivery" | "details" | "summary" | "payment";
type DeliveryMethod = "delivery" | "pickup";

function randomOrderCode(): string {
  const digits = Math.floor(10000 + Math.random() * 90000);
  return `IDG-${digits}`;
}

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>("cart");
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>("delivery");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState("");
  const [payError, setPayError] = useState("");
  const [paying, setPaying] = useState(false);

  const grandTotal = total;

  function handlePlaceOrder() {
    if (!window.PaystackPop) {
      setPayError("Payment is still loading, please try again in a moment.");
      return;
    }

    setPayError("");
    setPaying(true);

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY_TEST,
      email: email.trim() || "customer@idealsgh.com",
      amount: Math.round(grandTotal * 100), // Paystack expects the smallest currency unit (pesewas)
      currency: "GHS",
      ref: randomOrderCode(),
      metadata: {
        full_name: fullName,
        phone,
        delivery_method: deliveryMethod,
        address: deliveryMethod === "delivery" ? address : "Pickup at shop",
      },
      callback: (response) => {
        // response.reference is the Paystack transaction reference. In
        // production this should be sent to a server route (e.g. a
        // Cloudflare Worker) that calls Paystack's
        // GET /transaction/verify/:reference with the SECRET key to
        // confirm the charge actually succeeded before marking the order
        // as paid. This demo trusts the client-side callback only.
        setPaying(false);
        setOrderCode(response.reference);
        setConfirmed(true);
      },
      onClose: () => {
        setPaying(false);
      },
    });

    handler.openIframe();
  }

  if (items.length === 0 && step === "cart") {
    return (
      <div style={styles.emptyWrap}>
        <p style={styles.emptyTitle}>Your cart is empty</p>
        <Link to="/shop" style={styles.emptyBtn}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      {step === "cart" && (
        <>
          <h1 style={styles.heading}>Your Cart</h1>
          <div style={styles.itemList}>
            {items.map((item) => {
              const variant = item.product.variants?.find(
                (v) => v.id === item.variantId
              );
              const price = variant ? variant.price : item.product.price;
              return (
                <div key={item.product.id + (item.variantId ?? "")} style={styles.cartRow}>
                  <div style={styles.cartImageWrap}>
                    {item.product.images[0] ? (
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        style={styles.cartImage}
                      />
                    ) : (
                      <div style={styles.cartImagePlaceholder} />
                    )}
                  </div>
                  <div style={styles.cartRowBody}>
                    <p style={styles.cartName}>{item.product.name}</p>
                    {variant && <p style={styles.cartVariant}>{variant.label}</p>}
                    <p style={styles.cartPrice}>{formatPrice(price)}</p>
                    <div style={styles.qtyRow}>
                      <button
                        style={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.product.id, item.variantId, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span style={styles.qtyValue}>{item.quantity}</span>
                      <button
                        style={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.product.id, item.variantId, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        style={styles.removeBtn}
                        onClick={() => removeFromCart(item.product.id, item.variantId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={styles.summaryBar}>
            <div>
              <p style={styles.summaryLabel}>Subtotal</p>
              <p style={styles.summaryValue}>{formatPrice(total)}</p>
            </div>
            <button style={styles.primaryBtn} onClick={() => setStep("delivery")}>
              Checkout
            </button>
          </div>
        </>
      )}

      {step === "delivery" && (
        <>
          <h1 style={styles.heading}>How would you like your order?</h1>
          <p style={styles.subheading}>
            Pick one to continue — you can change this before payment.
          </p>

          <div style={styles.methodRow}>
            <button
              style={{
                ...styles.methodCard,
                ...(deliveryMethod === "delivery" ? styles.methodCardActive : {}),
              }}
              onClick={() => setDeliveryMethod("delivery")}
            >
              <TruckIcon />
              <p style={styles.methodTitle}>Delivery</p>
              <p style={styles.methodSub}>We bring it to you</p>
            </button>
            <button
              style={{
                ...styles.methodCard,
                ...(deliveryMethod === "pickup" ? styles.methodCardActive : {}),
              }}
              onClick={() => setDeliveryMethod("pickup")}
            >
              <StoreIcon />
              <p style={styles.methodTitle}>Pickup</p>
              <p style={styles.methodSub}>Collect at our shop</p>
            </button>
          </div>

          <button style={styles.primaryBtnFull} onClick={() => setStep("details")}>
            Continue
          </button>
        </>
      )}

      {step === "details" && (
        <>
          <h1 style={styles.heading}>Checkout</h1>
          <StepTracker current={1} />
          <button style={styles.backLink} onClick={() => setStep("delivery")}>
            ‹ Change delivery method
          </button>

          <div style={styles.formCard}>
            <label style={styles.fieldLabel}>Full name</label>
            <input
              style={styles.input}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your full name"
            />

            <label style={styles.fieldLabel}>Phone number</label>
            <input
              style={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="024 000 0000"
            />

            <label style={styles.fieldLabel}>Email (optional — for payment receipt)</label>
            <input
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />

            {deliveryMethod === "delivery" && (
              <>
                <label style={styles.fieldLabel}>Delivery address</label>
                <input
                  style={styles.input}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Type your address"
                />

                <label style={styles.fieldLabel}>Note (optional)</label>
                <input
                  style={styles.input}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Gate code, landmark, delivery time..."
                />
              </>
            )}
          </div>

          <button style={styles.primaryBtnFull} onClick={() => setStep("summary")}>
            Continue to Summary
          </button>
        </>
      )}

      {step === "summary" && (
        <>
          <h1 style={styles.heading}>Checkout</h1>
          <StepTracker current={2} />
          <button style={styles.backLink} onClick={() => setStep("details")}>
            ‹ Back
          </button>

          <div style={styles.formCard}>
            {items.map((item) => {
              const variant = item.product.variants?.find(
                (v) => v.id === item.variantId
              );
              const price = variant ? variant.price : item.product.price;
              return (
                <div key={item.product.id + (item.variantId ?? "")} style={styles.summaryLine}>
                  <span style={styles.summaryLineLabel}>
                    {item.quantity} × {item.product.name}
                  </span>
                  <span style={styles.summaryLineValue}>
                    {formatPrice(price * item.quantity)}
                  </span>
                </div>
              );
            })}
            <div style={styles.divider} />
            <div style={styles.summaryLine}>
              <span style={styles.summaryLineLabel}>Subtotal</span>
              <span style={styles.summaryLineValue}>{formatPrice(total)}</span>
            </div>
            <div style={styles.summaryLine}>
              <span style={styles.summaryLineLabel}>
                {deliveryMethod === "delivery" ? "Delivery" : "Pickup"}
              </span>
              <span style={styles.summaryLineValue}>Confirmed via WhatsApp</span>
            </div>
            <div style={styles.divider} />
            <div style={styles.summaryLine}>
              <span style={styles.summaryLineLabelBold}>Total</span>
              <span style={styles.summaryLineValueBold}>{formatPrice(grandTotal)}</span>
            </div>
          </div>

          <button style={styles.primaryBtnFull} onClick={() => setStep("payment")}>
            Continue to Payment
          </button>
        </>
      )}

      {step === "payment" && (
        <>
          <h1 style={styles.heading}>Checkout</h1>
          <StepTracker current={3} />
          <button style={styles.backLink} onClick={() => setStep("summary")}>
            ‹ Back
          </button>

          <div style={styles.formCard}>
            <p style={styles.payAmountLabel}>Amount to pay</p>
            <p style={styles.payAmountValue}>{formatPrice(grandTotal)}</p>
            <p style={styles.payNote}>
              Test mode — use Paystack's test card 4084 0840 8408 4081, any
              future expiry, any CVV.
            </p>
            {payError && <p style={styles.payErrorText}>{payError}</p>}
            <button
              style={{
                ...styles.paystackBtn,
                ...(paying ? styles.paystackBtnDisabled : {}),
              }}
              onClick={handlePlaceOrder}
              disabled={paying}
            >
              {paying ? "Opening Paystack…" : "Pay with Paystack"}
            </button>
          </div>

          {confirmed && (
            <div style={styles.modalBackdrop}>
              <div style={styles.modal}>
                <ShieldIcon />
                <h2 style={styles.modalTitle}>Order confirmed</h2>
                <p style={styles.modalText}>
                  We'll WhatsApp you shortly to confirm{" "}
                  {deliveryMethod === "delivery" ? "delivery" : "pickup"} timing.
                </p>
                <div style={styles.orderCode}>{orderCode}</div>
                <a
                  href="https://wa.me/233261669206"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.whatsappBtn}
                >
                  WhatsApp
                </a>
                <button
                  style={styles.viewOrdersLink}
                  onClick={() => navigate("/orders")}
                >
                  View my orders
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function StepTracker({ current }: { current: 1 | 2 | 3 }) {
  const steps = ["Details", "Summary", "Payment"];
  return (
    <div style={styles.tracker}>
      {steps.map((label, i) => {
        const num = i + 1;
        const done = num < current;
        const active = num === current;
        return (
          <div key={label} style={styles.trackerItem}>
            <div
              style={{
                ...styles.trackerDot,
                ...(done || active ? styles.trackerDotActive : {}),
              }}
            >
              {done ? "✓" : num}
            </div>
            <span style={styles.trackerLabel}>{label}</span>
            {num < steps.length && <div style={styles.trackerLine} />}
          </div>
        );
      })}
    </div>
  );
}

function TruckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="12" height="9" rx="1" stroke="#10202B" strokeWidth="2" />
      <path d="M14 10h4l3 3v3h-7v-6z" stroke="#10202B" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="6.5" cy="18" r="1.6" stroke="#10202B" strokeWidth="2" />
      <circle cx="16.5" cy="18" r="1.6" stroke="#10202B" strokeWidth="2" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 9l1-5h14l1 5" stroke="#10202B" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0" stroke="#10202B" strokeWidth="2" strokeLinejoin="round" />
      <path d="M5 9v10h14V9" stroke="#10202B" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z"
        stroke="var(--color-navy)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8.5 12l2.5 2.5L16 9" stroke="var(--color-navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: { padding: "20px 16px 32px" },
  heading: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "var(--color-text-dark)",
  },
  subheading: {
    margin: "6px 0 20px",
    fontSize: "0.82rem",
    color: "var(--color-text-muted)",
  },
  emptyWrap: { padding: "60px 24px", textAlign: "center" },
  emptyTitle: { fontSize: "0.95rem", color: "var(--color-text-muted)", marginBottom: 18 },
  emptyBtn: {
    display: "inline-block",
    background: "var(--color-navy)",
    color: "white",
    fontWeight: 600,
    fontSize: "0.88rem",
    padding: "12px 28px",
    borderRadius: "var(--radius-sm)",
  },
  itemList: { display: "flex", flexDirection: "column", gap: 12, marginTop: 16 },
  cartRow: {
    display: "flex",
    gap: 12,
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: 10,
  },
  cartImageWrap: {
    width: 64,
    height: 64,
    borderRadius: "var(--radius-sm)",
    overflow: "hidden",
    background: "#F1EEE6",
    flexShrink: 0,
  },
  cartImage: { width: "100%", height: "100%", objectFit: "cover" },
  cartImagePlaceholder: { width: "100%", height: "100%" },
  cartRowBody: { flex: 1, minWidth: 0 },
  cartName: {
    margin: 0,
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#10202B",
    lineHeight: 1.3,
  },
  cartVariant: { margin: "2px 0 0", fontSize: "0.7rem", color: "var(--color-text-muted)" },
  cartPrice: {
    margin: "4px 0 6px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "0.85rem",
    color: "#10202B",
  },
  qtyRow: { display: "flex", alignItems: "center", gap: 8 },
  qtyBtn: {
    width: 24,
    height: 24,
    borderRadius: "var(--radius-sm)",
    border: "1px solid #E7E1D3",
    background: "white",
    fontSize: "0.9rem",
    lineHeight: 1,
  },
  qtyValue: { fontSize: "0.82rem", fontWeight: 600, minWidth: 14, textAlign: "center" },
  removeBtn: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "var(--color-accent-red)",
    fontSize: "0.72rem",
    fontWeight: 600,
  },
  summaryBar: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: "14px 16px",
  },
  summaryLabel: { margin: 0, fontSize: "0.7rem", color: "var(--color-text-muted)" },
  summaryValue: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1rem",
    color: "#10202B",
  },
  primaryBtn: {
    background: "var(--color-navy)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-sm)",
    padding: "12px 24px",
    fontSize: "0.85rem",
    fontWeight: 700,
  },
  primaryBtnFull: {
    display: "block",
    width: "100%",
    background: "var(--color-navy)",
    color: "white",
    border: "none",
    borderRadius: "var(--radius-sm)",
    padding: "14px 0",
    fontSize: "0.9rem",
    fontWeight: 700,
    marginTop: 22,
  },
  methodRow: { display: "flex", gap: 12, marginBottom: 4 },
  methodCard: {
    flex: 1,
    background: "var(--color-card)",
    border: "1.5px solid #E7E1D3",
    borderRadius: "var(--radius-md)",
    padding: "20px 12px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  methodCardActive: { borderColor: "var(--color-navy)", background: "#E9F0F4" },
  methodTitle: { margin: "4px 0 0", fontWeight: 700, fontSize: "0.88rem", color: "#10202B" },
  methodSub: { margin: 0, fontSize: "0.72rem", color: "var(--color-text-muted)" },
  tracker: { display: "flex", alignItems: "center", margin: "16px 0 6px" },
  trackerItem: { display: "flex", alignItems: "center", flex: 1, position: "relative" },
  trackerDot: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    background: "#E7E1D3",
    color: "var(--color-text-muted)",
    fontSize: "0.7rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  trackerDotActive: { background: "var(--color-navy)", color: "white" },
  trackerLabel: { fontSize: "0.68rem", marginLeft: 6, color: "var(--color-text-muted)", whiteSpace: "nowrap" },
  trackerLine: { flex: 1, height: 1, background: "#E7E1D3", margin: "0 8px" },
  backLink: {
    background: "none",
    border: "none",
    color: "var(--color-text-muted)",
    fontSize: "0.8rem",
    padding: 0,
    marginBottom: 14,
  },
  formCard: {
    background: "var(--color-card)",
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-md)",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  fieldLabel: { fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: 10 },
  input: {
    border: "1px solid #E7E1D3",
    borderRadius: "var(--radius-sm)",
    padding: "10px 12px",
    fontSize: "0.85rem",
    marginTop: 4,
    background: "#F9F7F1",
    color: "#10202B",
  },
  summaryLine: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "0.82rem" },
  summaryLineLabel: { color: "var(--color-text-muted)" },
  summaryLineValue: { color: "#10202B", fontWeight: 600 },
  summaryLineLabelBold: { color: "#10202B", fontWeight: 700 },
  summaryLineValueBold: { color: "#10202B", fontWeight: 700, fontFamily: "var(--font-display)" },
  divider: { height: 1, background: "#EFEAE0", margin: "6px 0" },
  payAmountLabel: { margin: 0, fontSize: "0.75rem", color: "var(--color-text-muted)", textAlign: "center" },
  payAmountValue: {
    margin: "4px 0 4px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.4rem",
    color: "#10202B",
    textAlign: "center",
  },
  payNote: { margin: "0 0 16px", fontSize: "0.7rem", color: "var(--color-text-muted)", textAlign: "center" },
  payErrorText: {
    margin: "0 0 12px",
    fontSize: "0.75rem",
    color: "var(--color-accent-red)",
    textAlign: "center",
  },
  paystackBtn: {
    display: "block",
    width: "100%",
    background: "#00C3F7",
    color: "#032A2E",
    border: "none",
    borderRadius: "var(--radius-sm)",
    padding: "13px 0",
    fontSize: "0.9rem",
    fontWeight: 700,
  },
  paystackBtnDisabled: {
    opacity: 0.6,
  },
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(16,32,43,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 120,
    padding: 24,
  },
  modal: {
    background: "white",
    borderRadius: "var(--radius-md)",
    padding: "28px 24px",
    textAlign: "center",
    maxWidth: 340,
    width: "100%",
  },
  modalTitle: {
    margin: "12px 0 4px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#10202B",
  },
  modalText: { margin: "0 0 16px", fontSize: "0.8rem", color: "var(--color-text-muted)" },
  orderCode: {
    background: "#F1EEE6",
    borderRadius: "var(--radius-sm)",
    padding: "10px 0",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: "0.04em",
    marginBottom: 16,
  },
  whatsappBtn: {
    display: "block",
    background: "#25D366",
    color: "white",
    fontWeight: 700,
    fontSize: "0.88rem",
    padding: "12px 0",
    borderRadius: "999px",
    marginBottom: 12,
  },
  viewOrdersLink: {
    background: "none",
    border: "none",
    color: "var(--color-text-muted)",
    fontSize: "0.8rem",
    fontWeight: 600,
    textDecoration: "underline",
  },
};
