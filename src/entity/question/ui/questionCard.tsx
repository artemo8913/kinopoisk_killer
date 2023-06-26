"use client";
import { createClassName } from "@/shared/lib/createClassName";
import styles from "./questionCard.module.css";
import { DropDownButton } from "@/shared/ui/button";
import { useState } from "react";
import { Card } from "@/shared/ui/card";

interface QuestionCardProps {
  additionalClass?: string;
  question: string;
  answer: string;
}

function QuestionCard(props: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { additionalClass, question, answer } = props;

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <Card additionalClassName={createClassName(styles.QuestionCard, {}, [additionalClass])}>
      <div onClick={handleClick} className={styles.text_conteiner}>
        <p className={styles.question}>{question}</p>
        {Boolean(isOpen) && <p className={styles.answer}>{answer}</p>}
      </div>
      <DropDownButton isOpen={isOpen} />
    </Card>
  );
}
export { QuestionCard };
