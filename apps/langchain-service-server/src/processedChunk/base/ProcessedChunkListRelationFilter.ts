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
import { ProcessedChunkWhereInput } from "./ProcessedChunkWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProcessedChunkListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProcessedChunkWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedChunkWhereInput)
  @IsOptional()
  @Field(() => ProcessedChunkWhereInput, {
    nullable: true,
  })
  every?: ProcessedChunkWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessedChunkWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedChunkWhereInput)
  @IsOptional()
  @Field(() => ProcessedChunkWhereInput, {
    nullable: true,
  })
  some?: ProcessedChunkWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessedChunkWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessedChunkWhereInput)
  @IsOptional()
  @Field(() => ProcessedChunkWhereInput, {
    nullable: true,
  })
  none?: ProcessedChunkWhereInput;
}
export { ProcessedChunkListRelationFilter as ProcessedChunkListRelationFilter };
