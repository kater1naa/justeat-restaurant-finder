import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import RestaurantList from "./components/RestaurantList";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  const handleSearch = (postcode) => {
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
    <>
      <SearchBar onSearch={handleSearch} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default App;
