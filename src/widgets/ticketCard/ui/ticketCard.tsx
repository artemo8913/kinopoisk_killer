import { createClassName } from "@/shared/lib/createClassName";
import styles from "./ticketCard.module.css";
import { PropsWithChildren } from "react";
interface TicketCardProps {
  additionalClass?: string;
}

function TicketCard(props: PropsWithChildren<TicketCardProps>) {
  const { additionalClass } = props;

  return <div className={createClassName(styles.Button, {}, [additionalClass])}></div>;
}

export { TicketCard };
