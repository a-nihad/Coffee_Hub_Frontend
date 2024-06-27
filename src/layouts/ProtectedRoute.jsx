import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-55px)] bg-color_light pb-10 pt-[80px]">
        {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
      </main>

      <Footer />
    </>
  );
}

export default ProtectedRoute;
