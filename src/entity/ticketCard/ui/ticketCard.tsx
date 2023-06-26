"use client";
import { createClassName } from "@/shared/lib/createClassName";
import { Counter } from "@/entity/counter";
import styles from "./ticketCard.module.css";
import Image from "next/image";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import IconRemove from "@/shared/assets/icons/close.svg";
import { AppButtonTheme } from "@/shared/ui/button/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ModalFullWindow } from "@/shared/modalFullWindow/modalFullWindow";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, selectProductAmount } from "@/features/cart";
import { StateSchema } from "@/store";

interface TicketCardProps {
  additionalClass?: string;
  isInCart?: boolean;
  id: string;
  posterUrl: string;
  title: string;
  genre: string;
}

function TicketCard(props: TicketCardProps) {
  const { additionalClass, id, posterUrl, title, genre, isInCart = false } = props;

  const value = useSelector((state: StateSchema) => selectProductAmount(state, id));

  const dispath = useDispatch();
  const decrease = () => dispath(cartSlice.actions.decrement(id));
  const increase = () => dispath(cartSlice.actions.increment(id));

  const router = useRouter();

  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const openModalWindow = () => setIsModalWindowOpen(true);
  const closeModalWindow = () => setIsModalWindowOpen(false);

  return (
    <>
      <Card additionalClassName={createClassName(styles.TicketCard, {}, [additionalClass])}>
        <Image
          onClick={() => router.push(`/film/${id}`)}
          style={{ objectFit: "cover" }}
          className={styles.image_conteiner}
          width={100}
          height={120}
          alt={title}
          src={posterUrl}
        />
        <div onClick={() => router.push(`/film/${id}`)} className={styles.description_conteiner}>
          <div className={styles.title}>{title}</div>
          <div className={styles.genre}>{genre}</div>
        </div>
        <Counter value={value} decrease={decrease} increase={increase} />
        {isInCart && (
          <Button handleClick={openModalWindow} theme={AppButtonTheme.CLEAR}>
            <Image src={IconRemove} width={20} alt="удалить" />
          </Button>
        )}
      </Card>
      <ModalFullWindow isOpen={isModalWindowOpen} onClose={closeModalWindow}>
        Ghbdtn
      </ModalFullWindow>
    </>
  );
}
export { TicketCard };
