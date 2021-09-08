import express from "express";
import lusca from "lusca";
import compression from "compression";
import { json, urlencoded } from "body-parser";

// Create Express Server
const app = express();

app.set("port", process.env.PORT || 5000);
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));
// parse application/json
app.use(json());

app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(compression());

app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
