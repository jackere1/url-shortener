import { shortURLRepo } from "@repository";

const getVisitCount = async (shortURL: string) => {
  return await shortURLRepo.getVisitCount(shortURL);
};

const getVisitCounts = async () => {
  return await shortURLRepo.getVisitCounts();
};

export const metricService = { getVisitCount, getVisitCounts };
