import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
    name:"ui",
    initialState: {
        showModal:false
    },
    reducers: {
        toggleShowModal: (state) => {
            state.showModal = !state.showModal
        }
    }
})

export const { toggleShowModal } = uiSlice.actions;

export default uiSlice.reducer;