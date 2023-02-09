import {
  contextMenuSlice,
  filterCategoriesSlice,
  todosSlice
} from '@/store/slices';

export const allActions = {
  ...todosSlice.actions,
  ...filterCategoriesSlice.actions,
  ...contextMenuSlice.actions
};
