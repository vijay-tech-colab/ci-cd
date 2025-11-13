import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;  // Use Render's port if available

app.get("/", (req, res) => {
  res.send("🚀 Node + Docker + Render CI/CD working perfectly!");
});

// Example new API
app.get("/api/data", (req, res) => {
  const data = [
    { id: 1, name: "Vijay", role: "Developer" },
    { id: 2, name: "Amit", role: "Designer" },
    { id: 3, name: "Sneha", role: "Manager" },
  ];

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
