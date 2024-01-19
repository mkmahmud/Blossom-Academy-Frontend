import { baseApi } from "./api/baseApi";
import userDetailsReducer from "./features/users/userSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  userDetails: userDetailsReducer,
};
