import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import DisplayProducts from "../components/user/DisplayProducts";

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div>
      <header className="flex h-[250px] w-full flex-col px-6 sm:h-[320px] md:h-[400px] md:px-10 lg:px-20">
        <section className="relative flex h-full overflow-hidden rounded-xl bg-color_secondary_light">
          <div className="flex h-full basis-9/12 flex-col justify-center gap-1 pl-5 sm:gap-2 sm:pl-10 lg:pl-20">
            <h1 className="bg-gradient-to-r from-color_primary_dark to-color_secondary bg-clip-text text-3xl font-extrabold uppercase text-transparent sm:text-3xl md:text-5xl lg:text-7xl">
              Coffee Hub
            </h1>
            <h1 className="text-md font-semibold md:text-4xl lg:text-5xl">
              Explore with our coffee
            </h1>
            <p className="text-xs font-thin md:text-base md:font-normal lg:text-lg">
              we always try to make sure that our coffee can deliver you the
              best refreshment of your life.
            </p>

            {!isAuthenticated && (
              <Button
                onClick={() => navigate("/login")}
                className="mt-3 w-max rounded-full px-6 py-2 text-sm md:py-2 lg:py-3 lg:text-base"
              >
                Login / sign up
              </Button>
            )}
          </div>
          <img src="coffee_cup.png" alt="" className="basis-3/12" />
        </section>
      </header>
      <DisplayProducts />
    </div>
  );
}

export default Home;
