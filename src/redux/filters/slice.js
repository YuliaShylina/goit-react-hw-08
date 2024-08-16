import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "", number: "" },
  reducers: {
    changeNameFilter(state, action) {
      state.name = action.payload;
    },
    changeNumberFilter(state, action) {
      state.number = action.payload;
    },
  },
});
export default filtersSlice.reducer;
export const { changeNameFilter, changeNumberFilter } = filtersSlice.actions;
