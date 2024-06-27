import { NavLink } from "react-router-dom";

function Navbar({ navMenu }) {
  return (
    <nav className="hidden w-full items-center justify-center gap-2 md:flex md:gap-5">
      {navMenu.map((nav) => (
        <NavLink
          to={nav.path}
          key={nav.title}
          className={({ isActive }) => {
            return `border-color_primary px-4 py-1 text-color_primary hover:border-b-2 hover:font-semibold hover:text-color_secondary ${isActive && "border-b-2 font-semibold text-color_secondary"} `;
          }}
        >
          {nav.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
