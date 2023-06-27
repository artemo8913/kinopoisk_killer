"use client";
import styles from "./counter.module.css";
import Image from "next/image";
import IconPlus from "@/shared/assets/icons/plus.svg";
import IconMinus from "@/shared/assets/icons/minus.svg";
import { CounterButton } from "./counterButton";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, selectProductAmount } from "@/features/cart";
import { StateSchema } from "@/store";

interface CounterProps {
  id: string;
  openModalWindow?: () => void;
}

// eslint-disable-next-line react/display-name
const Counter = memo((props: CounterProps) => {
  const { id, openModalWindow } = props;
  const value = useSelector((state: StateSchema) => selectProductAmount(state, id));

  const dispath = useDispatch();
  const decrease = useCallback(() => dispath(cartSlice.actions.decrement(id)), [id, dispath]);
  const increase = useCallback(() => dispath(cartSlice.actions.increment(id)), [id, dispath]);
  const isDisabledDecrease = value <= 0;
  const isDisabledIncrease = value >= 30;

  return (
    <div className={styles.Counter}>
      <CounterButton
        handleClick={
          !isDisabledDecrease ? (value > 1 ? decrease : openModalWindow ? openModalWindow : undefined) : undefined
        }
        isDisabled={isDisabledDecrease}
      >
        <Image alt="-1" width={12} height={12} src={IconMinus}></Image>
      </CounterButton>
      <span className={styles.value}>{value}</span>
      <CounterButton handleClick={isDisabledIncrease ? undefined : increase} isDisabled={isDisabledIncrease}>
        <Image alt="+1" width={12} height={12} src={IconPlus}></Image>
      </CounterButton>
    </div>
  );
});
export { Counter };
