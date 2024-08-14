import { shortURLService } from "@services";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Server alive!!!" }));

router.get("/shorten", async (req, res) => {
  const originalURL = req.query.originalURL;
  if (!originalURL) {
    return res.status(400).json({ message: "originalURL is required" });
  }
  const shortURL = await shortURLService.createShortURL(String(originalURL));
  return res.json({ shortURL });
});

router.get("/:shortId", async (req, res) => {
  const originalURL = await shortURLService.getOriginalURL(req.params.shortId);
  if (!originalURL) {
    return res.status(404).json({ message: "URL not found" });
  }
  return res.redirect(originalURL);
});

router.delete("/", async (req, res) => {
  const { originalURL, shortURL } = req.body;
  const message = await shortURLService.deleteURL(originalURL, shortURL);
  return res.json({ message });
});

export { router as shortenerRoutes };
