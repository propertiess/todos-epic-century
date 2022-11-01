import { filterCategoriesActions } from "@/store/slices/filterCategories.slice";
import { todosActions } from "@/store/slices/todos.slice";

export const allActions = {
  ...todosActions,
  ...filterCategoriesActions,
};
