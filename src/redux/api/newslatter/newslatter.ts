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
  }),
});

export const { useInsertNewslatterEmailMutation } = newslatterAPI;
