import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TextProcessingService } from "./textprocessing.service";
import { TextChunkInput } from "../textProcessing/TextChunkInput";

@swagger.ApiTags("textProcessings")
@common.Controller("textProcessings")
export class TextProcessingController {
  constructor(protected readonly service: TextProcessingService) {}

  @common.Post("/ingest-text-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IngestTextFile(
    @common.Body()
    body: TextChunkInput
  ): Promise<string> {
        return this.service.IngestTextFile(body);
      }

  @common.Post("/process-text-chunks")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessTextChunks(
    @common.Body()
    body: TextChunkInput
  ): Promise<string> {
        return this.service.ProcessTextChunks(body);
      }
}
