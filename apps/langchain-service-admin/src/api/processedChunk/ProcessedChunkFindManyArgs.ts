import { ProcessedChunkWhereInput } from "./ProcessedChunkWhereInput";
import { ProcessedChunkOrderByInput } from "./ProcessedChunkOrderByInput";

export type ProcessedChunkFindManyArgs = {
  where?: ProcessedChunkWhereInput;
  orderBy?: Array<ProcessedChunkOrderByInput>;
  skip?: number;
  take?: number;
};
