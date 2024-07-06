import * as graphql from "@nestjs/graphql";
import { TrainingDataResolverBase } from "./base/trainingData.resolver.base";
import { TrainingData } from "./base/TrainingData";
import { TrainingDataService } from "./trainingData.service";

@graphql.Resolver(() => TrainingData)
export class TrainingDataResolver extends TrainingDataResolverBase {
  constructor(protected readonly service: TrainingDataService) {
    super(service);
  }
}
