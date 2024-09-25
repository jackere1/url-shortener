import routes from "@routes";
import express from "express";

const app = express();

app.use(express.json());
app.use(routes);

export default app;
