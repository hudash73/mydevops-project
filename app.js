const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello DevOps! from mydevops-project");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", app: "mydevops-project" });
});

app.listen(PORT, () => {
  console.log(`mydevops-project is running on port ${PORT}`);
});