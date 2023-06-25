"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../model/store";

export function StoreProvider(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
