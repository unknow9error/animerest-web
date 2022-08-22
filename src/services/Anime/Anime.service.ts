import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnilibriaAnimeVm, BaseResponseVM } from "src/models";
import { BasePaginationRequest } from "src/models/Base/Base.model";
import { AnimeApiConstants } from "src/utils/constants/api.constants";

export const animeService = createApi({
    reducerPath: "animeService",
    baseQuery: fetchBaseQuery({ baseUrl: AnimeApiConstants.BASE }),
    endpoints: (builder) => ({
        getList: builder.query<AnilibriaAnimeVm[], BasePaginationRequest>({
            query: ({ page, size }) => AnimeApiConstants.GETLIST + `?page=${page || 1}&size=${size || 10}`,
            transformResponse: ({ data }: BaseResponseVM<AnilibriaAnimeVm[]>) => data
        }),
        getById: builder.query<AnilibriaAnimeVm, number | string>({
            query: (animeId) => AnimeApiConstants.GETBYID + `?id=${animeId}`,
            transformResponse: ({ data }: BaseResponseVM<AnilibriaAnimeVm>) => data
        })
    })
});

export const {
    useLazyGetListQuery,
    useLazyGetByIdQuery
} = animeService;
