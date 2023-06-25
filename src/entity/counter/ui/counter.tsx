import styles from "./counter.module.css";
import Image from "next/image";
import IconPlus from "@/shared/assets/icons/plus.svg";
import IconMinus from "@/shared/assets/icons/minus.svg";
import { CounterButton } from "./counterButton";
import { useDispatch, useSelector } from "react-redux";
import { StateSchema } from "@/store";
import { cartSlice, selectCartModule, selectProductAmount } from "@/features/cart";

interface CounterProps {
  id: string;
}

function Counter(props: CounterProps) {
  const { id } = props;

  const value = useSelector((state: StateSchema) => selectProductAmount(state, id));

  const dispath = useDispatch();
  const decrease = () => dispath(cartSlice.actions.decrement(id));
  const increase = () => dispath(cartSlice.actions.increment(id));

  return (
    <div className={styles.Counter}>
      <CounterButton handleClick={decrease} isDisabled={!Boolean(value)}>
        <Image alt="-1" width={12} height={12} src={IconMinus}></Image>
      </CounterButton>
      <span className={styles.value}>{value}</span>
      <CounterButton handleClick={increase}>
        <Image alt="+1" width={12} height={12} src={IconPlus}></Image>
      </CounterButton>
    </div>
  );
}
export { Counter };
