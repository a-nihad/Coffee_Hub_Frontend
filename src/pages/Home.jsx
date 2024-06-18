import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import DisplayProducts from "../components/user/DisplayProducts";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div>
      <header className="flex h-[280px] w-full flex-col bg-[url('/public/coffee.jpg')] bg-cover bg-center object-cover sm:h-[400px] md:h-[480px]">
        {!isAuthenticated && (
          <div className="px-10 py-20 sm:py-28 md:px-20 md:py-40">
            <h1 className="text-color_white py-2 text-2xl sm:py-4 sm:text-3xl md:py-8 md:text-6xl">
              Welcome to Coffee Hub
            </h1>
            <Button
              onClick={() => navigate("/login")}
              variation="primary"
              className="rounded-md px-6 py-1 md:px-14 md:py-2 md:text-xl"
            >
              Login
            </Button>
          </div>
        )}
      </header>
      <DisplayProducts />
    </div>
  );
}

export default Home;
