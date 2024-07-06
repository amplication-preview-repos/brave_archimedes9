import * as graphql from "@nestjs/graphql";
import { BotInteractionResolverBase } from "./base/botInteraction.resolver.base";
import { BotInteraction } from "./base/BotInteraction";
import { BotInteractionService } from "./botInteraction.service";

@graphql.Resolver(() => BotInteraction)
export class BotInteractionResolver extends BotInteractionResolverBase {
  constructor(protected readonly service: BotInteractionService) {
    super(service);
  }
}
