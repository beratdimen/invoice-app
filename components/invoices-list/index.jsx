import Link from "next/link";
import "./invoices-list.css";

export default async function InvoicesList({ data }) {
  return (
    <div className="invoices-list">
      {data?.map((x) => (
        <Link key={x.id} href={`/${x.id}`} className="invoice-card">
          <div className="card-header">
            <h2>
              <span>#</span>RT3080
            </h2>

            <p>{x.invoiceName}</p>
          </div>

          <div className="card-content">
            <div className="date-price">
              <p>22 Ağustos 2024'e kadar</p>
              <h3>1.800$</h3>
            </div>

            <div className="situation">
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

      <div className="empty-container">
        <img src="../img/emptyImage.png" alt="emptyImage" />

        <div className="empty-texts">
          <h2>Burada hiçbir şey yok</h2>
          <p>Yeni düğmesini tıklayarak bir fatura oluşturun ve başlayın</p>
        </div>
      </div>
    </div>
  );
}
