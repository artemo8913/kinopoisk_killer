"use client";
import { FilmSchema, useGetAllFilmsQuery } from "@/features/film";
import { FilterPanel } from "@/widgets/filterPanel";
import { TicketCardList } from "@/widgets/ticketCardList";
import styles from "./styles/mainPage.module.css";
import { useState } from "react";
import { useGetAllCinemasQuery } from "@/features/cinema";

function filmFilter(data: FilmSchema[], filter: { name: string; genre: string }): FilmSchema[] {
  return data.filter(
    (film) => film.title.toLocaleLowerCase().match(filter.name.toLocaleLowerCase()) && film.genre.match(filter.genre)
  );
}

export default function Home() {
  const [filterFilds, setFilterFilds] = useState({
    name: "",
    genre: "",
    cinema: "",
  });
  const genres = ["fantasy", "horror", "action", "comedy"];
  const [cinemaId, setCinemaId] = useState("");
  const { data, isLoading, error } = useGetAllFilmsQuery(cinemaId);
  const { data: cinemas, isLoading: cinemasIsLoading, error: cinemasError } = useGetAllCinemasQuery(null);

  const filterHandler = (type: string) => (value: string) => {
    setFilterFilds((prev) => ({ ...prev, [type]: value }));
    if (type === "cinema") {
      const cinemaId = cinemas?.find((cinema) => cinema.name === value)?.id || "";
      setCinemaId(cinemaId);
    }
  };

  if (isLoading || cinemasIsLoading) {
    return <div>...</div>;
  }
  if (!data || !cinemas || error || cinemasError) {
    return <span>Error</span>;
  }
  const cinemasNames = cinemas.map((data) => data.name);
  const filteredData = filmFilter(data, filterFilds);
  return (
    <main className={styles.main}>
      <FilterPanel
        genres={genres}
        cinemas={cinemasNames}
        filterFilds={filterFilds}
        filterHandler={filterHandler}
        additionalClassName={styles.filterPanel}
      />
      <TicketCardList additionalClassName={styles.ticketList} filmsList={filteredData} />
    </main>
  );
}
