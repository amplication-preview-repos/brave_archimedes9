import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotInteractionWhereInput = {
  id?: StringFilter;
  interactionTime?: DateTimeNullableFilter;
  message?: StringNullableFilter;
  response?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
