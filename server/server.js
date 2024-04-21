const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// My routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/restaurants", async (req, res) => {
  const { postcode } = req.body;

  try {
    const url = `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`;
    const response = await axios.get(url);
    const restaurants = response.data.restaurants.slice(0, 10).map((r) => ({
      name: r.name,
      cuisines: r.cuisines.map((cuisine) => cuisine.name).join(", "),
      rating: r.rating.starRating,
      address: `${r.address.firstLine}, ${r.address.city}, ${r.address.postalCode}`,
    }));
    res.json(restaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching restaurant data");
  }
});
