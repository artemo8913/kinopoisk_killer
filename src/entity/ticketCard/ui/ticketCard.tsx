"use client";
import { createClassName } from "@/shared/lib/createClassName";
import { Counter } from "@/entity/counter";
import styles from "./ticketCard.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { Card } from "@/shared/ui/card";
import IconImage from "@/shared/assets/icons/photo.svg";
import { Button } from "@/shared/ui/button";
import IconRemove from "@/shared/assets/icons/close.svg";
import { AppButtonTheme } from "@/shared/ui/button/button";
import { useRouter } from "next/navigation";

interface TicketCardProps {
  additionalClass?: string;
  isInCart?: boolean;
  onClose?: () => void;
  id: string;
  posterUrl: string;
  title: string;
  genre: string;
}

function TicketCard(props: TicketCardProps) {
  const { additionalClass, id, posterUrl, onClose, title, genre, isInCart = false } = props;
  const router = useRouter();

  return (
    <Card additionalClassName={createClassName(styles.TicketCard, {}, [additionalClass])}>
      <Suspense fallback={<Image src={IconImage} alt={title} />}>
        <Image
          onClick={() => router.push(`/film/${id}`)}
          style={{ objectFit: "cover" }}
          className={styles.image_conteiner}
          width={100}
          height={120}
          alt={title}
          src={posterUrl}
        />
      </Suspense>
      <div onClick={() => router.push(`/film/${id}`)} className={styles.description_conteiner}>
        <div className={styles.title}>{title}</div>
        <div className={styles.genre}>{genre}</div>
      </div>
      <Counter id={id} />
      {isInCart && (
        <Button handleClick={onClose} theme={AppButtonTheme.CLEAR}>
          <Image src={IconRemove} width={20} alt="удалить" />
        </Button>
      )}
    </Card>
  );
}
export { TicketCard };
