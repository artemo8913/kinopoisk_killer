import css from "./card.module.css";
import { createClassName } from "@/shared/lib/createClassName";

interface CardProps {
  additionalClassName?: string;
}

export function Card({ additionalClassName, children }: React.PropsWithChildren<CardProps>) {
  return <div className={createClassName(css.Card, {}, [additionalClassName])}>{children}</div>;
}
