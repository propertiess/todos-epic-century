import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilter } from '@/interfaces/filter.interface';

const initialState: IFilter = {
  type: 'all'
};

export const filterCategoriesSlice = createSlice({
  name: 'filterCategories',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<'all' | 'checked' | 'unchecked'>
    ) => {
      state.type = action.payload;
    }
  }
});
