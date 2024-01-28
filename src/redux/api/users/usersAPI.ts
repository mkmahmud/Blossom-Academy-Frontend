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
        url: `/users/getAllUsers/teacher`,
        method: "GET",
      }),
      providesTags: ["batch"],
    }),
    // Get User Details
    getUserDetails: build.query({
      query: (id) => ({
        url: `/users/getSingleUserDetails/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // Update User Details
    updateUserDetails: build.mutation({
      query: (data) => ({
        url: `/users/updateuser/${data.userId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetAllTeachersQuery,
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
} = authApi;
