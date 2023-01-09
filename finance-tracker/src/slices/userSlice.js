import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: null,
        email: null,
        password: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;