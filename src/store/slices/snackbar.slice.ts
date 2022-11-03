import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: false,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    }
  }
});
