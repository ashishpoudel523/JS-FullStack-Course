import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  text: string;
};

const initialState: { todos: Todo[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});
