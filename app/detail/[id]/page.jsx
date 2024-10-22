import Details from "@/components/details";
import Header from "@/components/header";
import "./details-main-page.css";
import { getInvoicesDetail } from "@/utils/service";

export default async function DetailsPage({ params }) {
  const data = await getInvoicesDetail(Number(params?.id));

  console.log("data :>> ", data);
  return (
    <div className="container">
      <Header />

      <div className="details-page">
        <Details data={data} />
      </div>
    </div>
  );
}
