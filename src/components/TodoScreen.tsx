import { TodoList } from '@/components';
import { useFilteredAndSortedTodos } from '@/hooks';

const TodoScreen = () => {
  const { filteredSortedTodos } = useFilteredAndSortedTodos();

  return <TodoList todos={filteredSortedTodos} />;
};

export { TodoScreen };
