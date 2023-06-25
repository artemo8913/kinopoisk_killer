import { QuestionCard } from "@/entity/question";
import { TicketCard } from "@/widgets/ticketCard";

export default function Home() {
  return (
    <main>
      MAIN PAGE
      <TicketCard genre="genre" pictureUrl="../shared/assets/icons/basket.svg" title="title" value={0} />
      <QuestionCard answer="asasdsad" question="a123asfd" />
    </main>
  );
}
