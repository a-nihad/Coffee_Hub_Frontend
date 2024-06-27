import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";

import Button from "./Button";

function SideNav({ navMenu }) {
  const [show, setShow] = useState(false);

  const style =
    "flex cursor-pointer rounded-lg border p-2 pl-5 hover:bg-color_primary hover:font:semibold hover:text-color_white duration-100";
  const active = "bg-color_primary font-semibold text-color_white";

  return (
    <section className="md:hidden">
      <Button
        onClick={() => setShow(!show)}
        className="fixed left-5 top-5 z-50 rounded-lg p-2 outline-none"
      >
        <HiBars3BottomLeft size={25} />
      </Button>

      {show && (
        <body
          id="wrapper"
          onClick={(e) => (e.target.id === "wrapper" ? setShow(false) : "")}
          className="fixed inset-0 z-40 h-screen w-screen backdrop-blur-sm"
        >
          <aside className="fixed z-20 h-screen w-64 bg-color_white px-5 text-sm">
            <h1 className="px-12 pt-6 text-2xl font-semibold text-color_primary_dark md:pt-6">
              Coffee_Hub
            </h1>

            <nav className="flex flex-col gap-2 pt-10">
              {navMenu.map((nav) => (
                <NavLink
                  to={nav.path}
                  key={nav.title}
                  onClick={() => setShow(false)}
                  className={({ isActive }) => {
                    return `${style} ${isActive && active} `;
                  }}
                >
                  <span className="flex items-center gap-2">
                    {nav.icon}
                    {nav.title}
                  </span>
                </NavLink>
              ))}
            </nav>
          </aside>
        </body>
      )}
    </section>
  );
}
export default SideNav;
