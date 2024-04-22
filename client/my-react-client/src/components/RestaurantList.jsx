function RestaurantList({ restaurants, searchAttempted }) {
  return (
    <div>
      {searchAttempted && restaurants.length === 0 ? (
        <p className="mb-4 p-4 bg-slate-800 text-gray-100 rounded-xl shadow-orange border-b border-gray-300">
          No restaurants found. Try using a different postal code.
        </p>
      ) : (
        restaurants.map(
          (
            restaurant // The map function starts here
          ) => (
            <div
              key={restaurant.name} // The key prop should be here
              className="mb-4 p-4 bg-slate-800 text-gray-100 rounded-xl shadow border-b border-gray-300"
            >
              <h3 className="text-xl font-medium">{restaurant.name}</h3>
              <p>Cuisines: {restaurant.cuisines}</p>
              <p>Rating: {restaurant.rating}</p>
              <p>Address: {restaurant.address}</p>
            </div>
          )
        )
      )}
    </div>
  );
}

export default RestaurantList;
