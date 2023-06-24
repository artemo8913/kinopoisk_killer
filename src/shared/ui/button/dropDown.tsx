"use client";
import styles from "./button.module.css";
import { AppButtonTheme, Button } from "./button";
import Image from "next/image";
import IconArrow from "../../assets/icons/arrow.svg";
import { PropsWithChildren } from "react";

interface DropDownButtonProps extends PropsWithChildren<React.ComponentProps<typeof Button>> {
  isOpen: boolean;
  handleClick: () => void;
}

function DropDownButton(props: DropDownButtonProps) {
  const { isOpen, handleClick, ...otherProps } = props;
  const styleMods = isOpen ? styles.drop_down_open : "";
  return (
    <Button handleClick={handleClick} theme={AppButtonTheme.CLEAR} additionalClass={styles.drop_down} {...otherProps}>
      <Image alt="скрыть" src={IconArrow} className={styleMods} />
    </Button>
  );
}
export { DropDownButton };
