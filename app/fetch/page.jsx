import Header from "@/components/header/page";
import AddInvoices from "@/components/invoice-add";
import InvoiceCard from "@/components/invoice-card";
import { getInvoices } from "@/utils/service";

export default async function AddInvoice() {
  const data = await getInvoices();
  console.log(data, "corse");

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
