import { BotInteraction } from "../botInteraction/BotInteraction";
import { JsonValue } from "type-fest";

export type User = {
  botInteractions?: Array<BotInteraction>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
