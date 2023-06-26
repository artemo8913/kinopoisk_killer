import { ReactChild } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactChild;
  targetElem?: Element | DocumentFragment;
}

export function Portal(props: PortalProps) {
  const { children, targetElem = document.body } = props;
  return createPortal(children, targetElem);
}
