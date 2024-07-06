import * as graphql from "@nestjs/graphql";
import { TextChunkInput } from "../textProcessing/TextChunkInput";
import { TextProcessingService } from "./textprocessing.service";

export class TextProcessingResolver {
  constructor(protected readonly service: TextProcessingService) {}

  @graphql.Mutation(() => String)
  async IngestTextFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.IngestTextFile(args);
  }

  @graphql.Mutation(() => String)
  async ProcessTextChunks(
    @graphql.Args()
    args: TextChunkInput
  ): Promise<string> {
    return this.service.ProcessTextChunks(args);
  }
}
