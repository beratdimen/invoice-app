import Header from "@/components/header";
import { getInvoices } from "@/utils/service";
import InvoicesList from "@/components/invoices-list";
import MainPage from "@/components/main-page";
import "./home.css";

export default async function Home() {
  const data = await getInvoices();

  return (
    <div className="container">
      <Header />

      <div className="main-page-content">
        <MainPage />
        <InvoicesList data={data} />
      </div>
    </div>
  );
}
