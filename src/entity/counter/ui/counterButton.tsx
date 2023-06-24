import styles from "./counter.module.css";
import { Button } from "@/shared/ui/button";
import { PropsWithChildren } from "react";

function CounterButton(props: PropsWithChildren<React.ComponentProps<typeof Button>>) {
  const { children, ...otherProps } = props;
  return (
    <Button {...otherProps} additionalClass={styles.counter_btn}>
      {children}
    </Button>
  );
}
export { CounterButton };
