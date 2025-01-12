const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Data Dummy
let users = [{ id: 1, name: "Admin", email: "admin@example.com", password: "admin123" }];
let reports = [
  { id: 1, location: "Semarang", description: "Banjir parah di wilayah barat", date: "2025-01-10" },
];

// Endpoint Users
app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint Reports
app.get("/reports", (req, res) => res.json(reports));
app.post("/reports", (req, res) => {
  const newReport = { id: reports.length + 1, ...req.body };
  reports.push(newReport);
  res.status(201).json(newReport);
});
app.delete("/reports/:id", (req, res) => {
  const { id } = req.params;
  reports = reports.filter((report) => report.id !== parseInt(id));
  res.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
