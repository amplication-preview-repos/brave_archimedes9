import { TrainingData as TTrainingData } from "../api/trainingData/TrainingData";

export const TRAININGDATA_TITLE_FIELD = "source";

export const TrainingDataTitle = (record: TTrainingData): string => {
  return record.source?.toString() || String(record.id);
};
