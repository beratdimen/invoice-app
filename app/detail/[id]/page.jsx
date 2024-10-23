import Details from "@/components/details";
import Header from "@/components/header";
import "./details-main-page.css";
import { getInvoices, getInvoicesDetail } from "@/utils/service";

export default async function DetailsPage({ params }) {
  const data = await getInvoicesDetail(Number(params?.id));
  const dataAll = await getInvoices();

  console.log("data :>> ", data);
  return (
    <div className="container">
      <Header />

      <div className="details-page">
        <Details data={data} dataAll={dataAll} />
      </div>
    </div>
  );
}
