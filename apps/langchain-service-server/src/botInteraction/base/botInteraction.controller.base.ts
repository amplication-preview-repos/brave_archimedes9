/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BotInteractionService } from "../botInteraction.service";
import { BotInteractionCreateInput } from "./BotInteractionCreateInput";
import { BotInteraction } from "./BotInteraction";
import { BotInteractionFindManyArgs } from "./BotInteractionFindManyArgs";
import { BotInteractionWhereUniqueInput } from "./BotInteractionWhereUniqueInput";
import { BotInteractionUpdateInput } from "./BotInteractionUpdateInput";

export class BotInteractionControllerBase {
  constructor(protected readonly service: BotInteractionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BotInteraction })
  async createBotInteraction(
    @common.Body() data: BotInteractionCreateInput
  ): Promise<BotInteraction> {
    return await this.service.createBotInteraction({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        interactionTime: true,
        message: true,
        response: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BotInteraction] })
  @ApiNestedQuery(BotInteractionFindManyArgs)
  async botInteractions(
    @common.Req() request: Request
  ): Promise<BotInteraction[]> {
    const args = plainToClass(BotInteractionFindManyArgs, request.query);
    return this.service.botInteractions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        interactionTime: true,
        message: true,
        response: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BotInteraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async botInteraction(
    @common.Param() params: BotInteractionWhereUniqueInput
  ): Promise<BotInteraction | null> {
    const result = await this.service.botInteraction({
      where: params,
      select: {
        createdAt: true,
        id: true,
        interactionTime: true,
        message: true,
        response: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BotInteraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBotInteraction(
    @common.Param() params: BotInteractionWhereUniqueInput,
    @common.Body() data: BotInteractionUpdateInput
  ): Promise<BotInteraction | null> {
    try {
      return await this.service.updateBotInteraction({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          interactionTime: true,
          message: true,
          response: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BotInteraction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBotInteraction(
    @common.Param() params: BotInteractionWhereUniqueInput
  ): Promise<BotInteraction | null> {
    try {
      return await this.service.deleteBotInteraction({
        where: params,
        select: {
          createdAt: true,
          id: true,
          interactionTime: true,
          message: true,
          response: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}