import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "src/store/rootReducer";


const baseQuery = fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).authentication.token
        if (token) {
            headers.set('authentication', `Bearer ${token}`)
        }

        return headers;
    }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const apiService = createApi({
    reducerPath: 'splitApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ['Auth'],
    endpoints: () => ({}),
});

export const enhancedApi = apiService.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => 'test',
    }),
})