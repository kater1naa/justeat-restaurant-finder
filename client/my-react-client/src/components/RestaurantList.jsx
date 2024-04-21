function RestaurantList({ restaurants }) {
  return (
    <div className="flex items-center max-w-sm mx-auto">
      {restaurants.length > 0 ? (
        restaurants.map((restaurant) => (
          <div key={restaurant.name}>
            <h3>{restaurant.name}</h3>
            <p>Cuisines: {restaurant.cuisines}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Address: {restaurant.address}</p>
          </div>
        ))
      ) : (
        <p>No restaurants found. Try using a different postal code. </p>
      )}
    </div>
  );
}

export default RestaurantList;
