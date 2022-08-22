import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseResponseVM, LoginVm, RegisterVm } from 'src/models';
import { AccountApiConstants } from 'src/utils/constants/api.constants';
import { CONFIG } from 'src/utils/constants/config.constants';
import { getCookie } from '../Cookie/Cookie.service';

export const authenticationService = createApi({
    reducerPath: 'authenticationService',
    baseQuery: fetchBaseQuery({ baseUrl: AccountApiConstants.BASE }),
    endpoints: (builder) => ({
        login: builder.mutation<BaseResponseVM<string>, LoginVm>({
            query: (payload) => ({
                url: AccountApiConstants.LOGIN,
                method: 'POST',
                body: payload,
            }),
        }),
        register: builder.mutation<BaseResponseVM<string>, RegisterVm>({
            query: (payload) => ({
                url: AccountApiConstants.REGISTER,
                method: 'POST',
                body: payload
            })
        }),
        googleLogin: builder.mutation<BaseResponseVM<boolean>, null>({
            query: () => ({
                url: AccountApiConstants.GOOGLE,
                method: 'POST',
                body: null,
                headers: {
                    "Authorization": `Bearer ${getCookie('token')}`
                }
            }),
        }),
    })
});
export const {
    useLoginMutation,
    useRegisterMutation,
    useGoogleLoginMutation
} = authenticationService;