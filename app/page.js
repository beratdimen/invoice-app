import BillTo from "@/components/bill-to";

import BillForm from "@/components/bill-form";
import InvoiceAddPage from "./fatura-ekleme/page";
import InvoiceCard from "@/components/invoice-card";

export default function Home() {
  return (
    <>
      <InvoiceAddPage />
      <InvoiceCard />
    </>
  );
}
