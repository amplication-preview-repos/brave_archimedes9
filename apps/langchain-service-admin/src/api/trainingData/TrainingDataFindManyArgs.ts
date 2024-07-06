import { TrainingDataWhereInput } from "./TrainingDataWhereInput";
import { TrainingDataOrderByInput } from "./TrainingDataOrderByInput";

export type TrainingDataFindManyArgs = {
  where?: TrainingDataWhereInput;
  orderBy?: Array<TrainingDataOrderByInput>;
  skip?: number;
  take?: number;
};
