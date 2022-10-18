import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
    id: string;
    name: string;
    food: string[];
}

interface TodoState {
    value: Customer[];
}

const initialState: customerState = {
    value: [],
};

export const customerSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
    },
});

export const { addTodo, removeTodo } =
    customerSlice.actions;

export default customerSlice.reducer;
