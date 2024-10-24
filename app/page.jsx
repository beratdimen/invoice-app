import Header from "@/components/header";
import { getInvoices } from "@/utils/service";
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
      </div>

      <Toaster richColors position="top-right" />
    </div>
  );
}
