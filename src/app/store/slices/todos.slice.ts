import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from '@/shared/types';

const initialState: ITodo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<string>) => {
      const todo: ITodo = {
        id: Date.now(),
        checked: false,
        title: action.payload,
        timeDone: null
      };
      state.unshift(todo);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload);
    },

    toggleChecked: (state, action: PayloadAction<number>) => {
      state.map(todo => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked;
          todo.timeDone = Date.now();
        }
        if (!todo.checked) todo.timeDone = null;
      });
    },

    changeTodo: (
      state,
      action: PayloadAction<{ id: number; value: string }>
    ) => {
      const { id, value } = action.payload;
      const index = state.findIndex(todo => todo.id === id);

      state[index].title = value;
    }
  }
});
