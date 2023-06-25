import styles from "./footer.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import Link from "next/link";

interface FooterProps {
  additionalClassName?: string;
}

function Footer({ additionalClassName }: FooterProps) {
  return (
    <footer className={createClassName(styles.Footer, {}, [additionalClassName])}>
      <div className={styles.answers}>
        <Link className={styles.link} href={"/answers"}>
          Вопросы-ответы
        </Link>
      </div>
      <div className={styles.about}>
        <Link className={styles.link} href={"/about"}>
          О нас
        </Link>
      </div>
    </footer>
  );
}
export { Footer };
