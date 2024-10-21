import Header from "@/components/header/page";
import AddInvoices from "@/components/main-page";
import InvoiceCard from "@/components/invoices-list";
import { getInvoices } from "@/utils/service";

export default async function Home() {
  const data = await getInvoices();

  return (
    <div className="general">
      <Header />
      
      <div className="kucukGeneral">
        <AddInvoices />
        <InvoiceCard data={data} />
      </div>
    </div>
  );
}
