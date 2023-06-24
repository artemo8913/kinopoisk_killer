import { createClassName } from "@/shared/lib/createClassName";
import { ReactNode } from "react";

interface FilmPageProps {
  additionalClassName?: string;
  a: ReactNode;
  b: ReactNode;
  c: ReactNode;
}

export default function Layout({ additionalClassName, a, b, c }: FilmPageProps) {
  return (
    <div className={createClassName("", {}, [additionalClassName])}>
      {b} {a} {c}
    </div>
  );
}
