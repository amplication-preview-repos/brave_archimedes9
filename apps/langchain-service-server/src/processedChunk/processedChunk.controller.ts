import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessedChunkService } from "./processedChunk.service";
import { ProcessedChunkControllerBase } from "./base/processedChunk.controller.base";

@swagger.ApiTags("processedChunks")
@common.Controller("processedChunks")
export class ProcessedChunkController extends ProcessedChunkControllerBase {
  constructor(protected readonly service: ProcessedChunkService) {
    super(service);
  }
}
