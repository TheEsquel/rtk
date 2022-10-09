import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ServerResponse, IUser} from "../../models/models";

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://api.github.com/'
        }),
    refetchOnFocus: true,
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => {
                return {
                    url: `search/users`,
                    params: {
                        q: search,
                        per_page: 15,
                    }
                }
            },
            transformResponse: (response: ServerResponse) => response.items
        }),
    })
})

export const { useSearchUsersQuery } = githubApi