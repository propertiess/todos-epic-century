import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "@/interfaces/filter.interface";

const initialState: IFilter = {
  type: "all",
};

const filterCategoriesSlice = createSlice({
  name: "filterCategories",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<"all" | "checked" | "unchecked">
    ) => {
      state.type = action.payload;
    },
  },
});

export const filterCategoriesActions = filterCategoriesSlice.actions;
export default filterCategoriesSlice.reducer;
