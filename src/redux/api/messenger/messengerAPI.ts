import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // add User into contact
    addUserIntoContact: build.mutation({
      query: (data) => ({
        url: `/messenger`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["messenger"],
    }),

    // Get My contact
    myContact: build.query({
      query: (id) => ({
        url: `/messenger/get-my-contact/${id}`,
        method: "GET",
      }),
      providesTags: ["messenger"],
    }),
  }),
});

export const { useAddUserIntoContactMutation, useMyContactQuery } = authApi;
