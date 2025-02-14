import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URLS } from "../../constants/apiConstants";
import { RootState } from "../store";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URLS.BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      const authToken = getState() ;
      const token = authToken.user?.userData?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      if (endpoint === "uploadFile" || endpoint === "saveFileAsUrl") {
        // Remove Content-Type header to let the browser set it automatically with the correct boundary for FormData
        headers.delete("Content-Type");
      } else {
        // For other requests, set Content-Type to application/json
        headers.set("Content-Type", "application/json");
      }
      headers.set("Accept", "application/json");
      return headers;
    },
  }),

  tagTypes: ["user, customers"],
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
