import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET Events
    getEvents: build.query({
      query: () => ({
        url: `/events`,
        method: "GET",
      }),
    }),
    // GET Event Details
    getEventDetails: build.query({
      query: (id) => ({
        url: `/events/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetEventsQuery, useGetEventDetailsQuery } = authApi;
