import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  products,
  sortByImageCount,
  matchesFilter,
  SHOP_FILTERS,
} from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const PAGE_SIZE = 8;

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") ?? "all";
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [page, setPage] = useState(1);

  // If the query param changes (e.g. tapping a different category circle
  // while already on Shop), pick that up too.
  useEffect(() => {
    setActiveFilter(searchParams.get("filter") ?? "all");
    setPage(1);
  }, [searchParams]);

  const sorted = sortByImageCount(products);
  const filtered = sorted.filter((product) =>
    matchesFilter(product, activeFilter)
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function goTo(targetPage: number) {
    const clamped = Math.min(Math.max(targetPage, 1), totalPages);
    setPage(clamped);
  }

  function selectFilter(id: string) {
    setActiveFilter(id);
    setPage(1);
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.searchWrap}>
        <SearchBar />
      </div>

      <div style={styles.filterRow} className="hide-scrollbar">
        {SHOP_FILTERS.map((filter) => (
          <button
            key={filter.id}
            style={{
              ...styles.filterChip,
              ...(filter.id === activeFilter ? styles.filterChipActive : {}),
            }}
            onClick={() => selectFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div style={styles.headRow}>
        <h1 style={styles.heading}>All Products</h1>
        <span style={styles.count}>{filtered.length} items</span>
      </div>

      <div className="product-grid" style={{ marginBottom: 20 }}>
        {pageItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div style={styles.pager}>
          <button
            aria-label="Previous page"
            style={styles.pagerArrow}
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
          >
            &#8249;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              style={{
                ...styles.pagerNum,
                ...(num === page ? styles.pagerNumActive : {}),
              }}
              onClick={() => goTo(num)}
            >
              {num}
            </button>
          ))}
          <button
            aria-label="Next page"
            style={styles.pagerArrow}
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    padding: "16px 16px 32px",
  },
  searchWrap: {
    marginBottom: 14,
  },
  filterRow: {
    display: "flex",
    gap: 8,
    overflowX: "auto",
    marginBottom: 18,
    paddingBottom: 2,
  },
  filterChip: {
    flex: "0 0 auto",
    padding: "8px 16px",
    borderRadius: "999px",
    border: "1px solid #E7E1D3",
    background: "var(--color-card)",
    color: "var(--color-text-dark)",
    fontSize: "0.8rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  filterChipActive: {
    background: "var(--color-navy)",
    color: "white",
    borderColor: "var(--color-navy)",
  },
  headRow: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  heading: {
    margin: 0,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "1.05rem",
    color: "var(--color-text-dark)",
  },
  count: {
    fontSize: "0.78rem",
    color: "var(--color-text-muted)",
  },
  pager: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  pagerArrow: {
    width: 30,
    height: 30,
    borderRadius: "var(--radius-sm)",
    border: "1px solid #E7E1D3",
    background: "var(--color-card)",
    color: "var(--color-text-dark)",
    fontSize: "1rem",
  },
  pagerNum: {
    width: 30,
    height: 30,
    borderRadius: "var(--radius-sm)",
    border: "1px solid #E7E1D3",
    background: "var(--color-card)",
    color: "var(--color-text-dark)",
    fontSize: "0.82rem",
    fontWeight: 600,
  },
  pagerNumActive: {
    background: "var(--color-navy)",
    color: "white",
    borderColor: "var(--color-navy)",
  },
};
