"use client";
import { Header } from "@/components";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Header />
    </Provider>
  );
}
