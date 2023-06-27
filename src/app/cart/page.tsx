"use client";
import styles from "./styles/cart.module.css";
import { Card } from "@/shared/ui/card";
import { TicketCardList } from "@/widgets/ticketCardList";
import { useGetAllFilmsQuery } from "@/features/film";
import { useSelector } from "react-redux";
import { selectAllProductAmount, selectCartModule } from "@/features/cart";

function TotalAmount() {
  const amount = useSelector(selectAllProductAmount);

  return (
    <Card additionalClassName={styles.total_card}>
      <span>Итого билетов:</span>
      <span>{amount}</span>
    </Card>
  );
}

export default function Cart() {
  const { data, isLoading, error } = useGetAllFilmsQuery("");
  const cart = useSelector(selectCartModule);
  if (isLoading) {
    return <div>...</div>;
  }
  if (!data || error) {
    return <span>Error</span>;
  }
  const filmsInCart = data.filter((film) => film.id in cart);
  return (
    <div className={styles.Cart}>
      <TicketCardList isInCart filmsList={filmsInCart} />
      <TotalAmount />
    </div>
  );
}
