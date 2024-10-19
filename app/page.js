import BillTo from "@/components/bill-to";

import BillForm from "@/components/bill-form";
import InvoiceAddPage from "./fatura-ekleme/page";
import InvoiceCard from "@/components/invoice-card";
import ItemList from "@/components/item-list/page";

export default function Home() {
  return (
    <>
      <InvoiceAddPage />
      <InvoiceCard />
      <ItemList />
    </>
  );
}
