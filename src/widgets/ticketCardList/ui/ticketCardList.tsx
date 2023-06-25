import { FilmSchema } from "@/features/film";
import css from "./ticketCardList.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import { TicketCard } from "@/entity/ticketCard";

interface TicketCardListProps {
  additionalClassName?: string;
  isInCart?: boolean;
  filmsList: Array<FilmSchema>;
}

export function TicketCardList({ additionalClassName, isInCart, filmsList }: TicketCardListProps) {
  const list = filmsList.map((film) => <TicketCard isInCart={isInCart} key={film.id} {...film} />);
  return <div className={createClassName(css.TicketCardList, {}, [additionalClassName])}>{list}</div>;
}
