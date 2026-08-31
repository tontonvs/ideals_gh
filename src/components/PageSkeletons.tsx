import SkeletonBlock from "./SkeletonBlock";

const wrap: React.CSSProperties = { paddingBottom: 24 };

export function HomeSkeleton() {
  return (
    <div style={wrap}>
      {/* Hero banner */}
      <SkeletonBlock style={{ height: 88, borderRadius: 0 }} />

      {/* Category circles */}
      <div style={{ padding: "18px 16px 4px" }}>
        <SkeletonBlock style={{ width: "40%", height: 16, marginBottom: 14 }} />
        <div style={{ display: "flex", gap: 14 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <SkeletonBlock style={{ width: 69, height: 69, borderRadius: "50%" }} />
              <SkeletonBlock style={{ width: 40, height: 8 }} />
            </div>
          ))}
        </div>
      </div>

      {/* New Deals */}
      <div style={{ padding: "20px 16px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <SkeletonBlock style={{ width: "30%", height: 18 }} />
          <SkeletonBlock style={{ width: 80, height: 30, borderRadius: 999 }} />
        </div>
        <div className="product-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlock key={i} style={{ height: 190 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShopSkeleton() {
  return (
    <div style={{ padding: "16px 16px 32px" }}>
      <SkeletonBlock style={{ height: 42, marginBottom: 14 }} />
      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ width: 64, height: 30, borderRadius: 999, flexShrink: 0 }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
        <SkeletonBlock style={{ width: "35%", height: 18 }} />
        <SkeletonBlock style={{ width: 60, height: 14 }} />
      </div>
      <div className="product-grid" style={{ marginBottom: 20 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ height: 190 }} />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 6 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ width: 30, height: 30 }} />
        ))}
      </div>
    </div>
  );
}

export function OrdersSkeleton() {
  return (
    <div style={{ padding: "20px 16px 32px" }}>
      <SkeletonBlock style={{ width: "45%", height: 20, marginBottom: 8 }} />
      <SkeletonBlock style={{ width: "60%", height: 12, marginBottom: 18 }} />
      <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
        <SkeletonBlock style={{ flex: 1, height: 38 }} />
        <SkeletonBlock style={{ flex: 1, height: 38 }} />
      </div>
      <SkeletonBlock style={{ height: 40, marginBottom: 22 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ height: 76 }} />
        ))}
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div style={{ padding: "20px 16px 32px" }}>
      <SkeletonBlock style={{ width: "40%", height: 20, marginBottom: 10 }} />
      <SkeletonBlock style={{ width: "90%", height: 12, marginBottom: 4 }} />
      <SkeletonBlock style={{ width: "70%", height: 12, marginBottom: 22 }} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 0",
              borderBottom: "1px solid #EFEAE0",
            }}
          >
            <SkeletonBlock style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <SkeletonBlock style={{ width: "30%", height: 10, marginBottom: 6 }} />
              <SkeletonBlock style={{ width: "55%", height: 14 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CartSkeleton() {
  return (
    <div style={{ padding: "20px 16px 32px" }}>
      <SkeletonBlock style={{ width: "35%", height: 20, marginBottom: 16 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonBlock key={i} style={{ height: 90 }} />
        ))}
      </div>
      <SkeletonBlock style={{ height: 60, marginTop: 20 }} />
    </div>
  );
}
