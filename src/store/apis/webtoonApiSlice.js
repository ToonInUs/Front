// import { apiSlice } from '~//apis/apiSlice'
import { apiSlice } from './apiSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const webtoonApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getWebtoons: builder.query({
            query: () => '/webtoons',
            transformResponse: (responseData) => {
                console.log('all webtoons:', responseData)
            },
        }),
        getNewWebtoons: builder.query({
            query: () => '/webtoons/new',
            transformResponse: (responseData) => {
                console.log('getNewWebtoons:', responseData)
            },
        }),
        getPopularWebtoons: builder.query({
            query: () => '/webtoons/popular',
            transformResponse: (responseData) => {
                console.log('getPopularWebtoons:', responseData)
            },
        }),
        getRecommendWebtoons: builder.query({
            query: () => '/webtoons/recommend',
            transformResponse: (responseData) => {
                console.log('getRecommendWebtoons:', responseData)
            },
        }),
        getLikedWebtoons: builder.query({
            query: () => '/webtoon/liked',
            transformResponse: (responseData) => {
                console.log('getLikedWebtoons:', responseData)
            },
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
