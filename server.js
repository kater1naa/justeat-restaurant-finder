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
