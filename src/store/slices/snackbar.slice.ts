import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: false,
  reducers: {
    setShow: (state, action: PayloadAction<boolean>) => {
      return (state = action.payload);
    },
  },
});

export const snackbarActions = snackbarSlice.actions;
export default snackbarSlice.reducer;
