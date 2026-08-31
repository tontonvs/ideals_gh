import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import ProductDetailOverlay from "./components/ProductDetailOverlay";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PlaceholderPage from "./pages/PlaceholderPage";
import { CartProvider } from "./context/CartContext";
import { ProductOverlayProvider } from "./context/ProductOverlayContext";

export default function App() {
  return (
    <CartProvider>
      <ProductOverlayProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app-shell">
            <TopNav />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                  path="/profile"
                  element={<PlaceholderPage title="Profile" />}
                />
              </Routes>
            </div>
            <BottomNav />
          </div>
          <ProductDetailOverlay />
        </BrowserRouter>
      </ProductOverlayProvider>
    </CartProvider>
  );
}
