import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store';
import { mockTodo } from '@/utils/helpers/mockTodo';
import { TodoItem } from './TodoItem';

const setup = () =>
  render(
    <Provider store={store}>
      <TodoItem todo={mockTodo} onChecked={() => {}} onContextMenu={() => {}} />
    </Provider>
  );

describe('TodoItem', () => {
  test('renders', () => {
    setup();
    expect(screen.getByTestId('item')).toBeInTheDocument();
  });

  test('input checked is false', () => {
    setup();
    const checkboxEl: HTMLInputElement = screen.getByRole('checkbox');
    expect(checkboxEl).toBeInTheDocument();
    expect(checkboxEl.checked).toBe(false);
  });

  test('label title is correct', () => {
    setup();
    const labelEl: HTMLLabelElement = screen.getByTestId('todo-label');
    expect(labelEl.textContent).toMatch(mockTodo.title);
  });
});
