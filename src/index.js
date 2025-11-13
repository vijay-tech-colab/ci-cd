import express from "express";

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Node + Docker + Render CI/CD working perfectly!");
});

// New API route returning array of objects
app.get("/api/data", (req, res) => {
  const data = [
    { id: 1, name: "Vijay", role: "Developer" },
    { id: 2, name: "Ravi", role: "Designer" },
    { id: 3, name: "Sneha", role: "Tester" }
  ];
  res.json(data);
});

// Start server
app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
