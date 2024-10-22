import Header from "@/components/header";
import { getInvoices } from "@/utils/service";
import InvoicesList from "@/components/invoices-list";
import MainPage from "@/components/main-page";
import "./home.css";
import { Toaster } from "sonner";

export default async function Home() {
  const data = await getInvoices();

  return (
    <div className="container">
      <Header />

      <div className="main-page-content">
        <MainPage data={data} />
        <InvoicesList data={data} />
      </div>

      <Toaster richColors />
    </div>
  );
}
