"use client";
import { TicketCard } from "@/entity/ticketCard";
import { useGetAllFilmsQuery } from "@/features/film";
import { TicketCardList } from "@/widgets/ticketCardList";

export default function Home() {
  const { data, isLoading, error } = useGetAllFilmsQuery(null);
  if (isLoading) {
    return <div>...</div>;
  }
  if (!data || error) {
    return <span>Error</span>;
  }
  return (
    <main>
      <TicketCardList filmsList={data} />
    </main>
  );
}
