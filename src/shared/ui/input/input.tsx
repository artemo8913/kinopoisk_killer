"use client";
import { createClassName } from "@/shared/lib/createClassName";
import styles from "./input.module.css";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  additionalClass?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

function Input(props: InputProps) {
  const { additionalClass, value, onChange, label, ...otherProps } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange?.(event.target.value);
    }
  };

  return (
    <label className={createClassName("input_layout", {}, [additionalClass])}>
      {Boolean(label) ? <span className={styles.label}>{label}</span> : null}
      <input
        type="text"
        placeholder="asd"
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        className={styles.Input}
      />
    </label>
  );
}
export { Input };
