import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get Copurse Schedule
    getCourseSchudle: build.query({
      query: (id) => ({
        url: `/course-schedule/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCourseSchudleQuery } = authApi;
