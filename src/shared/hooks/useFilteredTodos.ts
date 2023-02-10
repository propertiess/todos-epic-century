import { useMemo } from 'react';
import { IFilter, ITodo } from '@/shared/types';

export const useFilteredTodos = (todos: ITodo[], filterBy: IFilter) => {
  const filteredTodos = useMemo(() => {
    switch (filterBy) {
      case 'checked':
        return todos.filter(todo => todo.checked);
      case 'unchecked':
        return todos.filter(todo => !todo.checked);
      default:
        return todos;
    }
  }, [todos, filterBy]);

  return {
    filteredTodos
  };
};
