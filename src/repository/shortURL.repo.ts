import { shortUrlModel } from "@models";

const findURL = async (shortURL: string) => {
  return await shortUrlModel.findOneAndUpdate(
    { shortURL },
    { $inc: { visitCount: 1 } },
    { new: true, lean: true }
  );
};

const createURL = async (originalURL: string, shortURL: string) => {
  const newData = new shortUrlModel({ originalURL, shortURL });
  return (await newData.save()).toObject();
};

const deleteURL = async (originalURL: string, shortURL: string) => {
  const criteria: any = {};
  if (originalURL) criteria["originalURL"] = originalURL;
  if (shortURL) criteria["shortURL"] = shortURL;
  return await shortUrlModel.deleteOne(criteria).lean();
};

export const shortURLRepo = { findURL, createURL, deleteURL };
