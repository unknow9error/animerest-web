import { createSlice } from '@reduxjs/toolkit';

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
        register: (state) => {
            
        },
        login: () => {

        }    
    }
})