import { createClassName } from "@/shared/lib/createClassName";
import styles from "./button.module.css";
import { PropsWithChildren } from "react";

enum AppButtonTheme {
  DEFAULT = "",
  EMPTY = "empty",
}

interface ButtonProps {
  additionalClass?: string;
  isDisabled?: boolean;
  theme?: AppButtonTheme;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const { additionalClass, children, theme = AppButtonTheme.DEFAULT, isDisabled = false, ...otherProps } = props;

  const styleMods = {
    [styles.disabled]: isDisabled,
    [styles[theme]]: Boolean(theme),
  };

  return (
    <button {...otherProps} className={createClassName(styles.Button, styleMods, [additionalClass])}>
      {children}
    </button>
  );
}

function ComfirmButton(props: PropsWithChildren<ButtonProps>) {
  const { children, ...otherProps } = props;
  return (
    <Button {...otherProps} additionalClass={styles.comfirm}>
      {children}
    </Button>
  );
}

export { Button, ComfirmButton, AppButtonTheme };
