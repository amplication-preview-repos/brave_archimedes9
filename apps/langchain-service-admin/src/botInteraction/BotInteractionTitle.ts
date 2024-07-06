import { BotInteraction as TBotInteraction } from "../api/botInteraction/BotInteraction";

export const BOTINTERACTION_TITLE_FIELD = "id";

export const BotInteractionTitle = (record: TBotInteraction): string => {
  return record.id?.toString() || String(record.id);
};
