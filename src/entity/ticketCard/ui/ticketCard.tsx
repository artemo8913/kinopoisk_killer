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
import { useCallback, useMemo, useState } from "react";
import { ModalFullWindow } from "@/shared/modalFullWindow/modalFullWindow";
import { cartSlice } from "@/features/cart";
import { useDispatch } from "react-redux";

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
  const router = useRouter();
  const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);
  const dispatch = useDispatch();
  const openModalWindow = useCallback(() => setIsModalWindowOpen(true), []);
  const closeModalWindow = useCallback(() => setIsModalWindowOpen(false), []);
  const remove = useCallback(() => dispatch(cartSlice.actions.remove(id)), [id, dispatch]);
  const removeAndClose = useCallback(() => {
    remove();
    closeModalWindow();
  }, [closeModalWindow, remove]);

  const onClickRoute = useCallback(() => router.push(`/film/${id}`), [id, router]);
  const imgStyle: { objectFit: "cover" } = useMemo(() => ({ objectFit: "cover" }), []);
  return (
    <>
      <Card additionalClassName={createClassName(styles.TicketCard, {}, [additionalClass])}>
        <Image
          onClick={onClickRoute}
          style={imgStyle}
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
        <Counter openModalWindow={openModalWindow} id={id} />
        {isInCart && (
          <Button handleClick={openModalWindow} theme={AppButtonTheme.CLEAR}>
            <Image src={IconRemove} width={20} alt="удалить" />
          </Button>
        )}
      </Card>
      <ModalFullWindow isOpen={isModalWindowOpen} onClose={closeModalWindow}>
        <>
          <div className={styles.modal_title_conteiner}>
            <div className={styles.modal_title}>Удаление билета</div>
            <Button handleClick={closeModalWindow} theme={AppButtonTheme.CLEAR}>
              <Image src={IconRemove} width={20} alt="удалить" />
            </Button>
          </div>
          <div className={styles.modal_questions}>Вы уверены, что хотите удалить билет?</div>
          <div className={styles.modal_comfirm_buttons}>
            <Button isComfirm handleClick={removeAndClose}>
              Да
            </Button>
            <Button isComfirm handleClick={closeModalWindow} theme={AppButtonTheme.EMPTY}>
              Нет
            </Button>
          </div>
        </>
      </ModalFullWindow>
    </>
  );
}
export { TicketCard };
