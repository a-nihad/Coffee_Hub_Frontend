import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import Button from "./Button";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { adminNav, userNav } from "../utils/NavList";
import { logout } from "../redux/reducers/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <header
      className={`bg-color_primary_dark fixed z-30 grid w-screen items-center justify-between px-10 py-4 ${isAuthenticated ? "grid-cols-3" : "grid-cols-2"} `}
    >
      <h1 className="text-color_light flex items-center gap-2 text-2xl font-semibold sm:w-max">
        <span className="text-4xl"> ☕️ </span>Coffee Hub
      </h1>

      <div className={!isAuthenticated && "hidden"}>
        {user?.role === "admin" ? (
          <Navbar navMenu={adminNav} />
        ) : (
          <Navbar navMenu={userNav} />
        )}
      </div>

      <div className="flex items-center justify-end gap-2 lg:gap-5">
        <SearchBar />
        {isAuthenticated && (
          <div className={`relative ${user?.role === "admin" && "hidden"}`}>
            <Button
              onClick={() => navigate("/cart")}
              className="rounded-full p-3"
            >
              <FaCartShopping size={20} />
            </Button>
            <span className="bg-color_danger text-color_white absolute right-[-8px] top-[-3px] flex h-5 w-5 items-center justify-center rounded-full text-xs">
              {cart.length}
            </span>
          </div>
        )}
        {isAuthenticated ? (
          <Button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
            variation="secondary"
            className="w-max rounded-full border p-3"
          >
            <FiLogOut />
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="rounded-md px-6 py-1"
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
