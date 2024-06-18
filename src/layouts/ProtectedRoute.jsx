import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Header />

      <main className="bg-color_light min-h-[calc(100vh-55px)] pt-[72px]">
        {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
      </main>

      <footer className="bg-color_primary_dark text-color_light p-4 text-center">
        <h1> 2024 @nihad. All Right reserved </h1>
      </footer>
    </>
  );
}

export default ProtectedRoute;
