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
    // Validate payment
    validateAndUpdate: build.mutation({
      query: (data) => ({
        url: `/payments/validate-and-update`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["payments"],
    }),
    // Get All orders
    getAllOrders: build.query({
      query: () => ({
        url: `/payments/get-all-orders`,
        method: "GET",
      }),
      providesTags: ["payments"],
    }),
  }),
});

export const {
  useInitPaymentMutation,
  useValidateAndUpdateMutation,
  useGetAllOrdersQuery,
} = authApi;
