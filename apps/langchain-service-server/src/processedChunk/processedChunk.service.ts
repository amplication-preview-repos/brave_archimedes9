import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessedChunkServiceBase } from "./base/processedChunk.service.base";

@Injectable()
export class ProcessedChunkService extends ProcessedChunkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
