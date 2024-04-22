import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import RestaurantList from "../components/RestaurantList";

const SearchBar = ({ onSearch, restaurants, searchAttempted }) => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(postcode);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[500px] relative mx-auto">
      <div className="relative">
        <input
          className="w-full p-4 rounded-full bg-slate-800 text-white"
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          placeholder="Enter UK Postcode e.g. EC4M7RF"
          required
        />
        <button
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#FF8000] opacity-75 rounded-full "
          type="submit"
        >
          <FaSearch />
        </button>
      </div>
      <div className="absolute top-20 p-4 w-full rounded-xl  flex flex-col gap-2">
        <RestaurantList restaurants={restaurants} />
      </div>
    </form>
  );
};

export default SearchBar;
