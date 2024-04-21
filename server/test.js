const axios = require("axios");

const testPostcode = "EC4M7RF";

axios
  .post("http://localhost:3001/restaurants", { postcode: testPostcode })
  .then((response) => {
    console.log("Data fetched successfully:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
