import { generateShortHash } from "@config";
import { shortURLRepo } from "@repository";

const createShortURL = async (url: string): Promise<string> => {
  const shortURL = await generateShortHash();
  await shortURLRepo.createURL(url, shortURL);
  return shortURL;
};

const getOriginalURL = async (
  shortURL: string
): Promise<string | undefined> => {
  const data = await shortURLRepo.findURL(shortURL);
  return data?.originalURL;
};

const deleteURL = async (shortURL: string): Promise<string> => {
  return (await shortURLRepo.deleteURL(shortURL)).acknowledged.valueOf()
    ? "Deleted"
    : "Not Found";
};
export const shortURLService = { createShortURL, getOriginalURL, deleteURL };
