import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { todoSlice } from "../features/todo/todoSlice";
import { themeSlice } from "../features/themes/themeSlice";

// dherai slices haru xa vane yesari combine garera reducer ma use garna milyo
const rootReducer = combineSlices(todoSlice, themeSlice);

//configureStore le redux store banauxa
export const store = configureStore({
  reducer: rootReducer,
});

// store ko type nikalna ko lagi - Todos.tsx ma une garna ko lagi
export type RootState = ReturnType<typeof store.getState>;

// jati ota sukai state vaye ni yeuta store hunxa.
// without store react redux doesn't work.
// it combines all the reducers
