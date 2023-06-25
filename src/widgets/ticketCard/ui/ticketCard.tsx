import { createClassName } from "@/shared/lib/createClassName";
import { Counter } from "@/entity/counter";
import styles from "./ticketCard.module.css";
import Image from "next/image";
import { useState } from "react";

interface TicketCardProps {
  additionalClass?: string;
  pictureUrl: string;
  value: number;
  title: string;
  genre: string;
}

function TicketCard(props: TicketCardProps) {
  const { additionalClass, pictureUrl, title, genre } = props;

  const [value, setValue] = useState(0);

  return (
    <div className={createClassName(styles.TicketCard, {}, [additionalClass])}>
      <Image className={styles.image_conteiner} width={100} height={120} alt={title} src={pictureUrl} />
      <div className={styles.description_conteiner}>
        <div>{title}</div>
        <div>{genre}</div>
      </div>
      <Counter value={value} handleValue={setValue} />
    </div>
  );
}

export { TicketCard };
