import Link from "next/link";
import "./style.css";

export default async function InvoiceCard() {
  const response = await fetch("https://invoiceapp.bariscakdi.com.tr/api/Invoice/GetInvoices")
  const invoiceData = await response.json();
  console.log(invoiceData)

  return (
    <>
      {invoiceData.map(x => 
        <Link href={`/${x.id}`} className="cardContainer">
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
              <p>● Pending</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
