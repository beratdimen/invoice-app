import Image from "next/image";
import styles from "./page.module.css";
import ItemList from "@/components/item-list/page";

export default function Home() {
  return (
    <>
      <ItemList />
    </>
  );
}
