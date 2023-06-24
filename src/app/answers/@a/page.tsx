import { createClassName } from "@/shared/lib/createClassName";

interface FilmPageParams {
  id: number;
}

interface FilmPageProps {
  additionalClassName?: string;
  params: FilmPageParams;
}

export default function A({ additionalClassName, params: param }: FilmPageProps) {
  return <div className={createClassName("", {}, [additionalClassName])}>СТРАНИЦА A</div>;
}
