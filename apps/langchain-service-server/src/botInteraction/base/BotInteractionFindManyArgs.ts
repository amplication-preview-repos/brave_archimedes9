/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BotInteractionWhereInput } from "./BotInteractionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BotInteractionOrderByInput } from "./BotInteractionOrderByInput";

@ArgsType()
class BotInteractionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BotInteractionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BotInteractionWhereInput, { nullable: true })
  @Type(() => BotInteractionWhereInput)
  where?: BotInteractionWhereInput;

  @ApiProperty({
    required: false,
    type: [BotInteractionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BotInteractionOrderByInput], { nullable: true })
  @Type(() => BotInteractionOrderByInput)
  orderBy?: Array<BotInteractionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BotInteractionFindManyArgs as BotInteractionFindManyArgs };