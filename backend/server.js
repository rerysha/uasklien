const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/reports", async (req, res) => {
  try {
    const response = await axios.get(
      "https://ppid.semarangkota.go.id/informasi-banjir-kota-semarang-2024/"
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data.");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
