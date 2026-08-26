import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <TopNav />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/about"
              element={<PlaceholderPage title="About Us" />}
            />
            <Route
              path="/profile"
              element={<PlaceholderPage title="Profile" />}
            />
            <Route
              path="/cart"
              element={<PlaceholderPage title="Cart" />}
            />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
