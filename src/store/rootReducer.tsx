import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { animeService } from 'src/services/Anime/Anime.service';
import { authenticationService } from 'src/services/Authentication/Authentication.service';
import threeReducer from './Three/Three.slice';

export const store = configureStore({
    reducer: {
        [authenticationService.reducerPath]: authenticationService.reducer,
        [animeService.reducerPath]: animeService.reducer,
        three: threeReducer
    },
})

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;