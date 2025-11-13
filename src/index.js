import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Node + Docker + Render CI/CD working perfectly!");
});

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});
