import { Routes, Route, Navigate } from "react-router-dom";

import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useSelector } from "react-redux";
import VerifyOtp from "../pages/VerifyOtp";
import ViewOrders from "../pages/ViewOrders";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import OrderManagement from "../pages/OrderManagement";
import ProtectedRoute from "../layouts/ProtectedRoute";
import ProductManagement from "../pages/ProductManagement";
import PageNotFound from "../pages/PageNotFound";

function Router() {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        {user.role === "admin" ? (
          <>
            <Route index element={<Navigate replace to="product" />} />
            <Route path="/order" element={<OrderManagement />} />
            <Route path="/product" element={<ProductManagement />} />
          </>
        ) : (
          <>
            <Route path="/cart" element={<Cart />} />
            <Route path="/viewOrder" element={<ViewOrders />} />
          </>
        )}
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
