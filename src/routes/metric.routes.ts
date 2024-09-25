import { metricService } from "@services";
import { Router } from "express";

const router = Router();

router.get("/:shortURL", async (req, res) => {
  const { shortURL } = req.params;
  if (!shortURL) {
    return res.status(400).json({ message: "shortURL is required" });
  }
  const visitCount = await metricService.getVisitCount(shortURL);
  return res.json(visitCount);
});

router.get("/", async (req, res) => {
  const visitCounts = await metricService.getVisitCounts();
  return res.json(visitCounts);
});

export { router as metricRoutes };
