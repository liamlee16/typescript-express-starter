import express from "express";

// Create Express Server
const app = express();

app.set("port", process.env.PORT || 5000);

app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
