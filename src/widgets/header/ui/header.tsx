"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import Image from "next/image";
import IconCart from "@/shared/assets/icons/basket.svg";
import { useSelector } from "react-redux";
import { selectAllProductAmount } from "@/features/cart";
import { memo } from "react";

interface HeaderProps {
  additionalClassName?: string;
}
const CartLink = () => {
  const amount = useSelector(selectAllProductAmount);
  return (
    <div className={styles.cart}>
      <Link className={styles.link} href="/cart">
        {Boolean(amount) && <div className={styles.cart_amount}>{amount}</div>}
        <Image alt="корзина" src={IconCart} />
      </Link>
    </div>
  );
};
const MemoCartLink = memo(CartLink);

function Header({ additionalClassName }: HeaderProps) {
  return (
    <header className={createClassName(styles.Header, {}, [additionalClassName])}>
      <div className={styles.title}>
        <Link className={styles.link} href="/">
          Билетопоиск
        </Link>
      </div>
      <MemoCartLink />
    </header>
  );
}
export { Header };
