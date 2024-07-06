import { Module } from "@nestjs/common";
import { TrainingDataModuleBase } from "./base/trainingData.module.base";
import { TrainingDataService } from "./trainingData.service";
import { TrainingDataController } from "./trainingData.controller";
import { TrainingDataResolver } from "./trainingData.resolver";

@Module({
  imports: [TrainingDataModuleBase],
  controllers: [TrainingDataController],
  providers: [TrainingDataService, TrainingDataResolver],
  exports: [TrainingDataService],
})
export class TrainingDataModule {}
