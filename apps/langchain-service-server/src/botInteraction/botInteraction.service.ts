import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BotInteractionServiceBase } from "./base/botInteraction.service.base";

@Injectable()
export class BotInteractionService extends BotInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
