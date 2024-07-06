import * as graphql from "@nestjs/graphql";
import { ProcessedChunkResolverBase } from "./base/processedChunk.resolver.base";
import { ProcessedChunk } from "./base/ProcessedChunk";
import { ProcessedChunkService } from "./processedChunk.service";

@graphql.Resolver(() => ProcessedChunk)
export class ProcessedChunkResolver extends ProcessedChunkResolverBase {
  constructor(protected readonly service: ProcessedChunkService) {
    super(service);
  }
}
