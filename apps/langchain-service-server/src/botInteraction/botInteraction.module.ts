import { Module } from "@nestjs/common";
import { BotInteractionModuleBase } from "./base/botInteraction.module.base";
import { BotInteractionService } from "./botInteraction.service";
import { BotInteractionController } from "./botInteraction.controller";
import { BotInteractionResolver } from "./botInteraction.resolver";

@Module({
  imports: [BotInteractionModuleBase],
  controllers: [BotInteractionController],
  providers: [BotInteractionService, BotInteractionResolver],
  exports: [BotInteractionService],
})
export class BotInteractionModule {}
