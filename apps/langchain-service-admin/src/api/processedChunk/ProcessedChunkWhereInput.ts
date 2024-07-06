import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProcessedChunkWhereInput = {
  chunk?: StringNullableFilter;
  id?: StringFilter;
  order?: IntNullableFilter;
};
