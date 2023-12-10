import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create Course
    createCourse: build.mutation({
      query: (data) => ({
        url: `/courses/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["courses"],
    }),
    // Get All Course
    getAlCourse: build.query({
      query: () => ({
        url: `/courses`,
        method: "GET",
      }),
      providesTags: ["courses"],
    }),
    // delete Course
    deleteCourse: build.mutation({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["courses"],
    }),
  }),
});

export const {
  useCreateCourseMutation,
  useGetAlCourseQuery,
  useDeleteCourseMutation,
} = authApi;
