import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TrainingDataService } from "./trainingData.service";
import { TrainingDataControllerBase } from "./base/trainingData.controller.base";

@swagger.ApiTags("trainingData")
@common.Controller("trainingData")
export class TrainingDataController extends TrainingDataControllerBase {
  constructor(protected readonly service: TrainingDataService) {
    super(service);
  }
}
