import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BotInteractionService } from "./botInteraction.service";
import { BotInteractionControllerBase } from "./base/botInteraction.controller.base";

@swagger.ApiTags("botInteractions")
@common.Controller("botInteractions")
export class BotInteractionController extends BotInteractionControllerBase {
  constructor(protected readonly service: BotInteractionService) {
    super(service);
  }
}
