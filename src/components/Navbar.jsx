import { NavLink } from "react-router-dom";

function Navbar({ navMenu }) {
  return (
    <nav className="flex w-full items-center justify-center gap-2">
      {navMenu.map((nav) => (
        <NavLink
          to={nav.path}
          key={nav.title}
          className={({ isActive }) => {
            return `bg-color_light hover:bg-color_primary hover:text-color_light text-color_secondary w-28 rounded-md py-1 text-center ${isActive && "text-color_light bg-color_primary"} `;
          }}
        >
          {nav.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
