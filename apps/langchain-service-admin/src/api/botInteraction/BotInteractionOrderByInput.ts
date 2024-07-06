import { SortOrder } from "../../util/SortOrder";

export type BotInteractionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  interactionTime?: SortOrder;
  message?: SortOrder;
  response?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
