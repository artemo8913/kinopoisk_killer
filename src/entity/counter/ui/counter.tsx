import styles from "./counter.module.css";
import Image from "next/image";
import IconPlus from "@/shared/assets/icons/plus.svg";
import IconMinus from "@/shared/assets/icons/minus.svg";
import { CounterButton } from "./counterButton";

interface CounterProps {
  value: number;
}

function Counter(props: CounterProps) {
  const { value } = props;
  return (
    <div className={styles.Counter}>
      <CounterButton isDisabled={!Boolean(value)}>
        <Image alt="-1" width={12} height={12} src={IconMinus}></Image>
      </CounterButton>
      <span className={styles.value}>{value}</span>
      <CounterButton>
        <Image alt="-1" width={12} height={12} src={IconPlus}></Image>
      </CounterButton>
    </div>
  );
}
export { Counter };
