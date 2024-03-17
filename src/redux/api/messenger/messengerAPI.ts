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
    // Insert Message
    insertMessage: build.mutation({
      query: (data) => ({
        url: `/messenger/message`,
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
    // Get Messages

    getMessages: build.query({
      query: (data) => ({
        url: `/messenger/get-all-messages?sender=${data.sender}&reciver=${data.reciver}`,
        method: "GET",
      }),
      providesTags: ["messenger"],
    }),
  }),
});

export const {
  useAddUserIntoContactMutation,
  useMyContactQuery,
  useGetMessagesQuery,
  useInsertMessageMutation,
} = authApi;
