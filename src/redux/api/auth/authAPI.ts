import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Log In User
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    // Register user
    userRegistration: build.mutation({
      query: (data) => ({
        url: `/users/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation, useUserRegistrationMutation } = authApi;
