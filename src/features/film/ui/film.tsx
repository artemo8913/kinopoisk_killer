"use client";
import { Card } from "@/shared/ui/card";
import style from "./film.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import Image from "next/image";
import { Counter } from "@/entity/counter";
import { useGetOneFilmQuery } from "../model/api";

interface FilmProps {
  additionalClassName?: string;
  id: string;
}

function Film(props: FilmProps) {
  const { additionalClassName, id } = props;
  const { data, isLoading, error } = useGetOneFilmQuery(id);

  if (isLoading) {
    return <div>...</div>;
  }
  if (!data || error) {
    return <span>Error</span>;
  }
  const { title, posterUrl, genre, releaseYear, rating, director, description } = data;
  return (
    <Card additionalClassName={createClassName(style.Film, {}, [additionalClassName])}>
      <Image alt={title} src={posterUrl} width={400} height={500} style={{ objectFit: "cover" }} />
      <div className={style.info_conteiner}>
        <div className={style.info_for_sell}>
          <span className={style.title}>{title}</span>
          <Counter value={id} />
        </div>
        <div className={style.basic_info}>
          <div>
            <span className={style.text_bold}>Жанр: </span>
            <span className={style.text_l}>{genre}</span>
          </div>
          <div>
            <span className={style.text_bold}>Год выпуска: </span>
            <span className={style.text_l}>{releaseYear}</span>
          </div>
          <div>
            <span className={style.text_bold}>Рейтинг: </span>
            <span className={style.text_l}>{rating}</span>
          </div>
          <div>
            <span className={style.text_bold}>Режиссер: </span>
            <span className={style.text_l}>{director}</span>
          </div>
        </div>
        <div>
          <p className={style.info_description_title}>Описание</p>
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}
export { Film };
