import { baseApi } from "../baseApi";

export const notificationAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Get Notifications
    getNotifications: build.query({
      query: (id) => ({
        url: `/notification/${id}`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),
    // Update Notifications
    updateNotifications: build.mutation({
      query: (id) => ({
        url: `/notification/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["notification"],
    }),
    // Create Notification
    createNotifications: build.mutation({
      query: (data) => ({
        url: `/notification/`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["notification"],
    }),
    // Create Multiple Notification
    createMultipleNotifications: build.mutation({
      query: (data) => ({
        url: `/notification/multiple`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useUpdateNotificationsMutation,
  useCreateNotificationsMutation,
  useCreateMultipleNotificationsMutation,
} = notificationAPI;
