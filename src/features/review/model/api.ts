import { BASE_URL } from "@/shared/const/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ReviewSchema } from "./schema";

const reviewsApi = createApi({
  reducerPath: "reviewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllReviews: builder.query<ReviewSchema[], null>({ query: () => "reviews" }),
    getReviewsForFilm: builder.query<ReviewSchema[], string>({ query: (movieId) => `reviews?movieId=${movieId}` }),
  }),
});
export { reviewsApi };
export const { useGetAllReviewsQuery, useGetReviewsForFilmQuery } = reviewsApi;
