import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TrainingDataWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  source?: StringNullableFilter;
};
