/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BotInteractionWhereUniqueInput } from "../../botInteraction/base/BotInteractionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BotInteractionUpdateManyWithoutUsersInput {
  @Field(() => [BotInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BotInteractionWhereUniqueInput],
  })
  connect?: Array<BotInteractionWhereUniqueInput>;

  @Field(() => [BotInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BotInteractionWhereUniqueInput],
  })
  disconnect?: Array<BotInteractionWhereUniqueInput>;

  @Field(() => [BotInteractionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BotInteractionWhereUniqueInput],
  })
  set?: Array<BotInteractionWhereUniqueInput>;
}

export { BotInteractionUpdateManyWithoutUsersInput as BotInteractionUpdateManyWithoutUsersInput };