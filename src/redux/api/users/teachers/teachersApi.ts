import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Teachers
    getAllTeachers: build.query({
      query: () => ({
        url: `/users/users/teachers`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // Get Single Teacher
    getSingleTeachers: build.query({
      query: (id) => ({
        url: `/users/getSingleUserDetails/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllTeachersQuery, useGetSingleTeachersQuery } = authApi;
