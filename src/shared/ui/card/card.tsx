import css from "./card.module.css";
import { createClassName } from "@/shared/lib/createClassName";

interface CardProps {
  additionalClassName?: string;
}

export function Card({ additionalClassName }: CardProps) {
  return <div className={createClassName(css.Card, {}, [additionalClassName])}></div>;
}
