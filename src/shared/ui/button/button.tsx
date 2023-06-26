"use client";
import { createClassName } from "@/shared/lib/createClassName";
import styles from "./button.module.css";
import { PropsWithChildren } from "react";

enum AppButtonTheme {
  DEFAULT = "",
  EMPTY = "empty",
  CLEAR = "clear",
}

interface ButtonProps {
  additionalClass?: string;
  isDisabled?: boolean;
  theme?: AppButtonTheme;
  isComfirm?: boolean;
  handleClick?: () => void;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  const {
    additionalClass,
    handleClick,
    children,
    theme = AppButtonTheme.DEFAULT,
    isComfirm = false,
    isDisabled = false,
    ...otherProps
  } = props;

  const styleMods = {
    [styles.disabled]: isDisabled,
    [styles.comfirm]: isComfirm,
    [styles[theme]]: Boolean(theme),
  };

  return (
    <button
      onClick={handleClick}
      {...otherProps}
      className={createClassName(styles.Button, styleMods, [additionalClass])}
    >
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
