import { shortUrlModel } from "@models";

const charSet = "0123456789abcdefghijklmnopqrstuvwxyz";
const shortUrlLength = 6;

/**
 * @description: Hash available -> 36 ^ 6 = 2.176.782.336
 */
const generateShortHash = async (length: number = shortUrlLength) => {
  let shortURL = "";
  let offset = await shortUrlModel.countDocuments();
  while (offset > 0) {
    shortURL = charSet[offset % charSet.length] + shortURL;
    offset = Math.floor(offset / charSet.length);
  }

  if (shortURL.length < shortUrlLength) {
    return shortURL.padStart(shortUrlLength, charSet[0]);
  }
  return shortURL;
};

export { generateShortHash };
