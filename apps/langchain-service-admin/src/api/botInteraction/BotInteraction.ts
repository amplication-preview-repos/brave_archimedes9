import { User } from "../user/User";

export type BotInteraction = {
  createdAt: Date;
  id: string;
  interactionTime: Date | null;
  message: string | null;
  response: string | null;
  updatedAt: Date;
  user?: User | null;
};
