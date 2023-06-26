import styles from "./counter.module.css";
import Image from "next/image";
import IconPlus from "@/shared/assets/icons/plus.svg";
import IconMinus from "@/shared/assets/icons/minus.svg";
import { CounterButton } from "./counterButton";
import { memo } from "react";

interface CounterProps {
  value: number;
  decrease: () => void;
  increase: () => void;
}

// eslint-disable-next-line react/display-name
const Counter = memo((props: CounterProps) => {
  const { value, decrease, increase } = props;

  const isDisabledDecrease = value <= 0;
  const isDisabledIncrease = value >= 30;

  return (
    <div className={styles.Counter}>
      <CounterButton handleClick={isDisabledDecrease ? undefined : decrease} isDisabled={isDisabledDecrease}>
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
