import { createClassName } from "@/shared/lib/createClassName";
import styles from "./questionCard.module.css";
import { DropDownButton } from "@/shared/ui/button";
import { useState } from "react";

interface QuestionCardProps {
  additionalClass?: string;
}

function QuestionCard(props: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { additionalClass } = props;
  return (
    <div className={createClassName(styles.QuestionCard, {}, [additionalClass])}>
      <div></div>
      <DropDownButton isOpen={isOpen} clickHandler={() => console.log(1)} />
    </div>
  );
}
export { QuestionCard };
