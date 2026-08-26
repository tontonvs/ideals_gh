export type ProductCategory =
  | "phones"
  | "laptops"
  | "tablets"
  | "cars"
  | "consoles"
  | "accessories";

export type ProductCondition = "Brand New" | "Preowned";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  condition: ProductCondition;
  price: number;
  originalPrice?: number;
  currency: "GHS";
  stock: number | null; // null means "one time deal" (used for most cars)
  imageUrl?: string; // left blank for now, filled in later
}

export interface CategoryShortcut {
  id: string;
  label: string;
  category: ProductCategory;
  imageUrl?: string;
}
