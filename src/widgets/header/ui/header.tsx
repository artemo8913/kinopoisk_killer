import Link from "next/link";
import styles from "./header.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import Image from "next/image";
import IconCart from "@/shared/assets/icons/basket.svg";

interface HeaderProps {
  additionalClassName?: string;
}

function Header({ additionalClassName }: HeaderProps) {
  return (
    <header className={createClassName(styles.Header, {}, [additionalClassName])}>
      <div className={styles.title}>
        <Link className={styles.link} href="/">
          Билетопоиск
        </Link>
      </div>
      <div className={styles.cart}>
        <Link className={styles.link} href="/cart">
          <Image alt="корзина" src={IconCart} />
        </Link>
      </div>
    </header>
  );
}
export { Header };
