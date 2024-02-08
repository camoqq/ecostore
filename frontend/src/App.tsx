import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import "./styles/styles.scss";
import ProductDetail from "./pages/Product/ProductDetailPage";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import DashboardPage from "./pages/Dashboard/Dashboard";
import SettingsPage from "./pages/Dashboard/Settings";
import ProductsPage from "./pages/Product/Products";
import CartPage from "./pages/Cart/Cart";
import CheckOutPage from "./pages/Cart/Checkout";
import ConfirmationPage from "./pages/Cart/Confirmation";
import PaymentPage from "./pages/Cart/Payment";
import NotificationsPage from "./pages/Dashboard/NotificationsPage";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";

function App() {
  return (
    <>
    <MainHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Auth Routes  */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* User Routes  */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        {/* Product Routes */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        {/* Cart Routes  */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <MainFooter />
    </>
  );
}

export default App;
