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
      <Link className={styles.title} href="/">
        <h1>Билетопоиск</h1>
      </Link>
      <Link className={styles.cart} href="/cart">
        <Image alt="корзина" src={IconCart} />
      </Link>
    </header>
  );
}
export { Header };
