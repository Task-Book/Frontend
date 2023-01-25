import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasksList: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
