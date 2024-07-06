import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingDataServiceBase } from "./base/trainingData.service.base";

@Injectable()
export class TrainingDataService extends TrainingDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
