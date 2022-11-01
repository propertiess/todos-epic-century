import { useMemo } from "react";
import { useAppSelector } from "@/store/hooks/useAppSelector";

export const useFilteredTodos = () => {
  const initialTodos = useAppSelector(state => state.todos);
  const { type } = useAppSelector(state => state.filterCategories);

  const filteredTodos = useMemo(() => {
    switch (type) {
      case "checked":
        return initialTodos.filter(todo => todo.checked);
      case "unchecked":
        return initialTodos.filter(todo => !todo.checked);
      default: 
        return initialTodos
    }
  }, [initialTodos, type]);

  return {
    filteredTodos,
  };
};
