import { BASE_URL } from "@/shared/const/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CinemaSchema } from "./schema";

const cinemaApi = createApi({
  reducerPath: "cinemaApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllCinemas: builder.query<CinemaSchema[], null>({ query: () => "cinemas" }),
  }),
});
export { cinemaApi };
export const { useGetAllCinemasQuery } = cinemaApi;
