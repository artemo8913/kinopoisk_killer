import styles from "./counter.module.css";
import Image from "next/image";
import IconPlus from "@/shared/assets/icons/plus.svg";
import IconMinus from "@/shared/assets/icons/minus.svg";
import { CounterButton } from "./counterButton";
import { Dispatch, SetStateAction } from "react";

interface CounterProps {
  value: number;
  handleValue: Dispatch<SetStateAction<number>>;
}

function Counter(props: CounterProps) {
  const { value, handleValue } = props;
  function increaseValue() {
    handleValue((prevValue) => prevValue + 1);
  }
  function decreaseValue() {
    handleValue((prevValue) => (prevValue <= 0 ? 0 : prevValue - 1));
  }

  return (
    <div className={styles.Counter}>
      <CounterButton handleClick={decreaseValue} isDisabled={!Boolean(value)}>
        <Image alt="-1" width={12} height={12} src={IconMinus}></Image>
      </CounterButton>
      <span className={styles.value}>{value}</span>
      <CounterButton handleClick={increaseValue}>
        <Image alt="-1" width={12} height={12} src={IconPlus}></Image>
      </CounterButton>
    </div>
  );
}
export { Counter };
