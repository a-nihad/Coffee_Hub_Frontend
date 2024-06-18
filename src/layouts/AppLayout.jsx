import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function AppLayout() {
  return (
    <>
      <Header />

      <main className="bg-color_light min-h-[calc(100vh-55px)] pt-[72px]">
        <Outlet />
      </main>

      <footer className="bg-color_primary_dark text-color_light p-4 text-center">
        <h1> 2024 @nihad. All Right reserved </h1>
      </footer>
    </>
  );
}

export default AppLayout;
