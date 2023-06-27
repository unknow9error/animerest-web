import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnilibriaAnimeVm, BaseResponseVM } from "src/models";
import {
    AnimeActionVm,
    AnimeDto,
    AnimeSearchTitleVm,
} from "src/models/Anime/Anime.model";
import { BasePaginationRequest } from "src/models/Base/Base.model";
import { AnimeApiConstants } from "src/utils/constants/api.constants";
import { getCookie } from "../Cookie/Cookie.service";

export const animeService = createApi({
    reducerPath: "animeService",
    baseQuery: fetchBaseQuery({ baseUrl: AnimeApiConstants.BASE }),
    endpoints: (builder) => ({
        getList: builder.query<
            AnilibriaAnimeVm[],
            Partial<BasePaginationRequest>
        >({
            query: ({ page, size }) =>
                AnimeApiConstants.GETLIST +
                `?page=${page || 1}&size=${size || 10}`,
            transformResponse: ({ data }: BaseResponseVM<AnilibriaAnimeVm[]>) =>
                data,
        }),
        getById: builder.query<AnimeDto, number | string>({
            query: (animeId) => AnimeApiConstants.GETBYID + animeId,
            transformResponse: ({ data }: BaseResponseVM<AnimeDto>) => data,
        }),
        getGenres: builder.query<string[], null>({
            query: () => AnimeApiConstants.GENRES,
            transformResponse: ({ data }: BaseResponseVM<string[]>) => data,
        }),
        action: builder.mutation<any, AnimeActionVm>({
            query: (query) => ({
                url: AnimeApiConstants.ACTION + `/${query.action}`,
                body: query,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${getCookie("token")}`,
                },
            }),
        }),
        search: builder.query<AnilibriaAnimeVm[], AnimeSearchTitleVm>({
            query: (query) =>
                AnimeApiConstants.SEARCH +
                `?${Object.keys(query).map(
                    (x, index) =>
                        `${x}=${query[x as keyof typeof query]}${
                            index < Object.keys(query).length - 1 ? "&" : ""
                        }`
                )}`,
            transformResponse: ({ data }: BaseResponseVM<AnilibriaAnimeVm[]>) =>
                data,
        }),
    }),
});

export const {
    useLazyGetListQuery,
    useLazyGetByIdQuery,
    useLazySearchQuery,
    useLazyGetGenresQuery,
    useActionMutation,
} = animeService;
