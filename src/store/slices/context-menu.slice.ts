import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IContextMenu } from '@/interfaces/context-menu.interface';

const initialState: IContextMenu = { id: null };

export const contextMenuSlice = createSlice({
  name: 'context-menu',
  initialState,
  reducers: {
    setShowContextMenu: (state, action: PayloadAction<number | null>) => {
      state.id = action.payload;
    }
  }
});
