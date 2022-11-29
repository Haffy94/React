import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { calendarSlice } from './calendar/calendarSlice';
import { uiSlide } from './ui/uiSlice';


export const store = configureStore({
    reducer: {
        calendar : calendarSlice.reducer,
        ui: uiSlide.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})  