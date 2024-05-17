import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: undefined,
    show: false,
    data: null
}

const modal = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.name = action.payload.name;
            state.show = true;
            state.data = action.payload.data;
        },
        hideModal: () => {
            return initialState;
        }
    }
})


export const modalActions = modal.actions;
export default modal.reducer