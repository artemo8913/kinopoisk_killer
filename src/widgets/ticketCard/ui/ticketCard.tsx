import { createClassName } from "@/shared/lib/createClassName";
import { Counter } from "@/entity/counter";
import styles from "./ticketCard.module.css";
import Image from "next/image";

interface TicketCardProps {
  additionalClass?: string;
  pictureUrl: string;
  value: number;
  title: string;
  genre: string;
}

function TicketCard(props: TicketCardProps) {
  const { additionalClass, pictureUrl, value, title, genre } = props;

  return (
    <div className={createClassName(styles.TicketCard, {}, [additionalClass])}>
      <Image className={styles.image_conteiner} width={100} height={120} alt={title} src={pictureUrl} />
      <div className={styles.description_conteiner}>
        <div>{title}</div>
        <div>{genre}</div>
      </div>
      <Counter value={0} />
    </div>
  );
}

export { TicketCard };
