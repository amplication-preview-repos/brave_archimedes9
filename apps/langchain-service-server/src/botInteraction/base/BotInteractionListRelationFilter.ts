/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BotInteractionWhereInput } from "./BotInteractionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BotInteractionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BotInteractionWhereInput,
  })
  @ValidateNested()
  @Type(() => BotInteractionWhereInput)
  @IsOptional()
  @Field(() => BotInteractionWhereInput, {
    nullable: true,
  })
  every?: BotInteractionWhereInput;

  @ApiProperty({
    required: false,
    type: () => BotInteractionWhereInput,
  })
  @ValidateNested()
  @Type(() => BotInteractionWhereInput)
  @IsOptional()
  @Field(() => BotInteractionWhereInput, {
    nullable: true,
  })
  some?: BotInteractionWhereInput;

  @ApiProperty({
    required: false,
    type: () => BotInteractionWhereInput,
  })
  @ValidateNested()
  @Type(() => BotInteractionWhereInput)
  @IsOptional()
  @Field(() => BotInteractionWhereInput, {
    nullable: true,
  })
  none?: BotInteractionWhereInput;
}
export { BotInteractionListRelationFilter as BotInteractionListRelationFilter };
