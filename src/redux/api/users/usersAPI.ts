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
    // Get User details by role
    getAllUsersByRole: build.query({
      query: (role) => ({
        url: `/users/getAllUsers/${role}`,
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
    // Get Single User Details by ID
    getUserDetailsById: build.query({
      query: (id) => ({
        url: `/users/getSingleUserDetailsById/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    // Update User Password
    updateUserPassword: build.mutation({
      query: ({ id, data }) => ({
        url: `/users/change-password/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["user"],
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
    // Update User Details
    getUserGroth: build.query({
      query: () => ({
        url: `/users/user-growth`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetAllTeachersQuery,
  useGetUserDetailsQuery,
  useUpdateUserDetailsMutation,
  useUpdateUserPasswordMutation,
  useGetAllUsersByRoleQuery,
  useGetUserDetailsByIdQuery,
  useGetUserGrothQuery,
} = authApi;
