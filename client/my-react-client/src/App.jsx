import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const handleSearch = (postcode) => {
    setSearchAttempted(true);
    axios
      .post("http://localhost:3001/restaurants", { postcode })
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="w-full max-w-2xl mx-auto m-8 flex flex-col justify-center max-w-lg">
      <SearchBar
        onSearch={handleSearch}
        restaurants={restaurants}
        searchAttempted={searchAttempted}
      />
    </div>
  );
};

export default App;
