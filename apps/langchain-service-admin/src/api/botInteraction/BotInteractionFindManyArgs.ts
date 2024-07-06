import { BotInteractionWhereInput } from "./BotInteractionWhereInput";
import { BotInteractionOrderByInput } from "./BotInteractionOrderByInput";

export type BotInteractionFindManyArgs = {
  where?: BotInteractionWhereInput;
  orderBy?: Array<BotInteractionOrderByInput>;
  skip?: number;
  take?: number;
};
