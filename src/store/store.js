import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { uiSlice, calendarSlice } from './'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});
export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware: customizedMiddleware
})

