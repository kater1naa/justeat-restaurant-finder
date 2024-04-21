import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(postcode);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center max-w-sm mx-auto"
    >
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        placeholder="Enter UK Postcode"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
