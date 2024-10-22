import Header from "@/components/header";
import { getInvoices } from "@/utils/service";
import InvoicesList from "@/components/invoices-list";
import MainPage from "@/components/main-page";

export default async function Home() {
  const data = await getInvoices();

  return (
    <div className="container">
      <Header />
      
      <div>
        <MainPage />
        <InvoicesList data={data} />
      </div>
    </div>
  );
}
