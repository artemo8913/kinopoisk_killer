import { ReactChild, useCallback, useEffect, useRef, useState } from "react";
import css from "./modalFullWindow.module.css";
import { createClassName } from "@/shared/lib/createClassName";
import { Portal } from "../portal/portal";

interface ModalFullWindowProps {
  additionalClassName?: string;
  children?: ReactChild;
  isOpen: boolean;
  onClose: () => void;
}
const CLOSING_ANIMATION_DELAY = 100;

export function ModalFullWindow({ additionalClassName, children, isOpen, onClose }: ModalFullWindowProps) {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const delayClosing = useCallback(() => {
    if (!isClosing) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, CLOSING_ANIMATION_DELAY);
    }
  }, [onClose]);
  useEffect(() => {
    const eventESC = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        delayClosing();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", eventESC);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", eventESC);
    };
  }, [isOpen, delayClosing, onClose]);
  return (
    <Portal>
      <div
        onClick={() => delayClosing()}
        className={createClassName(css.ModalFullWindow, { [css.open]: isOpen }, [additionalClassName])}
      >
        <div className={css.overlay}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={createClassName(css.content, { [css.open]: isOpen && !isClosing })}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
