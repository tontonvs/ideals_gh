export type ProductCategory =
  | "phones"
  | "laptops"
  | "tablets"
  | "cars"
  | "consoles"
  | "accessories";

export type ProductCondition = "Brand New" | "Preowned";

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  label: string; // e.g. "128GB Wi-Fi"
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  condition: ProductCondition;
  price: number;
  originalPrice?: number;
  currency: "GHS";
  stock: number | null; // null means "one time deal" (used for most cars)
  soldOut?: boolean;
  images: string[]; // one or more image paths; empty array means no photo yet
  description?: string;
  specs?: ProductSpec[];
  variants?: ProductVariant[]; // if present, price/label depend on selected variant
}

export interface CategoryShortcut {
  id: string;
  label: string;
  category: ProductCategory;
  imageUrl?: string;
}

export interface CartItem {
  product: Product;
  variantId?: string;
  quantity: number;
}
