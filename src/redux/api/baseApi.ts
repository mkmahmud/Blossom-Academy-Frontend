import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../helpers/axiosBaseQuery";

// const LiveApiURL = "http://localhost:5000";
const LiveApiURL = "https://blossom-backend.vercel.app";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: `${LiveApiURL}/api/v1` }),
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
