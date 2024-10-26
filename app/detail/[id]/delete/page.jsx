import Details from "@/components/details";
import Header from "@/components/header";
import "../details-main-page.css";
import { deleteInvoicesDetail, getInvoicesDetail } from "@/utils/service";
import { redirect } from "next/navigation";

export default async function DetailsPage({ params }) {
  const data = await getInvoicesDetail(Number(params?.id));

  const result = await deleteInvoicesDetail(data?.id);
  // console.log("result :>> ", result);

  if (result?.ok) {
    redirect("/");
  }

  return (
    <div className="container">
      <Header />

      <div className="details-page">
        <Details data={data} />
      </div>
    </div>
  );
}
