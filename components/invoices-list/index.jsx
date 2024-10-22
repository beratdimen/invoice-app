import Link from "next/link";
import "./invoices-list.css";

export default async function InvoicesList({ data }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("tr-TR", { month: "long" });
    const year = date.getFullYear().toString().padStart(4, "0");

    return `${day} ${month} ${year}`;
  };
  return (
    <div className="invoices-list">
      {data?.map((x) => (
        <Link key={x.id} href={`/detail/${x.id}`} className="invoice-card">
          <div className="card-header">
            <h2>
              <span>#</span>
              {x.invoiceName}
            </h2>

            <p>{x.client.name}</p>
          </div>

          <div className="card-content">
            <div className="date-price">
              <p>{formatDate(x.paymentDue)}</p>
              {x.items.map((item) => (
                <h3 key={item.id}>{item.total} $</h3>
              ))}
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
