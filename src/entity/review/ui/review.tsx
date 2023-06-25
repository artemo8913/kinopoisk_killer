import { Card } from "@/shared/ui/card";
import css from "./review.module.css";
import { createClassName } from "@/shared/lib/createClassName";

interface ReviewProps {
  additionalClassName?: string;
  reviewId: string;
}

export function Review({ additionalClassName }: ReviewProps) {
  return <Card additionalClassName={createClassName(css.Review, {}, [additionalClassName])}></Card>;
}
