import { shortURLService } from "@services";
import { Router } from "express";

const router = Router();

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

router.delete("/:shortURL", async (req, res) => {
  const { shortURL } = req.params;
  const message = await shortURLService.deleteURL(shortURL);
  return res.json({ message });
});

export { router as shortenerRoutes };
