// import { apiSlice } from '~//apis/apiSlice'
import { apiSlice } from './apiSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webtoonApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWebtoons: builder.query({
            query: () => '/webtoons',
        }),
        getNewWebtoons: builder.query({
            query: () => '/webtoons/new',
        }),
        getPopularWebtoons: builder.query({
            query: () => '/webtoons/popular',
        }),
        getRecommendWebtoons: builder.query({
            query: () => '/webtoons/recommend',
        }),
        getLikedWebtoons: builder.query({
            query: () => '/webtoon/liked',
        }),
    }),
})

export const {
    useGetWebtoonsQuery,
    useGetNewWebtoonsQuery,
    useGetPopularWebtoonsQuery,
    useGetRecommendWebtoonsQuery,
    useGetLikedWebtoonsQuery,
} = webtoonApiSlice
