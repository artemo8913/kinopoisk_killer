import { TicketCard } from "@/widgets/ticketCard";
export default function Home() {
  return (
    <main>
      <TicketCard genre="genre" pictureUrl="../shared/assets/icons/basket.svg" title="title" value={0} />
    </main>
  );
}
