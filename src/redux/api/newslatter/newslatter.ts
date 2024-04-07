import { baseApi } from "../baseApi";

export const newslatterAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Insert Newslatter EMail
    insertNewslatterEmail: build.mutation({
      query: (data) => ({
        url: `/newslatter`,
        method: "POST",
        data: data,
      }),
    }),
    // Get Newslatter EMail
    getNewslatterEmail: build.query({
      query: () => ({
        url: `/newslatter`,
        method: "GET",
      }),
    }),
  }),
});

export const { useInsertNewslatterEmailMutation, useGetNewslatterEmailQuery } =
  newslatterAPI;
