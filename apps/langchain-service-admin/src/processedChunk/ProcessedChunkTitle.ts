import { ProcessedChunk as TProcessedChunk } from "../api/processedChunk/ProcessedChunk";

export const PROCESSEDCHUNK_TITLE_FIELD = "id";

export const ProcessedChunkTitle = (record: TProcessedChunk): string => {
  return record.id?.toString() || String(record.id);
};
