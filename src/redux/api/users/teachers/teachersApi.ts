import { baseApi } from "../../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Teachers
    getAllTeachers: build.query({
      query: () => ({
        url: `/teachersRoutes/getAllTeacher`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // Get Single Teacher
    getSingleTeachers: build.query({
      query: (id) => ({
        url: `/teachersRoutes/getSingleTeacher/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllTeachersQuery, useGetSingleTeachersQuery } = authApi;
