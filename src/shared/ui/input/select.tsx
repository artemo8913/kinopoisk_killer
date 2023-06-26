"use client";
import { createClassName } from "@/shared/lib/createClassName";
import styles from "./input.module.css";
import { DropDownButton } from "../button";
import { useCallback, useEffect, useState } from "react";
import { Card } from "../card";

interface SelectProps {
  additionalClass?: string;
  options: Array<string>;
  type: string;
  label?: string;
  placeholder: string;
  onChange: (type: string) => (value: string) => void;
}

interface OptionProps {
  id: number;
  value: string;
  onClick: (id: number) => void;
}
function Option(props: OptionProps) {
  const { id, value, onClick } = props;
  return (
    <div onClick={() => onClick(id)} className={styles.Option}>
      {value}
    </div>
  );
}
function Select(props: SelectProps) {
  const { additionalClass, label, type, placeholder, options, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const valueHandler = (id: number) => {
    if (id === 0) {
      setValue("");
      onChange(type)("");
      setIsOpen(false);
      return;
    }
    setValue(options[id - 1]);
    onChange(type)(options[id - 1]);
    setIsOpen(false);
  };

  const optionList = ["Не выбран"]
    .concat(options)
    .map((option, i) => <Option onClick={valueHandler} key={option} value={option} id={i} />);

  return (
    <div className={createClassName(styles.select_layout, {}, [additionalClass])}>
      <label>
        {Boolean(label) ? <span className={styles.label}>{label}</span> : null}
        <div className={styles.select_conteiner}>
          <div className={`${styles.select_text} ${value ? null : styles.isUnselect}`}>
            {value ? value : placeholder}
          </div>
          <DropDownButton handleClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} />
        </div>
      </label>
      {Boolean(isOpen) && <div className={styles.option_conteiner}>{optionList}</div>}
    </div>
  );
}
export { Select };
