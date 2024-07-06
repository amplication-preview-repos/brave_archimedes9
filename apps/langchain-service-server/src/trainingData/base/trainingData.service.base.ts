/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TrainingData as PrismaTrainingData } from "@prisma/client";

export class TrainingDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TrainingDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.trainingData.count(args);
  }

  async trainingDataItems(
    args: Prisma.TrainingDataFindManyArgs
  ): Promise<PrismaTrainingData[]> {
    return this.prisma.trainingData.findMany(args);
  }
  async trainingData(
    args: Prisma.TrainingDataFindUniqueArgs
  ): Promise<PrismaTrainingData | null> {
    return this.prisma.trainingData.findUnique(args);
  }
  async createTrainingData(
    args: Prisma.TrainingDataCreateArgs
  ): Promise<PrismaTrainingData> {
    return this.prisma.trainingData.create(args);
  }
  async updateTrainingData(
    args: Prisma.TrainingDataUpdateArgs
  ): Promise<PrismaTrainingData> {
    return this.prisma.trainingData.update(args);
  }
  async deleteTrainingData(
    args: Prisma.TrainingDataDeleteArgs
  ): Promise<PrismaTrainingData> {
    return this.prisma.trainingData.delete(args);
  }
}
