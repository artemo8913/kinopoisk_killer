export const BASE_URL = "http://localhost:3001/api";
export const URL_API_ALL_CINEMAS = () => BASE_URL + "/cinemas";
export const URL_API_ALL_MOVIES = () => BASE_URL + "/movies";
export const URL_API_FILMS_IN_CINEMA = (id: string) => BASE_URL + `/movies?cinemaId={${id}}`;
export const URL_API_MOVIE = (id: string) => BASE_URL + `/movie?movieId={${id}}`;
export const URL_API_ALL_REVIEWS = () => BASE_URL + "/reviews";
export const URL_API_MOVIE_REVIEWS = (id: string) => BASE_URL + `/reviews?movieId={${id}}`;
