import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../helpers/axiosBaseQuery";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://blossom-backend.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "user",
    "courses",
    "batch",
    "payments",
    "notification",
    "messenger",
  ],
});
