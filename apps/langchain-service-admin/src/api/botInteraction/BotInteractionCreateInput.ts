import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotInteractionCreateInput = {
  interactionTime?: Date | null;
  message?: string | null;
  response?: string | null;
  user?: UserWhereUniqueInput | null;
};
