import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <main className="bg-color_light flex h-screen w-screen items-center justify-center">
      <Outlet />
    </main>
  );
}

export default AuthLayout;
