import {
  contextMenuSlice,
  filterCategoriesSlice,
  snackbarSlice,
  todosSlice
} from '@/store/slices';

export const allActions = {
  ...todosSlice.actions,
  ...filterCategoriesSlice.actions,
  ...snackbarSlice.actions,
  ...contextMenuSlice.actions
};
