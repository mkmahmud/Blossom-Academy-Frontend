import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get All Students
    getAllStudents: build.query({
      query: () => ({
        url: `/users/students`,
        method: "GET",
      }),
      providesTags: ["batch"],
    }),
    // Get All Teachers
    getAllTeachers: build.query({
      query: () => ({
        url: `/users/teachers`,
        method: "GET",
      }),
      providesTags: ["batch"],
    }),
  }),
});

export const { useGetAllStudentsQuery, useGetAllTeachersQuery } = authApi;
