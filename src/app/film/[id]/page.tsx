"use client";
import { Film } from "@/features/film";
import { Review, useGetReviewsForFilmQuery } from "@/features/review";
import styles from "./styles/filmPage.module.css";

interface FilmPageParams {
  id: string;
}

interface FilmPageProps {
  additionalClassName?: string;
  params: FilmPageParams;
}

function FilmPage({ additionalClassName, params }: FilmPageProps) {
  const filmId = params.id;
  const { data, isLoading, error } = useGetReviewsForFilmQuery(filmId);
  if (isLoading) {
    return <div>...</div>;
  }
  if (!data || error) {
    return <span>Error</span>;
  }
  const reviews = data.map((review) => <Review key={review.id} {...review} />);
  return (
    <article className={styles.FilmPage}>
      <Film id={filmId} />
      {reviews}
    </article>
  );
}
export default FilmPage;
