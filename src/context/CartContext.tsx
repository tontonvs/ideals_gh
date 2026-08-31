import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { Product, CartItem } from "../types";
import { products } from "../data/products";

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, variantId?: string) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// Demo cart starts pre-populated so the checkout flow has something to
// show right away: a phone, a watch, and a laptop.
function buildInitialCart(): CartItem[] {
  const ids = ["iphone-17-pro", "apple-watch-ultra-1", "hp-elitebook-840-g6"];
  return ids
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p))
    .map((product) => ({ product, quantity: 1 }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(buildInitialCart);

  function addToCart(product: Product, variantId?: string) {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id && item.variantId === variantId
      );
      if (existingIndex >= 0) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }
      return [...prev, { product, variantId, quantity: 1 }];
    });
  }

  function removeFromCart(productId: string, variantId?: string) {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variantId === variantId)
      )
    );
  }

  function updateQuantity(
    productId: string,
    variantId: string | undefined,
    quantity: number
  ) {
    if (quantity < 1) {
      removeFromCart(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  }

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const total = useMemo(
    () =>
      items.reduce((sum, item) => {
        const variant = item.product.variants?.find(
          (v) => v.id === item.variantId
        );
        const price = variant ? variant.price : item.product.price;
        return sum + price * item.quantity;
      }, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
