"use client";
import { Card } from "@/shared/ui/card";
import styles from "./review.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import { ReviewSchema } from "../model/schema";
import Image from "next/image";
import IconAvatar from "@/shared/assets/icons/avatar.svg";
import { useState } from "react";

interface ReviewProps extends ReviewSchema {
  additionalClassName?: string;
}

export function Review(props: ReviewProps) {
  const { id, name, rating, text, posterUrl, additionalClassName } = props;
  const [imageLoadError, setError] = useState(false);

  return (
    <Card additionalClassName={createClassName(styles.Review, {}, [additionalClassName])}>
      <Image
        width={100}
        height={100}
        key={id}
        alt="автор"
        // src={imageLoadError ? IconAvatar : posterUrl}
        src={IconAvatar}
        onError={() => {
          setError(true);
        }}
      />
      <div className={styles.info_conteinter}>
        <div className={styles.name_conteinter}>
          <div className={styles.name}>{name}</div>
          <div>Оценка: </div>
          <div className={styles.bold}>{rating}</div>
        </div>
        <div>{text}</div>
      </div>
    </Card>
  );
}
