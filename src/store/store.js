import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { uiSlice, calendarSlice, authSlice } from './'

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});
export const store = configureStore({
  reducer: {
    auth:     authSlice.reducer,
    ui:       uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
  middleware: customizedMiddleware
})

