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
  }),
});

export const { useGetNotificationsQuery, useUpdateNotificationsMutation } =
  notificationAPI;
