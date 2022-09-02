import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'src/services/Cookie/Cookie.service';

export interface AuthenticationState {
    isAuth: boolean;
}

const initialState: AuthenticationState = {
    isAuth: false
}

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        checkAuth: (state) => {
            state.isAuth = Boolean(getCookie('token'));
        },
    }
})

export const { checkAuth } = authenticationSlice.actions;
export default authenticationSlice.reducer;