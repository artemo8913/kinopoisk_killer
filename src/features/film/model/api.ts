import { BASE_URL } from "@/shared/const/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilmSchema } from "./type";

const filmApi = createApi({
  reducerPath: "filmApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllFilms: builder.query<FilmSchema, string>({ query: () => "movies" }),
    getOneFilm: builder.query<FilmSchema, string>({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});
export { filmApi };
export const { useGetAllFilmsQuery, useGetOneFilmQuery } = filmApi;
