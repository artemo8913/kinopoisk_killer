import { Input } from "@/shared/ui/input";
import { Counter } from "@/entity/counter/ui/counter";
export default function Home() {
  return (
    <main>
      Hello
      <Input />
      <Input label="asd" />
      <Counter value={0} />
    </main>
  );
}
