import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import image from 'src/assets/images/test.jpg';

export interface ThreeState {
    is3D: boolean;
    image: string;
}

const initialState: ThreeState = {
    is3D: false,
    image
}

export const threeSlice = createSlice({
    name: "three",
    initialState,
    reducers: {
        set3D: (state) => {
            state.is3D = !state.is3D;
        },
        changeImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        }
    }
});

export const { set3D } = threeSlice.actions;
export default threeSlice.reducer;