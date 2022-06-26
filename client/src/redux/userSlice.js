import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        addUser: (state, action) => {
        state.user = action.payload
        },
        deleteUser: state => {
        state.user = {}
    },
    resetState: state => {
        state.user = null
        state.jwtToken = ""
    }},
})

export const selectUser = state => state.user.user

export const { addUser, deleteUser, resetState } = userSlice.actions

export default userSlice.reducer