import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;  // Use Render's port if available

app.get("/", (req, res) => {
  res.send("🚀 Node + Docker + Render CI/CD working perfectly!");
});

// Example new API
app.get("/api/data", (req, res) => {
  const largeArray = [
  { id: 1, name: "Item 1", value: 100 },
  { id: 2, name: "Item 2", value: 200 },
  { id: 3, name: "Item 3", value: 300 },
  { id: 4, name: "Item 4", value: 400 },
  { id: 5, name: "Item 5", value: 500 },
  { id: 6, name: "Item 6", value: 600 },
  { id: 7, name: "Item 7", value: 700 },
  { id: 8, name: "Item 8", value: 800 },
  { id: 9, name: "Item 9", value: 900 },
  { id: 10, name: "Item 10", value: 1000 },
  { id: 11, name: "Item 11", value: 1100 },
  { id: 12, name: "Item 12", value: 1200 },
  { id: 13, name: "Item 13", value: 1300 },
  { id: 14, name: "Item 14", value: 1400 },
  { id: 15, name: "Item 15", value: 1500 },
  { id: 16, name: "Item 16", value: 1600 },
  { id: 17, name: "Item 17", value: 1700 },
  { id: 18, name: "Item 18", value: 1800 },
  { id: 19, name: "Item 19", value: 1900 },
  { id: 20, name: "Item 20", value: 2000 },
];

  res.json(largeArray);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
