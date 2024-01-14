import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Init Payment request
    initPayment: build.mutation({
      query: (data) => ({
        url: `/payments/init`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["payments"],
    }),
  }),
});

export const { useInitPaymentMutation } = authApi;
