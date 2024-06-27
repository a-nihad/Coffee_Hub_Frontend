import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-55px)] bg-color_light pt-[80px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
