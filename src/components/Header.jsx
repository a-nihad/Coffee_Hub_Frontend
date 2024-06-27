import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

import Button from "./Button";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { adminNav, userNav } from "../utils/NavList";
import { logout } from "../redux/reducers/userSlice";
import SideNav from "./SideNav";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <header
      className={`fixed z-30 grid w-screen grid-cols-2 items-center justify-between bg-color_light px-5 py-4 md:px-10 lg:px-20 ${isAuthenticated && "grid-cols-[0_0_1fr] md:grid-cols-3"} `}
    >
      <h1 className="flex items-center gap-2 text-2xl font-semibold text-color_primary_dark sm:w-max">
        <span className="text-4xl"> ☕️ </span>Coffee_Hub
      </h1>

      <div className={!isAuthenticated && "hidden"}>
        {user?.role === "admin" ? (
          <>
            <SideNav navMenu={adminNav} />
            <Navbar navMenu={adminNav} />
          </>
        ) : (
          <>
            <SideNav navMenu={userNav} />
            <Navbar navMenu={userNav} />
          </>
        )}
      </div>

      <div className="flex items-center justify-end gap-2 lg:gap-5">
        <SearchBar />
        {isAuthenticated && (
          <div className={`relative ${user?.role === "admin" && "hidden"}`}>
            <Button onClick={() => navigate("/cart")} variation="icon">
              <FaCartShopping size={20} />
            </Button>
            <span className="absolute right-[-8px] top-[-3px] flex h-5 w-5 items-center justify-center rounded-full bg-color_danger text-xs text-color_white">
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
            className="w-max rounded-full border p-3"
          >
            <FiLogOut size={20} />
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            className="rounded-full px-6 py-2 text-sm"
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
