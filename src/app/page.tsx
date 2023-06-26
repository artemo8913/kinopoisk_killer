"use client";
import { useGetAllFilmsQuery } from "@/features/film";
import { FilterPanel } from "@/widgets/filterPanel";
import { TicketCardList } from "@/widgets/ticketCardList";
import styles from "./styles/mainPage.module.css";
import { useState } from "react";
import { useGetAllCinemasQuery } from "@/features/cinema";

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
      const cinemaId = cinemas?.find((cinema) => cinema.name === filterFilds.cinema)?.id || "";
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

  return (
    <main className={styles.main}>
      <FilterPanel
        genres={genres}
        cinemas={cinemasNames}
        filterFilds={filterFilds}
        filterHandler={filterHandler}
        additionalClass={styles.filterPanel}
      />
      <TicketCardList filmsList={data} />
    </main>
  );
}
