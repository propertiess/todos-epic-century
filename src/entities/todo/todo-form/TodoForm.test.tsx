import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import store from '@/app/store';

import { TodoForm } from './TodoForm';

const setup = () =>
  render(
    <Provider store={store}>
      <TodoForm />
    </Provider>
  );

describe('TodoForm', () => {
  test('renders', () => {
    setup();
    const formEl = screen.getByTestId('todo-form');
    expect(formEl).toBeInTheDocument();
    expect(formEl.childNodes.length).toBe(2);
  });
});

describe('input', () => {
  test('initial value is correct', () => {
    setup();
    const inputEl: HTMLInputElement = screen.getByTestId('input');
    expect(inputEl).toBeInTheDocument();
    expect(inputEl.value).toMatch('');
  });

  test('value changes correctly', async () => {
    setup();
    const inputEl: HTMLInputElement = screen.getByTestId('input');
    await userEvent.type(inputEl, 'Wash dishes');
    expect(inputEl.value).toMatch(/wash dishes/i);
    userEvent.keyboard('{enter}');
    expect(inputEl.value).toMatch('');
  });
});

describe('button', () => {
  test('handleClick works correctly', async () => {
    setup();
    const inputEl: HTMLInputElement = screen.getByTestId('input');
    const btnEl = screen.getByTestId('btn');
    await userEvent.type(inputEl, 'Wash dishes');
    expect(inputEl.value).toMatch(/wash dishes/i);
    userEvent.click(btnEl);
    expect(inputEl.value).toMatch('');
  });
});
