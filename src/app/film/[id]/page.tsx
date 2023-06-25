import { Film } from "@/features/film";
import { Review } from "@/entity/review";
import { URL_API_MOVIE } from "@/shared/const/url";
import { fetchData } from "@/shared/lib/fetchData";
interface FilmPageParams {
  id: string;
}

interface FilmPageProps {
  additionalClassName?: string;
  params: FilmPageParams;
}

async function FilmPage({ additionalClassName, params }: FilmPageProps) {
  const filmId = params.id;
  // const reviews = mock.reviewIds.map((reviewId) => <Review key={reviewId} reviewId={reviewId} />);
  return (
    <article>
      <Film id={filmId} />
      {/* {reviews} */}
    </article>
  );
}
export default FilmPage;
