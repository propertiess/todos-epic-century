import { useMemo } from 'react';
import { IFilter, ITodo } from '@/types';
import { useFilteredTodos } from './useFilteredTodos';

export const useFilteredAndSortedTodos = (
  todos: ITodo[],
  filterBy: IFilter
) => {
  const { filteredTodos } = useFilteredTodos(todos, filterBy);

  const filteredSortedTodos = useMemo(() => {
    return [...filteredTodos].sort((a, b) => {
      const result = a.timeDone! - b.timeDone!;

      if (a.timeDone && b.timeDone) {
        return result > 0 ? -1 : 1;
      }

      return result;
    });
  }, [filteredTodos]);

  return {
    filteredSortedTodos
  };
};
