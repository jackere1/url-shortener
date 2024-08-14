import { shortenerRoutes } from "@routes";
import express from "express";

const app = express();

app.use(express.json());
app.use(shortenerRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/");

export default app;
