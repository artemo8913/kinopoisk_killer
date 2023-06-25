import { Film } from "@/entity/film";
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
  const filmInfo = fetchData(URL_API_MOVIE(filmId));
  const mock = {
    title: "Властелин колец: Братство Кольца",
    posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
    releaseYear: 2001,
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
    genre: "fantasy",
    id: "2aT976Fs_Bek0e2ZR_05V",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
  };
  const reviews = mock.reviewIds.map((reviewId) => <Review key={reviewId} reviewId={reviewId} />);
  return (
    <article>
      <Film {...mock} />
      {reviews}
    </article>
  );
}
export default FilmPage;
