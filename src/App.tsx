import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import ProductDetailOverlay from "./components/ProductDetailOverlay";
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import PageLoadWrapper from "./components/PageLoadWrapper";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PlaceholderPage from "./pages/PlaceholderPage";
import { CartProvider } from "./context/CartContext";
import { ProductOverlayProvider } from "./context/ProductOverlayContext";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <CartProvider>
      <ProductOverlayProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app-shell">
            <TopNav />
            <div className="page-content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <PageLoadWrapper>
                      <Home />
                    </PageLoadWrapper>
                  }
                />
                <Route
                  path="/shop"
                  element={
                    <PageLoadWrapper>
                      <Shop />
                    </PageLoadWrapper>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <PageLoadWrapper>
                      <Orders />
                    </PageLoadWrapper>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageLoadWrapper>
                      <Contact />
                    </PageLoadWrapper>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PageLoadWrapper>
                      <Cart />
                    </PageLoadWrapper>
                  }
                />
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
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
    </CartProvider>
  );
}
