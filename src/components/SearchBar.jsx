import { useNavigate, useLocation } from "react-router-dom";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (value) => {
    navigate(`${pathname}?search=${value}`);
  };

  return (
    <div className="bg-color_light text-color_secondary_light flex max-w-72 grow items-center gap-2 rounded-full border px-4 py-1">
      <HiMiniMagnifyingGlass size={20} />
      <input
        type="text"
        placeholder="Search here..."
        className="w-full bg-transparent outline-none"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
