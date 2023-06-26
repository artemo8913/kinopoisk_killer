"use client";
import { Card } from "@/shared/ui/card";
import styles from "./filterPanel.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import { Input } from "@/shared/ui/input";
import { Select } from "@/shared/ui/input/select";

interface FilterPanelProps {
  additionalClassName?: string;
  filterFilds: {
    name: string;
    genre: string;
    cinema: string;
  };
  cinemas: Array<string>;
  genres: Array<string>;
  filterHandler: (type: string) => (value: string) => void;
}

export function FilterPanel(props: FilterPanelProps) {
  const { additionalClassName, filterFilds, cinemas, genres, filterHandler } = props;

  return (
    <Card additionalClassName={createClassName(styles.FilterPanel, {}, [additionalClassName])}>
      <div className={styles.title}>Фильтр поиска</div>
      <Input
        label="Название"
        placeholder="Введите название"
        value={filterFilds.name}
        onChange={filterHandler("name")}
      />
      <Select placeholder="Выберите жанр" onChange={filterHandler} type="genre" label="Жанр" options={genres} />
      <Select
        placeholder="Выберите кинотеатр"
        onChange={filterHandler}
        type="cinema"
        label="Кинотеатр"
        options={cinemas}
      />
    </Card>
  );
}
