import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        customer: customerReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch