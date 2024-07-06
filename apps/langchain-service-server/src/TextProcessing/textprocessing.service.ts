import { Injectable } from "@nestjs/common";
import { TextChunkInput } from "../textProcessing/TextChunkInput";

@Injectable()
export class TextProcessingService {
  constructor() {}
  async IngestTextFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProcessTextChunks(args: TextChunkInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
