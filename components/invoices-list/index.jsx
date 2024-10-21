import Link from "next/link";
import "./style.css";

export default async function InvoiceCard({ data }) {
  // const response = await fetch(
  //   "https://invoiceapp.bariscakdi.com.tr/api/Invoice/GetInvoices"
  // );
  // const invoiceData = await response.json();
  // console.log(invoiceData, "corse");

  return (
    <>
      {data.map((x) => (
        <Link key={x.id} href={`/fetch/${x.id}`} className="cardContainer">
          <div className="cardHeader">
            <h2>
              <span>#</span>RT3080
            </h2>
            <p>{x.invoiceName}</p>
          </div>

          <div className="cardContentGeneral">
            <div className="cardContent">
              <p>22 Ağustos 2024'e kadar</p>
              <h3>1.800$</h3>
            </div>
            <div className="cardsituation">
              <p
                className={
                  x.paymentStatus == 2
                    ? "pending"
                    : x.paymentStatus == 3
                    ? "paid"
                    : "draft"
                }
              >
                {x.paymentStatus == 2
                  ? " ● Pending"
                  : x.paymentStatus == 3
                  ? "● Paid"
                  : "● Draft"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
