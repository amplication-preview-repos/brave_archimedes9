import { SortOrder } from "../../util/SortOrder";

export type TrainingDataOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  source?: SortOrder;
  updatedAt?: SortOrder;
};
