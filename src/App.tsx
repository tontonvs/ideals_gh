import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <TopNav />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<PlaceholderPage title="Shop" />}
            />
            <Route
              path="/orders"
              element={<PlaceholderPage title="My Orders" />}
            />
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
