import { useNavigate, useLocation } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (value) => {
    navigate(`${pathname}?search=${value}`);
  };

  return (
    <div
      className="flex items-center gap-2 rounded-full border bg-color_light py-3 pl-3 pr-1 text-color_primary_dark transition duration-1000 ease-out"
      onMouseEnter={() => setSearch(true)}
      onMouseLeave={() => setSearch(false)}
    >
      <HiMiniMagnifyingGlass size={22} />
      <input
        type="text"
        placeholder="Search here..."
        className={`bg-transparent text-sm outline-none transition-all duration-500 ease-out ${
          search ? "w-60 opacity-100" : "w-0 opacity-0"
        }`}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
