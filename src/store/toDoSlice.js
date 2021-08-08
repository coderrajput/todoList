import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: []
};

const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNote(state, action) {
      console.log(action.payload);
      state.lists.push(action.payload);
    },
    removeNote(state, action) {},
    editNote(state, action) {}
  }
});

export default toDoSlice.reducer;
export const { addNote, removeNote, editNote } = toDoSlice.actions;
