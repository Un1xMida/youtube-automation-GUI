import { StringFilter } from "../../util/StringFilter";

export type VideoWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  status?: "Option1";
  title?: StringFilter;
};
