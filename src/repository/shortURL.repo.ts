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

const deleteURL = async (shortURL: string) => {
  return await shortUrlModel
    .deleteOne({
      shortURL: shortURL ?? "",
    })
    .lean();
};

const getVisitCount = async (shortURL: string) => {
  return await shortUrlModel.findOne(
    { shortURL },
    { visitCount: 1, _id: 0 },
    { lean: true }
  );
};

const getVisitCounts = async () => {
  return await shortUrlModel.find(
    {},
    { _id: 0, __v: 0 },
    { lean: true }
  );
};

export const shortURLRepo = {
  findURL,
  createURL,
  deleteURL,
  getVisitCount,
  getVisitCounts,
};
