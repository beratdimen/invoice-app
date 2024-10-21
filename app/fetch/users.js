import AddInvoices from "@/components/invoice-add";
import Link from "next/link";
import "@/components/invoice-add/style.css";
import { getInvoices } from "@/utils/service";

export default async function AddInvoice() {
  const data = await getInvoices();
  console.log(data, "corse");

  // return (
  //   <div className="serverFethGeneral">
  //     <AddInvoices data={data} />

  //     <div className="cardSection">
  //       {data.map((x) => (
  //         <Link key={x.id} href={`/${x.id}`} className="cardContainer">
  //           <div className="cardHeader">
  //             <h2>
  //               <span>#</span>RT3080
  //             </h2>
  //             <p>{x.invoiceName}</p>
  //           </div>

  //           <div className="cardContentGeneral">
  //             <div className="cardContent">
  //               <p>22 Ağustos 2024'e kadar</p>
  //               <h3>1.800$</h3>
  //             </div>
  //             <div className="cardsituation">
  //               <p
  //                 className={
  //                   x.paymentStatus == 2
  //                     ? "pending"
  //                     : x.paymentStatus == 3
  //                     ? "paid"
  //                     : "draft"
  //                 }
  //               >
  //                 {x.paymentStatus == 2
  //                   ? " ● Pending"
  //                   : x.paymentStatus == 3
  //                   ? "● Paid"
  //                   : "● Draft"}
  //               </p>
  //             </div>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
}
