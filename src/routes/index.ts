import { Router } from "express";
import { shortenerRoutes } from "./shortURL.routes";
import { metricRoutes } from "./metric.routes";

const routes = Router();

routes.get("/", (req, res) => res.json({ message: "Server alive!!!" }));

routes.use("/metrics", metricRoutes);
routes.use(shortenerRoutes);
routes.use("*", (req, res) => res.status(404).json({ message: "Not found" }));

export default routes;
