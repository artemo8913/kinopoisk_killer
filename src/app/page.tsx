"use client";
import { QuestionCard } from "@/entity/question";
import { Input } from "@/shared/ui/input";
import { TicketCard } from "@/widgets/ticketCard";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <main>
      MAIN PAGE
      <TicketCard genre="genre" pictureUrl="../shared/assets/icons/basket.svg" title="title" value={0} />
      <QuestionCard answer="asasdsad" question="a123asfd" />
      <Input value={value} onChange={setValue} />
    </main>
  );
}
