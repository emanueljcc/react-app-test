import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: headers => {
      headers.set('Content-type', 'application/json')
      return headers
    },
    timeout: 15000 // timeout
  }),
  tagTypes: [],
  endpoints: builder => ({
    getAllList: builder.query({
      query: () => '/v1/api/files/list'
    }),
    getAllFilesData: builder.query({
      query: (fileName) => `/v1/api/files/data${fileName ? `?fileName=${fileName}` : ''}`
    })
  })
})

export const {
  useGetAllListQuery,
  useGetAllFilesDataQuery
} = apiSlice
