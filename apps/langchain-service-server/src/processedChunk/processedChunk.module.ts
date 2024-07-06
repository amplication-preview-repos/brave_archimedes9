import { Module } from "@nestjs/common";
import { ProcessedChunkModuleBase } from "./base/processedChunk.module.base";
import { ProcessedChunkService } from "./processedChunk.service";
import { ProcessedChunkController } from "./processedChunk.controller";
import { ProcessedChunkResolver } from "./processedChunk.resolver";

@Module({
  imports: [ProcessedChunkModuleBase],
  controllers: [ProcessedChunkController],
  providers: [ProcessedChunkService, ProcessedChunkResolver],
  exports: [ProcessedChunkService],
})
export class ProcessedChunkModule {}
