import type { Product, CategoryShortcut, ProductCategory } from "../types";

// Phones, laptops and tablets below are real iDeals GH listings, sourced
// from their product photos and Instagram captions. Cars, consoles and
// remaining accessories are still mock placeholders pending real photos.
export const products: Product[] = [
  // ----- Phones -----
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro, 256GB",
    category: "phones",
    condition: "Preowned",
    price: 13500,
    currency: "GHS",
    stock: 3,
    images: ["/products/iphone-17-pro.jpg"],
    description:
      "SIM unlocked. Limited stock, slightly negotiable.",
    specs: [
      { label: "Storage", value: "256GB" },
      { label: "Lock Status", value: "SIM Unlocked" },
      { label: "Condition", value: "Preowned" },
    ],
  },
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra, 512GB",
    category: "phones",
    condition: "Preowned",
    price: 11500,
    currency: "GHS",
    stock: 2,
    images: ["/products/galaxy-s26-ultra.jpg"],
    description: "Limited stock, slightly negotiable.",
    specs: [
      { label: "Storage", value: "512GB" },
      { label: "RAM", value: "12GB" },
      { label: "Condition", value: "Preowned" },
    ],
  },
  {
    id: "iphone-air",
    name: "iPhone Air, 256GB",
    category: "phones",
    condition: "Preowned",
    price: 10000,
    currency: "GHS",
    stock: 8,
    images: ["/products/iphone-air.jpg"],
    description: "Preowned, excellent condition.",
    specs: [
      { label: "Storage", value: "256GB" },
      { label: "Lock Status", value: "Unlocked, eSIM" },
      { label: "Condition", value: "Preowned, Excellent" },
    ],
  },

  // ----- Laptops -----
  {
    id: "macbook-pro-14-m4",
    name: "MacBook Pro 14\", M4 Chip",
    category: "laptops",
    condition: "Preowned",
    price: 12000,
    currency: "GHS",
    stock: 1,
    images: [
      "/products/macbook-pro-14-m4-1.jpg",
      "/products/macbook-pro-14-m4-2.jpg",
      "/products/macbook-pro-14-m4-3.jpg",
    ],
    description: "Box and accessories included. Touch ID disabled.",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "RAM", value: "24GB" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Cycle Count", value: "25" },
      { label: "Included", value: "Box + Accessories" },
      { label: "Touch ID", value: "Disabled" },
    ],
  },
  {
    id: "hp-elitebook-840-g6",
    name: "HP EliteBook 840 G6",
    category: "laptops",
    condition: "Preowned",
    price: 4300,
    currency: "GHS",
    stock: 6,
    images: [
      "/products/hp-elitebook-840-1.jpg",
      "/products/hp-elitebook-840-2.jpg",
    ],
    description: "Fast, sleek and reliable.",
    specs: [
      { label: "Processor", value: "Core i5, 8th Gen" },
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Display", value: "14\" FHD" },
      { label: "Keyboard", value: "Backlit" },
    ],
  },
  {
    id: "macbook-air-15-m4",
    name: "MacBook Air 15\", M4 Chip",
    category: "laptops",
    condition: "Preowned",
    price: 10300,
    currency: "GHS",
    stock: 0,
    soldOut: true,
    images: ["/products/macbook-air-15-m4.jpg"],
    description: "Sold out.",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "RAM", value: "16GB" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Cycle Count", value: "9" },
    ],
  },
  {
    id: "macbook-pro-16-2019",
    name: "MacBook Pro 16\" (2019)",
    category: "laptops",
    condition: "Preowned",
    price: 7800,
    currency: "GHS",
    stock: 2,
    images: ["/products/macbook-pro-16-2019.jpg"],
    specs: [
      { label: "Processor", value: "Core i9" },
      { label: "RAM", value: "32GB" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Cycle Count", value: "300" },
    ],
  },
  {
    id: "macbook-neo-13-citrus",
    name: "MacBook Neo 13\", Citrus Edition",
    category: "laptops",
    condition: "Brand New",
    price: 10300,
    currency: "GHS",
    stock: 1,
    images: ["/products/macbook-neo-13-citrus.jpg"],
    specs: [
      { label: "RAM", value: "8GB" },
      { label: "Storage", value: "512GB SSD" },
    ],
  },

  // ----- Tablets (variant picker: two storage options, two prices) -----
  {
    id: "ipad-air-11-m4",
    name: "iPad Air 11\", M4 (2026)",
    category: "tablets",
    condition: "Brand New",
    price: 8300,
    currency: "GHS",
    stock: 5,
    images: ["/products/ipad-air-11.jpg"],
    description:
      "Powerful M4 chip, Liquid Retina display, Apple Pencil Pro support, fast Wi-Fi.",
    specs: [
      { label: "Chip", value: "Apple M4" },
      { label: "Display", value: "Liquid Retina" },
      { label: "Pencil Support", value: "Apple Pencil Pro" },
      { label: "Connectivity", value: "Wi-Fi" },
    ],
    variants: [
      { id: "128gb", label: "128GB Wi-Fi", price: 8300 },
      { id: "256gb", label: "256GB Wi-Fi", price: 9800 },
    ],
  },

  // ----- Cars -----
  {
    id: "range-rover-sport-2018",
    name: "Range Rover Sport HSE 3.0L V6 (2018)",
    category: "cars",
    condition: "Preowned",
    price: 495000,
    currency: "GHS",
    stock: null,
    images: [
      "/products/range-rover-1.jpg",
      "/products/range-rover-2.jpg",
      "/products/range-rover-3.jpg",
      "/products/range-rover-4.jpg",
      "/products/range-rover-5.jpg",
      "/products/range-rover-6.jpg",
      "/products/range-rover-7.jpg",
      "/products/range-rover-8.jpg",
    ],
    description: "Slightly negotiable.",
    specs: [
      { label: "Engine", value: "3.0L V6" },
      { label: "Entry", value: "Keyless Entry/Start" },
      { label: "Seats", value: "Leather, Heated/Ventilated" },
      { label: "Infotainment", value: "Touch infotainment system" },
      { label: "Camera", value: "Rear view camera" },
      { label: "Safety", value: "Blindspot monitors" },
      { label: "Display", value: "Heads-up display" },
    ],
  },

  // ----- Remaining cars (mock, pending real photos) -----
  {
    id: "mitsubishi-outlander-2024",
    name: "Mitsubishi Outlander SEL (2024)",
    category: "cars",
    condition: "Preowned",
    price: 480000,
    currency: "GHS",
    stock: null,
    images: ["/products/mitsubishi-outlander-1.jpg"],
    specs: [
      { label: "Seating", value: "7-Seater" },
      { label: "Entry", value: "Keyless Entry/Start" },
      { label: "Roof", value: "Panoramic roof" },
      { label: "Infotainment", value: "Touch infotainment system" },
      { label: "Display", value: "Heads-up display" },
      { label: "Camera", value: "Rear view + 360°" },
      { label: "Seats", value: "Heated" },
      { label: "Safety", value: "Parking aids, Pre-collision alert" },
    ],
  },
  {
    id: "honda-civic-sport-2023",
    name: "Honda Civic Sport (2023)",
    category: "cars",
    condition: "Preowned",
    price: 248000,
    currency: "GHS",
    stock: null,
    images: [
      "/products/honda-civic-1.jpg",
      "/products/honda-civic-2.jpg",
      "/products/honda-civic-3.jpg",
      "/products/honda-civic-4.jpg",
      "/products/honda-civic-5.jpg",
      "/products/honda-civic-6.jpg",
      "/products/honda-civic-7.jpg",
      "/products/honda-civic-8.jpg",
    ],
    description: "Slightly negotiable.",
    specs: [
      { label: "Entry", value: "Keyless entry/start" },
      { label: "Seats", value: "Fabric" },
      { label: "Infotainment", value: "Touch infotainment system" },
      { label: "Camera", value: "Rear view camera" },
      { label: "Safety", value: "Honda Sensing technology" },
    ],
  },
  {
    id: "c1",
    name: "Toyota Corolla 2017, Full Option",
    category: "cars",
    condition: "Preowned",
    price: 92000,
    currency: "GHS",
    stock: null,
    images: [],
    specs: [
      { label: "Year", value: "2017" },
      { label: "Feature", value: "Push start" },
      { label: "Feature", value: "Reverse camera" },
      { label: "Feature", value: "Sunroof" },
    ],
  },
  {
    id: "c2",
    name: "Honda CR-V 2016, 4WD",
    category: "cars",
    condition: "Preowned",
    price: 118000,
    currency: "GHS",
    stock: null,
    images: [],
    specs: [
      { label: "Year", value: "2016" },
      { label: "Drivetrain", value: "4WD" },
      { label: "Transmission", value: "Automatic" },
      { label: "Title", value: "Clean" },
    ],
  },
  {
    id: "c3",
    name: "Kia Picanto 2024",
    category: "cars",
    condition: "Brand New",
    price: 165000,
    originalPrice: 172000,
    currency: "GHS",
    stock: null,
    images: [],
    specs: [
      { label: "Year", value: "2024" },
      { label: "Transmission", value: "Automatic" },
      { label: "Feature", value: "A/C, Bluetooth" },
      { label: "Warranty", value: "Manufacturer warranty" },
    ],
  },

  // ----- Consoles and accessories -----
  {
    id: "ps5-standard-825gb",
    name: "PS5 Standard Disc Edition, 825GB",
    category: "consoles",
    condition: "Brand New",
    price: 6500,
    currency: "GHS",
    stock: 3,
    images: ["/products/ps5-console.jpg"],
    description: "Limited stock, slightly negotiable.",
    specs: [
      { label: "Storage", value: "825GB" },
      { label: "Included", value: "2 Controllers" },
      { label: "Games", value: "FC25, GTA V, FIFA 23" },
    ],
  },
  {
    id: "ps5-controller",
    name: "PS5 DualSense Controller",
    category: "consoles",
    condition: "Brand New",
    price: 1100,
    currency: "GHS",
    stock: 10,
    images: ["/products/ps5-controller.jpg"],
    description: "Original quality, smooth gameplay. Slightly negotiable.",
    specs: [
      { label: "Compatibility", value: "PS5" },
      { label: "Quality", value: "Original" },
    ],
  },
  {
    id: "xbox-series-s",
    name: "Xbox Series S, 512GB",
    category: "consoles",
    condition: "Preowned",
    price: 3900,
    originalPrice: 4300,
    currency: "GHS",
    stock: 3,
    images: [],
    specs: [
      { label: "Storage", value: "512GB SSD" },
      { label: "Included", value: "1 controller" },
    ],
  },
  {
    id: "apple-watch-ultra-1",
    name: "Apple Watch Ultra 1, 49mm",
    category: "accessories",
    condition: "Preowned",
    price: 4600,
    currency: "GHS",
    stock: 4,
    images: ["/products/apple-watch-ultra.jpg"],
    description: "Comes with charger. Slightly negotiable.",
    specs: [
      { label: "Case Size", value: "49mm" },
      { label: "Connectivity", value: "GPS + Cellular" },
      { label: "Included", value: "Charger" },
    ],
  },
  {
    id: "a4",
    name: "Sony WH-1000XM4 Headset",
    category: "accessories",
    condition: "Preowned",
    price: 1250,
    originalPrice: 1500,
    currency: "GHS",
    stock: 8,
    images: [],
    specs: [
      { label: "Type", value: "Over-ear, Wireless" },
      { label: "Noise Cancelling", value: "Yes" },
    ],
  },
];

// Category display order: phones and laptops lead, matching the original
// homepage layout intent.
const CATEGORY_ORDER: ProductCategory[] = [
  "phones",
  "laptops",
  "tablets",
  "cars",
  "consoles",
  "accessories",
];

// Within each category, items with more photos are more convincing
// listings, so surface them first while keeping a stable order for ties.
// Category grouping always wins over image count, so phones/laptops still
// lead even though e.g. a car might have more photos than a phone.
export function sortByImageCount(list: Product[]): Product[] {
  return [...list].sort((a, b) => {
    const categoryDiff =
      CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
    if (categoryDiff !== 0) return categoryDiff;
    return b.images.length - a.images.length;
  });
}

export const categoryShortcuts: CategoryShortcut[] = [
  { id: "cat-phones", label: "Phones", category: "phones" },
  { id: "cat-laptops", label: "Laptops", category: "laptops" },
  { id: "cat-cars", label: "Cars", category: "cars" },
  { id: "cat-watches", label: "Watches", category: "accessories" },
  { id: "cat-consoles", label: "Consoles", category: "consoles" },
];

// Shop page filter chips. "iphones"/"androids" split the phones category by
// name since there's no separate brand field. A couple of extra ids
// (category-only) exist purely as navigation targets from the homepage
// category circles that don't map onto a visible chip (Phones, Consoles) -
// they still filter correctly, they just won't show any chip as active.
export interface FilterOption {
  id: string;
  label: string;
}

export const SHOP_FILTERS: FilterOption[] = [
  { id: "all", label: "All" },
  { id: "iphones", label: "iPhones" },
  { id: "androids", label: "Androids" },
  { id: "watch", label: "Watch" },
  { id: "laptop", label: "Laptop" },
  { id: "car", label: "Car" },
];

// Maps each homepage category circle to the filter id Shop should open
// with. Laptops/Cars/Watches line up with a visible chip; Phones/Consoles
// don't split cleanly into the chip set so they filter by category alone.
export const CIRCLE_FILTER_MAP: Record<string, string> = {
  phones: "all-phones",
  laptops: "laptop",
  cars: "car",
  accessories: "watch",
  consoles: "all-consoles",
};

export function matchesFilter(product: Product, filterId: string): boolean {
  const name = product.name.toLowerCase();
  switch (filterId) {
    case "all":
      return true;
    case "iphones":
      return product.category === "phones" && name.includes("iphone");
    case "androids":
      return product.category === "phones" && !name.includes("iphone");
    case "watch":
      return name.includes("watch");
    case "laptop":
      return product.category === "laptops";
    case "car":
      return product.category === "cars";
    case "all-phones":
      return product.category === "phones";
    case "all-consoles":
      return product.category === "consoles";
    default:
      return true;
  }
}
