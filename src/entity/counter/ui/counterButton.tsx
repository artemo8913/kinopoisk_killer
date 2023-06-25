import styles from "./counter.module.css";
import { Button } from "@/shared/ui/button";
import { PropsWithChildren } from "react";

function CounterButton(props: PropsWithChildren<React.ComponentProps<typeof Button>>) {
  const { children, handleClick, ...otherProps } = props;
  return (
    <Button {...otherProps} handleClick={handleClick} additionalClass={styles.counter_btn}>
      {children}
    </Button>
  );
}
export { CounterButton };
