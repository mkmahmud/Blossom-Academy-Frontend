import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create Batch
    createbatch: build.mutation({
      query: (data) => ({
        url: `/batch/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["batch"],
    }),
    // Add Student Into Batch
    addStudentIntoBatch: build.mutation({
      query: (data) => ({
        url: `/batch/add-student?studentId=${data.studentId}&batchId=${data.batchId}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["batch"],
    }),
    // Add Teacher Into Batch
    addTeacherIntoBatch: build.mutation({
      query: (data) => ({
        url: `/batch/add-teacher?teacherId=${data.teacherId}&batchId=${data.batchId}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["batch"],
    }),
    // Add Course Into Batch
    addCourseIntoBatch: build.mutation({
      query: (data) => ({
        url: `/batch/add-course?courseId=${data.courseId}&batchId=${data.batchId}`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["batch"],
    }),
    // Get All Batch
    getAllBatch: build.query({
      query: () => ({
        url: `/batch`,
        method: "GET",
      }),
      providesTags: ["batch"],
    }),
  }),
});

export const {
  useGetAllBatchQuery,
  useCreatebatchMutation,
  useAddStudentIntoBatchMutation,
  useAddTeacherIntoBatchMutation,
  useAddCourseIntoBatchMutation,
} = authApi;
