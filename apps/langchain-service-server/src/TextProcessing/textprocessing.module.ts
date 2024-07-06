import { Module } from "@nestjs/common";
import { TextProcessingService } from "./textprocessing.service";
import { TextProcessingController } from "./textprocessing.controller";
import { TextProcessingResolver } from "./textprocessing.resolver";

@Module({
  controllers: [TextProcessingController],
  providers: [TextProcessingService, TextProcessingResolver],
  exports: [TextProcessingService],
})
export class TextProcessingModule {}
