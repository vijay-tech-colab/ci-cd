import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node + Docker + Render + Hub CI/CD working perfectly!");
});

// New API returning JSON
app.get("/api/data", (req, res) => {
  res.json([
    { id: 1, name: "Vijay" },
    { id: 2, name: "Render Project" }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
