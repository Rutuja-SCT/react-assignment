import { FetchBaseQueryMeta } from "@reduxjs/toolkit/query";
import { apiSlice } from "./apiSlice";
// import { LoginRequest } from "../../components/Login/Login";
import { API_URLS, HTTP_METHOD } from "../../constants/apiConstants";
import { Strings } from "../../constants/constants";

export const extendedDashboardApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTotalCustomers: build.query({
      query: () => ({
        url: API_URLS.GET_TOTAL_CUSTOMERS_DATA,
        method: HTTP_METHOD.GET,
      }),
      providesTags: (result, error, arg) => [{ type: "customers" }],
      keepUnusedDataFor: 0,
    }),

    // // endpoint for adding a club member
    // addClubMember: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: API_URLS.ADD_EDIT_CLUB_MEMBERS.replace("{clubId}", data.clubId),
    //       method: HTTP_METHOD.POST,
    //       body: data.newClubMemberData,
    //     };
    //   },
    //   invalidatesTags: (result, error, arg) => [{ type: "clubMember" }],
    //   transformErrorResponse: (error: any) => {
    //     let data = {};
    //     if (error?.error === "TypeError: Failed to fetch") {
    //       data = {
    //         status: error?.status,
    //         errorMessage: Strings.NETWORK_ERROR,
    //       };
    //     } else if (error?.data?.errorMessage === "USER_ALREADY_EXIST") {
    //       data = {
    //         status: error?.data?.errorCode,
    //         errorMessage: Strings.USER_ALREADY_EXIST,
    //       };
    //     } else {
    //       data = {
    //         status: error?.status,
    //         errorMessage: Strings.DEFAULT_ERROR,
    //       };
    //     }
    //     return data;
    //   },
    // }),

    // // endpoint for editing club member
    // editClubMember: build.mutation({
    //   query: (data) => {
    //     return {
    //       url: API_URLS.ADD_EDIT_CLUB_MEMBERS.replace("{clubId}", data.clubId),
    //       method: HTTP_METHOD.PATCH,
    //       body: data.newClubMemberData,
    //     };
    //   },
    //   invalidatesTags: (result, error, arg) => [{ type: "clubMember" }],
    //   transformErrorResponse: (error: any) => {
    //     let data = {};
    //     if (error?.error === "TypeError: Failed to fetch") {
    //       data = {
    //         status: error?.status,
    //         errorMessage: Strings.NETWORK_ERROR,
    //       };
    //     } else {
    //       data = {
    //         status: error?.status,
    //         errorMessage: Strings.DEFAULT_ERROR,
    //       };
    //     }
    //     return data;
    //   },
    // }),

    // // endpoint for deleting club member
    // deleteClubMember: build.mutation({
    //   query: ({ clubId, userId }) => ({
    //     url: API_URLS.DELETE_CLUB_MEMBER.replace("{clubId}", clubId).replace(
    //       "{userId}",
    //       userId,
    //     ),
    //     method: HTTP_METHOD.DELETE,
    //   }),
    //   invalidatesTags: (result, error, arg) => [{ type: "clubMember" }],
    // }),
    // // endpoint for serching club member
    // searchClubMember: build.query({
    //   query: ({ clubId, searchQuery }) => ({
    //     url: API_URLS.SEARCH_CLUB_MEMBER.replace("{clubId}", clubId).replace(
    //       "{searchedText}",
    //       searchQuery,
    //     ),
    //     method: HTTP_METHOD.GET,
    //   }),
    //   providesTags: (result, error, arg) => [{ type: "clubMember" }],
    // }),
  }),
});

export const {
  useGetTotalCustomersQuery,
} = extendedDashboardApiSlice;
