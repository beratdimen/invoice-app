import Link from "next/link";
import "./style.css";
export default function InvoiceCard() {
  return (
    <Link href="/RT3080" className="cardContainer">
      <div className="cardHeader">
        <h2>
          <span>#</span>RT3080
        </h2>
        <p>Berat Dimen</p>
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
  );
}
